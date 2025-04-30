import React, { useState } from "react";
import Layout from "@theme/Layout";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
};

const stablecoins: Node[] = [
  { id: "usdt", label: "USDT", x: 100, y: 40, color: "#f97316" },
  { id: "usdc", label: "USDC", x: 100, y: 80, color: "#10b981" },
  { id: "sky", label: "Sky", x: 100, y: 120, color: "#8b5cf6" },
  { id: "ethena", label: "Ethena", x: 100, y: 160, color: "#6366f1" },
  { id: "fdusd", label: "FDUSD", x: 100, y: 200, color: "#f43f5e" },
  { id: "paypal", label: "PayPal", x: 100, y: 240, color: "#3b82f6" }
];

const collateral: Node[] = [
  { id: "corp_bonds", label: "Corporate Bonds", x: 500, y: 20, color: "#f59e0b" },
  { id: "metals", label: "Precious Metals", x: 500, y: 50, color: "#a3e635" },
  { id: "btc", label: "Bitcoins", x: 500, y: 80, color: "#fde047" },
  { id: "other_inv", label: "Other Investments", x: 500, y: 110, color: "#f87171" },
  { id: "loans", label: "Secured Loans", x: 500, y: 140, color: "#38bdf8" },
  { id: "cash_short", label: "Cash & Short-Term Deposits", x: 500, y: 170, color: "#4ade80" },
  { id: "t_bills", label: "U.S. Treasury Bills", x: 500, y: 200, color: "#60a5fa" },
  { id: "overnight_repo", label: "Overnight Repos", x: 500, y: 230, color: "#e879f9" },
  { id: "term_repo", label: "Term Repos", x: 500, y: 260, color: "#fb923c" },
  { id: "money_mkt", label: "Money Market Funds", x: 500, y: 290, color: "#c084fc" },
  { id: "cash_bank", label: "Cash & Bank Deposits", x: 500, y: 320, color: "#5eead4" },
  { id: "non_us_tbills", label: "Non-U.S. Treasury Bills", x: 500, y: 350, color: "#facc15" },
  { id: "usdc_ref", label: "USDC", x: 500, y: 380, color: "#14b8a6" },
  { id: "wrapped", label: "ETH BTC wrapped", x: 500, y: 410, color: "#06b6d4" },
  { id: "crypto_yield", label: "Crypto Yield-Bearing", x: 500, y: 440, color: "#ec4899" },
  { id: "mkr", label: "MKR", x: 500, y: 470, color: "#84cc16" }
];

// Placeholder dummy data — replace 'value' with real volumes later
const links = [
  { from: "usdt", to: "t_bills", value: 20 },
  { from: "usdt", to: "cash_bank", value: 10 },
  { from: "usdc", to: "t_bills", value: 25 },
  { from: "usdc", to: "overnight_repo", value: 15 },
  { from: "sky", to: "usdc_ref", value: 12 },
  { from: "ethena", to: "usdc_ref", value: 10 },
  { from: "fdusd", to: "cash_short", value: 8 },
  { from: "paypal", to: "money_mkt", value: 6 },
  { from: "usdc_ref", to: "t_bills", value: 18 },
  { from: "usdc_ref", to: "term_repo", value: 9 },
  { from: "ethena", to: "crypto_yield", value: 4 },
  { from: "sky", to: "wrapped", value: 6 },
  { from: "sky", to: "crypto_yield", value: 3 },
  { from: "paypal", to: "corp_bonds", value: 2 }
];

export default function Tools(): JSX.Element {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const allNodes = [...stablecoins, ...collateral];
  const getNode = (id: string) => allNodes.find((n) => n.id === id)!;

  const bezierPath = (x1: number, y1: number, x2: number, y2: number) => {
    const dx = (x2 - x1) * 0.6;
    return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
  };

  const isLinked = (nodeId: string, link: { from: string; to: string }) =>
    link.from === nodeId || link.to === nodeId;

  const isDimmed = (nodeId: string) => {
    if (!selectedNode) return false;
    if (nodeId === selectedNode) return false;
    const connected = links.some(
      (link) => isLinked(selectedNode, link) && isLinked(nodeId, link)
    );
    return !connected;
  };

  return (
    <Layout title="Stablecoin Collateral Tracker" description="Visualize stablecoin collateral flows.">
      <section className="tw-py-24 lg:tw-px-8">
        <div className="tw-max-w-7xl tw-mx-auto tw-text-center">
          <h1 className="tw-text-4xl lg:tw-text-5xl tw-font-extrabold">Stablecoin Collateral Tracker</h1>
          <p className="tw-text-lg tw-text-gray-400 tw-mt-4">
            Click on any stablecoin or collateral node to explore its relationships.
          </p>
        </div>
        <div className="tw-mt-12 tw-overflow-x-auto">
          <svg width="800" height="520" className="tw-mx-auto tw-bg-white tw-rounded-lg tw-shadow-md">
            {/* Edges */}
            {links.map((link, i) => {
              const from = getNode(link.from);
              const to = getNode(link.to);
              const dim = selectedNode && !isLinked(selectedNode, link);
              return (
                <path
                  key={i}
                  d={bezierPath(from.x + 20, from.y, to.x - 20, to.y)}
                  fill="none"
                  stroke={dim ? "#ccc" : "#999"}
                  strokeWidth={dim ? 2 : 4}
                  opacity={dim ? 0.3 : 0.8}
                  markerEnd="url(#arrow)"
                />
              );
            })}

            {/* Nodes */}
            {allNodes.map((node) => {
              const dim = isDimmed(node.id);
              return (
                <g
                  key={node.id}
                  onClick={() =>
                    setSelectedNode(selectedNode === node.id ? null : node.id)
                  }
                  style={{ cursor: "pointer" }}
                >
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={20}
                    fill={dim ? "#e5e7eb" : node.color}
                    stroke={selectedNode === node.id ? "#111" : "none"}
                    strokeWidth={selectedNode === node.id ? 2 : 0}
                  />
                  <text
                    x={node.x}
                    y={node.y + 35}
                    fontSize="12"
                    textAnchor="middle"
                    fill={dim ? "#aaa" : "#333"}
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}

            {/* Arrowhead */}
            <defs>
              <marker
                id="arrow"
                markerWidth="10"
                markerHeight="10"
                refX="6"
                refY="3"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L0,6 L9,3 z" fill="#999" />
              </marker>
            </defs>
          </svg>
        </div>
      </section>
    </Layout>
  );
}
