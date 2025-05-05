import React from "react";
import Layout from "@theme/Layout";
import {
  ResponsiveSankey,
  SankeyLayerId,
} from "@nivo/sankey";
import flows from "../../static/stablecoin-flows.json";

type FlowFile = typeof flows;

interface NodeExtra {
  type: string;
  column: number;
  id: string;
}

type MyNode = NodeExtra & {
  x?: number;
};

interface LinkExtra {
  source: string;
  target: string;
  value: number;
  color: string;
}

type MyLink = LinkExtra;

interface OverlayRailsProps {
  width: number;
  height: number;
  nodes: MyNode[];
}

const OverlayRails = ({ width, height, nodes }: OverlayRailsProps) => {
  // Find unique column values and their positions
  const columnPositions = Array.from(new Set(nodes.map(n => n.column)))
    .sort((a, b) => a - b)
    .map(col => col * 240);
  
  return (
    <g pointerEvents="none">
      {/* vertical rails */}
      {columnPositions.slice(1, -1).map((pos, i) => (
        <line 
          key={i}
          x1={pos} 
          x2={pos} 
          y1={0} 
          y2={height}
          stroke="#ffbe3b" 
          strokeWidth={1} 
        />
      ))}

      <svg x={120} y={height + 4} width="120" height="40">
        <text
          x="60" y="25"
          textAnchor="middle" fontWeight="bold" fill="white"
          fontSize="18"
          style={{ textTransform: 'uppercase' }}
        >
          Crypto backed
        </text>
      </svg>
      <text
        x={width - 120} y={height + 24}
        textAnchor="middle" fontWeight="bold" fill="white"
      >
        Crypto&nbsp;collateral
      </text>
    </g>
  );
};

function buildSankey(file: FlowFile) {
  const nodes: MyNode[] = [];
  const links: MyLink[] = [];

  const addNode = (id: string, type: string, column: number) => {
    if (!nodes.find((n) => n.id === id)) nodes.push({ id, type, column });
  };

  file.stablecoins.forEach((sc) => {
    addNode(sc.name, sc.type, sc.column);

    sc.collateral.forEach((col) => {
      const meta = file.collateralMeta[col.name];
      addNode(col.name, meta.type, meta.column);

      links.push({
        source: sc.name,
        target: col.name,
        value: col.amount,
        color: sc.type === "cryptoToken" ? "#ef4444" : "#3b82f6",
      });
    });
  });

  /* lock node.x so crypto tokens = left, collat = right */
  nodes.forEach((n) => (n.x = n.column * 240));

  return { nodes, links };
}
// ------------------------------------------------

export default function FlowPage() {
  const { nodes, links } = buildSankey(flows);

  return (
      <Layout title="Stablecoin Flow">
        <main className="min-h-screen bg-gray-900 flex flex-col items-center pb-12 relative">
          <h1 className="text-white text-3xl md:text-4xl font-semibold mt-10 mb-6">
            Stablecoin Reserve Flows — {flows.month}
          </h1>

          {/* divider & category labels */}
          <div className="absolute inset-y-0 left-1/2 w-px bg-blue-400/70 pointer-events-none" />
          <span className="absolute left-4 bottom-10 text-white text-sm">
            Crypto-backed tokens
          </span>
          <span className="absolute left-[55%] bottom-10 text-white text-sm">
            Crypto collateral
          </span>

          <div className="w-full px-4 md:px-8" style={{ height: 520 }}>
            <ResponsiveSankey
              data={{ nodes, links }}
              layout="horizontal"
              sort="ascending"
              margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
              align="justify"
              nodeThickness={18}
							layers={[
								'links',
								OverlayRails,
								'nodes',
								'labels',
								'legends',
							] as (SankeyLayerId)[]}
              nodeSpacing={28}
              nodeBorderWidth={1}
              nodeBorderColor={{ from: "color", modifiers: [["darker", 0.8]] }}
              nodeOpacity={1}
              linkOpacity={0.45}
              linkHoverOpacity={0.8}
              linkHoverOthersOpacity={0.1}
              linkBlendMode="multiply"
              enableLinkGradient
              labelPosition="outside"
              labelOrientation="vertical"
              labelPadding={16}
              labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
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
