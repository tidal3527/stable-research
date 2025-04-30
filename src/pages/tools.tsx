import React, { useState } from "react";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
};

const stablecoins: Node[] = [
  { id: "usdc", label: "USDC", x: 100, y: 60, color: "#10b981" },
  { id: "usdt", label: "USDT", x: 100, y: 160, color: "#f97316" },
  { id: "ethena", label: "Ethena", x: 100, y: 260, color: "#6366f1" },
];

const collateral: Node[] = [
  { id: "t_bills", label: "T-Bills", x: 500, y: 100, color: "#3b82f6" },
  { id: "cash", label: "Cash", x: 500, y: 220, color: "#f59e0b" },
];

const links = [
  { from: "usdc", to: "t_bills" },
  { from: "usdt", to: "cash" },
  { from: "ethena", to: "t_bills" },
];

export default function App() {
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
    const connected = links.some((link) => isLinked(selectedNode, link) && isLinked(nodeId, link));
    return !connected;
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Stablecoin Collateral Tracker (Interactive)</h1>
      <p>Click a node to highlight its relationships</p>
      <svg width="640" height="360" style={{ border: "1px solid #ddd" }}>
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
            <g key={node.id} onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)} style={{ cursor: "pointer" }}>
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
  );
}
