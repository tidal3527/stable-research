import React, { useState } from "react";
import Layout from "@theme/Layout";

// Core node and link types
type Node = {
  id: string;
  label: string;
  group: "stablecoin" | "collateral";
  color: string;
};

const stablecoins: Node[] = [
  { id: "usdt", label: "USDT", group: "stablecoin", color: "#f97316" },
  { id: "usdc", label: "USDC", group: "stablecoin", color: "#10b981" },
  { id: "sky", label: "Sky", group: "stablecoin", color: "#8b5cf6" },
  { id: "ethena", label: "Ethena", group: "stablecoin", color: "#6366f1" },
  { id: "fdusd", label: "FDUSD", group: "stablecoin", color: "#f43f5e" },
  { id: "paypal", label: "PayPal", group: "stablecoin", color: "#3b82f6" }
];

const collateral: Node[] = [
  { id: "corp_bonds", label: "Corporate Bonds", group: "collateral", color: "#f59e0b" },
  { id: "metals", label: "Precious Metals", group: "collateral", color: "#a3e635" },
  { id: "btc", label: "Bitcoins", group: "collateral", color: "#fde047" },
  { id: "other_inv", label: "Other Investments", group: "collateral", color: "#f87171" },
  { id: "loans", label: "Secured Loans", group: "collateral", color: "#38bdf8" },
  { id: "cash_short", label: "Cash & Short-Term Deposits", group: "collateral", color: "#4ade80" },
  { id: "t_bills", label: "U.S. Treasury Bills", group: "collateral", color: "#60a5fa" },
  { id: "overnight_repo", label: "Overnight Repos", group: "collateral", color: "#e879f9" },
  { id: "term_repo", label: "Term Repos", group: "collateral", color: "#fb923c" },
  { id: "money_mkt", label: "Money Market Funds", group: "collateral", color: "#c084fc" },
  { id: "cash_bank", label: "Cash & Bank Deposits", group: "collateral", color: "#5eead4" },
  { id: "non_us_tbills", label: "Non-U.S. Treasury Bills", group: "collateral", color: "#facc15" },
  { id: "usdc_ref", label: "USDC", group: "collateral", color: "#14b8a6" },
  { id: "wrapped", label: "ETH BTC wrapped", group: "collateral", color: "#06b6d4" },
  { id: "crypto_yield", label: "Crypto Yield-Bearing", group: "collateral", color: "#ec4899" },
  { id: "mkr", label: "MKR", group: "collateral", color: "#84cc16" }
];

const links = [
  { from: "usdt", to: "t_bills", value: 20000 },
  { from: "usdt", to: "cash_bank", value: 10000 },
  { from: "usdc", to: "t_bills", value: 25000 },
  { from: "usdc", to: "overnight_repo", value: 15000 },
  { from: "sky", to: "usdc_ref", value: 12000 },
  { from: "ethena", to: "usdc_ref", value: 10000 },
  { from: "fdusd", to: "cash_short", value: 8000 },
  { from: "paypal", to: "money_mkt", value: 6000 },
  { from: "usdc_ref", to: "t_bills", value: 18000 },
  { from: "usdc_ref", to: "term_repo", value: 9000 },
  { from: "ethena", to: "crypto_yield", value: 4000 },
  { from: "sky", to: "wrapped", value: 6000 },
  { from: "sky", to: "crypto_yield", value: 3000 },
  { from: "paypal", to: "corp_bonds", value: 2000 }
];

export default function Tools(): JSX.Element {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const allNodes = [...stablecoins, ...collateral];
  const getNode = (id: string) => allNodes.find((n) => n.id === id)!;

  const getY = (i: number, total: number) => 50 + i * (400 / total);

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
          <svg width="900" height="550" className="tw-mx-auto tw-bg-white tw-rounded-lg tw-shadow-md">
            {/* Arrows */}
            {links.map((link, i) => {
              const from = getNode(link.from);
              const to = getNode(link.to);
              const fromY = getY(stablecoins.findIndex(n => n.id === from.id), stablecoins.length);
              const toY = getY(collateral.findIndex(n => n.id === to.id), collateral.length);
              const dim = selectedNode && !(link.from === selectedNode || link.to === selectedNode);

              return (
                <g key={i}>
                  <line
                    x1={200} y1={fromY} x2={700} y2={toY}
                    stroke={dim ? "#ddd" : "#888"}
                    strokeWidth={Math.max(2, link.value / 5000)}
                    opacity={dim ? 0.2 : 0.8}
                  />
                  <text x={(200 + 700) / 2} y={(fromY + toY) / 2 - 5} fontSize="10" textAnchor="middle" fill="#666">
                    {link.value.toLocaleString()}
                  </text>
                </g>
              );
            })}

            {/* Stablecoins */}
            {stablecoins.map((node, i) => {
              const y = getY(i, stablecoins.length);
              const dim = selectedNode && node.id !== selectedNode && !links.some(l => l.from === selectedNode && l.to === node.id || l.from === node.id && l.to === selectedNode);
              return (
                <g key={node.id} onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)} style={{ cursor: "pointer" }}>
                  <rect x={120} y={y - 20} width={40} height={40} fill={dim ? "#e5e7eb" : node.color} rx={6} />
                  <text x={110} y={y + 5} textAnchor="end" fontSize="12" fill="#333">{node.label}</text>
                </g>
              );
            })}

            {/* Collateral */}
            {collateral.map((node, i) => {
              const y = getY(i, collateral.length);
              const dim = selectedNode && node.id !== selectedNode && !links.some(l => l.from === selectedNode && l.to === node.id || l.from === node.id && l.to === selectedNode);
              return (
                <g key={node.id} onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)} style={{ cursor: "pointer" }}>
                  <rect x={740} y={y - 20} width={40} height={40} fill={dim ? "#e5e7eb" : node.color} rx={6} />
                  <text x={790} y={y + 5} textAnchor="start" fontSize="12" fill="#333">{node.label}</text>
                </g>
              );
            })}
          </svg>
        </div>
      </section>
    </Layout>
  );
}
