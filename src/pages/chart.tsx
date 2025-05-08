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

interface MyNode {
  id: string;
  kind: string;
  type?: string;
  column: number;
  x?: number;
  y?: number;
  height?: number;
  width?: number;
  [key: string]: any;
}

interface OverlayProps {
  width: number;
  height: number;
  nodes: MyNode[];
}

const OverlayRails: React.FC<OverlayProps> = ({ width, height, nodes }) => {
  const columns = useMemo(() => {
    const map: Record<number, MyNode[]> = {};
    nodes.forEach((n) => {
      if (!map[n.column]) map[n.column] = [];
      map[n.column].push(n);
    });
    return map;
  }, [nodes]);

  const centres = useMemo(() =>
    Object.keys(columns)
      .map(Number)
      .sort((a, b) => a - b)
      .map((col) => {
        const currentColumnNodes = columns[col] || [];
        if (currentColumnNodes.length === 0) return 0;
        const xs = currentColumnNodes.map((n) => (n.x ?? 0) + (n.width ?? 18) / 2);
        return xs.reduce((a, b) => a + b, 0) / xs.length;
      }),
  [columns]);

  const vDividers = centres.slice(0, -1).map((c, i) => (c + centres[i + 1]) / 2);

  const collatNodes = (columns[2] ?? []).filter((n) =>
    ["fiatCollateral", "cryptoCollateral"].includes(n.kind)
  );
  const hasFiatCollat = collatNodes.some((n) => n.kind === "fiatCollateral");
  const hasCryptoCollat = collatNodes.some((n) => n.kind === "cryptoCollateral");

  let hDivider: number | null = null;
  if (hasFiatCollat && hasCryptoCollat) {
    const fiatBottom = Math.max(
      ...collatNodes
        .filter((n) => n.kind === "fiatCollateral")
        .map((n) => (n.y ?? 0) + (n.height ?? 0))
    );
    hDivider = fiatBottom + 6;
  }

  return (
    <g pointerEvents="none" fontFamily="Inter, sans-serif">
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

      {hDivider !== null && vDividers.length > 1 && (
        <line
          x1={vDividers[vDividers.length - 1]}
          x2={width}
          y1={hDivider}
          y2={hDivider}
          stroke="#8a97cf"
          strokeWidth={1}
        />
      )}

      {centres.length > 0 && centres[0] !== 0 && (
        <text
          x={centres[0]}
          y={height + 28}
          textAnchor="middle"
          fontWeight={600}
          fill="#ffffff"
          fontSize={16}
        >
          Crypto backed
        </text>
      )}

      {centres.length > 1 && centres[1] !== 0 && (
        <text
          x={centres[1]}
          y={height + 28}
          textAnchor="middle"
          fontWeight={600}
          fill="#ffffff"
          fontSize={16}
        >
          Fiat backed tokens
        </text>
      )}

      {centres.length > 2 && centres[2] !== 0 && (
        hDivider === null ? (
          <text
            x={centres[2]}
            y={height / 2}
            dominantBaseline="middle"
            textAnchor="middle"
            fontWeight={600}
            fill="#ffffff"
            fontSize={16}
          >
            {hasFiatCollat ? "Fiat collateral" : (hasCryptoCollat ? "Crypto collateral" : "Collateral")}
          </text>
        ) : (
          <>
            <text
              x={centres[2]}
              y={hDivider / 2}
              dominantBaseline="middle"
              textAnchor="middle"
              fontWeight={600}
              fill="#ffffff"
              fontSize={16}
            >
              Fiat collateral
            </text>
            <text
              x={centres[2]}
              y={hDivider + (height - hDivider) / 2}
              dominantBaseline="middle"
              textAnchor="middle"
              fontWeight={600}
              fill="#ffffff"
              fontSize={16}
            >
              Crypto collateral
            </text>
          </>
        )
      )}
    </g>
  );
};

export default function FlowPage() {
  const sankeyData = data as { nodes: MyNode[]; links: any[] };

  return (
    <Layout title="Stablecoin Flow">
      <main className="min-h-screen bg-gray-900 flex flex-col items-center pb-14 relative">
        <div className="w-full px-4 md:px-8" style={{ height: "calc(100vh - 100px)" }}>
          <ResponsiveSankey
            data={sankeyData}
            valueFormat={(v) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v)}
            layout="horizontal"
            sort={(a, b) => a.id.localeCompare(b.id)}
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
            label={node => node.id.startsWith('DummySource') ? '' : node.id}
            labelPosition="inside"
            labelOrientation="horizontal"
            enableLabels 
            labelPadding={16}
                        labelTextColor="#ffffff"
            layers={["links", OverlayRails as React.FC<any>, "nodes", "labels"] as SankeyLayerId[]}
            theme={{
              textColor: "#ffffff",
              tooltip: {
                container: {
                  background: "#111827",
                  color: "#ffffff",
                  fontSize: 14,
                },
              },
            }}
            colors={node => {
              if (node.id.startsWith('DummySource')) return 'rgba(0,0,0,0)';
              if (node.kind === 'cryptoToken') return '#61cdbb';
              if (node.kind === 'fiatToken') return '#f47560';
              if (node.kind === 'fiatCollateral') return '#e8a838';
              if (node.kind === 'cryptoCollateral') return '#97e3d5';
              return '#cccccc';
            }}
          />
        </div>
      </main>
    </Layout>
  );
}
