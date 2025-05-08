import data from "../../static/stablecoin-flows.json";
import React, { useMemo } from "react";
import Layout from "@theme/Layout";
import {
  ResponsiveSankey,
  SankeyLayerId,
} from "@nivo/sankey";

export interface StablecoinRow {
  id: string;  
  name: string;
  kind: "crypto" | "fiat";
  total: number;
}

export interface CollateralRow {
  id: string;
  label: string;
  class: "crypto" | "fiat";
}

export interface HoldingRow {
  stablecoin: string;
  collateral: string;
  amount: number;
}

export interface FlowFileRel {
  month: string;
  stablecoins: StablecoinRow[];
  collateral: CollateralRow[];
  holdings: HoldingRow[];
}


interface NodeExtra { type: string; column: number; }
type MyNode = NodeExtra & { x?: number };
interface LinkExtra { source: string; target: string; value: number; color: string; }
type MyLink = LinkExtra;

/**
 * ───────────  OVERLAY LAYER (guides + labels)  ───────────
 */
interface OverlayProps {
  width: number;
  height: number;
  nodes: MyNode[];
}

const OverlayRails: React.FC<OverlayProps> = ({ width, height, nodes }) => {
  // group nodes by column for measurement
  const columns = useMemo(() => {
    const map: Record<number, MyNode[]> = {};
    nodes.forEach((n) => {
      if (!map[n.column]) map[n.column] = [];
      map[n.column].push(n);
    });
    return map;
  }, [nodes]);

  // centre‑x per column ➜ divider x’s midway between
  const centres = useMemo(() =>
    Object.keys(columns)
      .map(Number)
      .sort((a, b) => a - b)
      .map((col) => {
        const xs = columns[col].map((n) => (n.x ?? 0) + 9); // nodeThickness/2
        return xs.reduce((a, b) => a + b, 0) / xs.length;
      }),
  [columns]);

  const vDividers = centres.slice(0, -1).map((c, i) => (c + centres[i + 1]) / 2);

  // horizontal collateral split (top = fiat) – if we have both kinds
  const collatNodes = (columns[2] ?? []).filter((n) =>
    ["fiatCollateral", "cryptoCollateral"].includes(n.type)
  );
  const hasFiatCollat = collatNodes.some((n) => n.type === "fiatCollateral");
  const hasCryptoCollat = collatNodes.some((n) => n.type === "cryptoCollateral");

  let hDivider: number | null = null;
  if (hasFiatCollat && hasCryptoCollat) {
    const fiatBottom = Math.max(
      ...collatNodes
        .filter((n) => n.type === "fiatCollateral")
        .map((n) => (n.y ?? 0) + (n.height ?? 0))
    );
    hDivider = fiatBottom + 6;
  }

  // —— RENDER ——
  return (
    <g pointerEvents="none" fontFamily="Inter, sans-serif">
      {/* vertical rails */}
      {vDividers.map((x, i) => (
        <line
          key={`v-${i}`}
          x1={x}
          x2={x}
          y1={0}
          y2={height}
          stroke="#8a97cf"
          strokeWidth={2}
        />
      ))}

      {/* horizontal split in collateral column */}
      {hDivider !== null && (
        <line
          x1={vDividers[vDividers.length - 1]}
          x2={width}
          y1={hDivider}
          y2={hDivider}
          stroke="#8a97cf"
          strokeWidth={1}
        />
      )}

      {/* —————  LABELS  ————— */}
      <text
        x={centres[0]}
        y={height + 28}
        textAnchor="middle"
        fontWeight={600}
        fill="#ffffff"
        fontSize={16}
      >
        Crypto backed
      </text>

      <text
        x={centres[1]}
        y={height + 28}
        textAnchor="middle"
        fontWeight={600}
        fill="#ffffff"
        fontSize={16}
      >
        Fiat backed tokens
      </text>

      {hDivider === null ? (
        // only one collateral type present – label centre of column
        <text
          x={centres[2]}
          y={height / 2}
          textAnchor="middle"
          fontWeight={600}
          fill="#ffffff"
          fontSize={16}
        >
          {hasFiatCollat ? "Fiat collateral" : "Crypto collateral"}
        </text>
      ) : (
        // both present – split labels
        <>
          <text
            x={centres[2]}
            y={hDivider / 2}
            textAnchor="middle"
            fontWeight={600}
            fill="#ffffff"
            fontSize={16}
          >
            Fiat collateral
          </text>
          <text
            x={centres[2]}
            y={hDivider + (height - hDivider) / 2}
            textAnchor="middle"
            fontWeight={600}
            fill="#ffffff"
            fontSize={16}
          >
            Crypto collateral
          </text>
        </>
      )}
    </g>
  );
};

export default function FlowPage() {

  return (
    <Layout title="Stablecoin Flow">
      <main className="min-h-screen bg-gray-900 flex flex-col items-center pb-14 relative">
        <div className="w-full px-4 md:px-8" style={{ height: "calc(100vh - 100px)" }}>
          <ResponsiveSankey
            data={data}
            valueFormat={(v) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v)}
            layout="horizontal"
            sort="ascending"
            margin={{ top: 40, right: 160, bottom: 60, left: 50 }}
            align="justify"
            nodeThickness={18}
            nodeSpacing={28}
            nodeBorderWidth={1}
            nodeBorderColor={{ from: "color", modifiers: [["darker", 0.8]] }}
            nodeOpacity={1}
            linkOpacity={0.45}
            linkHoverOpacity={0.8}
            linkHoverOthersOpacity={0.1}
            linkBlendMode="multiply"
            enableLinkGradient
            labelPosition="inside"
            labelOrientation="horizontal"
            enableLabels 
            labelPadding={16}
            labelTextColor="#ffffff"
            layers={["links", OverlayRails, "nodes", "labels"] as SankeyLayerId[]}
            theme={{
              textColor: "#ffffff",
              tooltip: {
                container: {
                  background: "#111827",
                  color: "#ffffff",
                  fontSize: 12,
                },
              },
            }}
          />
        </div>
      </main>
    </Layout>
  );
}
