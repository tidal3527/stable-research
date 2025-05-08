import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { SankeyController, Flow } from "chartjs-chart-sankey";
import Layout from "@theme/Layout";
import data from "../../static/stablecoin-flows.json";

// Register Chart.js components
Chart.register(...registerables, SankeyController, Flow);

// Define types for our data structure
interface Node {
  id: string;
  kind: string;
  column: number;
}

interface Link {
  source: string;
  target: string;
  value: number;
}

interface SankeyData {
  month: string;
  nodes: Node[];
  links: Link[];
}

const StablecoinSankey: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to add category labels and grid lines
  const addCategoryLabels = () => {
    const canvas = chartRef.current;
    if (!canvas || !containerRef.current) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Get container dimensions
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    // Draw vertical grid lines
    const columnPositions = [0.25, 0.5, 0.75]; // Relative positions
    columnPositions.forEach(pos => {
      const x = containerWidth * pos;
      ctx.beginPath();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;
      ctx.moveTo(x, 0);
      ctx.lineTo(x, containerHeight);
      ctx.stroke();
    });
    
    // Add category labels with proper positioning
    ctx.fillStyle = "white";
    ctx.font = "18px Arial"; // Larger text
    
    // Right side labels
    ctx.textAlign = "right";
    ctx.fillText("Crypto collateral", containerWidth - 20, containerHeight - 20);
    
    // Left side labels
    ctx.textAlign = "left";
    ctx.fillText("Crypto Backed tokens", 20, containerHeight - 20);
    
    // Middle labels
    ctx.textAlign = "center";
    ctx.fillText("Fiat Backed tokens", containerWidth * 0.25, containerHeight - 20);
    ctx.fillText("Fiat collateral", containerWidth * 0.75, containerHeight - 20);
  };

  useEffect(() => {
    // Helper function to get shorter node names
    const getShortenedName = (fullName: string): string => {
      // Map full names to shorter display names
      const nameMap: Record<string, string> = {
        "Sky USDS": "USDS",
        "Ethena USDe": "USDe",
        "Tether USDT": "USDT",
        "Circle USDC": "USDC",
        "First Digital FDUSD": "FDUSD",
        "PayPal PYUSD": "PYUSD",
        "U.S. Treasury Bills": "US Treasury Bills",
        "Overnight Reverse Repurchase Agreements": "Overnight Repo",
        "Term Reverse Repurchase Agreements": "Term Repo",
        "Money Market Funds": "Money Markets",
        "Cash & Bank Deposits": "Cash/Bank Deposits",
        "Non‑U.S. Treasury Bills": "Non-US Treasury",
        "Corporate Bonds": "Corporate Bonds",
        "Precious Metals": "Precious Metals",
        "Secured Loans": "Secured Loans",
        "Other Investments": "Other Investments",
        ETH: "ETH",
        BTC: "BTC",
        MKR: "MKR",
        SOL: "SOL",
        "Spark Lending": "Spark Lending",
      };

      return nameMap[fullName] || fullName;
    };

    // Color palettes by node kind, not specific names
    const colorPalettes = {
      cryptoToken: [
        "#16a34a", // Green
        "#059669", // Emerald
        "#10b981", // Teal
        "#14b8a6", // Mint
      ],
      fiatToken: [
        "#e11d48", // Red
        "#ef4444", // Orange-red
        "#f43f5e", // Rose
        "#f97316", // Orange
      ],
      fiatCollateral: [
        "#d97706", // Amber
        "#f59e0b", // Yellow
        "#ca8a04", // Gold
        "#facc15", // Yellow
        "#eab308", // Yellow
        "#a16207", // Brown
      ],
      cryptoCollateral: [
        "#0891b2", // Cyan
        "#0e7490", // Light blue
        "#0369a1", // Blue
        "#2563eb", // Royal blue
        "#4f46e5", // Indigo
      ]
    };

    // Map of already assigned colors to keep consistency
    const assignedColors: Record<string, string> = {};
    const kindColorCounters: Record<string, number> = {
      cryptoToken: 0,
      fiatToken: 0,
      fiatCollateral: 0,
      cryptoCollateral: 0
    };

    // Generate color based on node kind, not specific name
    const getNodeColor = (nodeId: string): string => {
      // Return already assigned color if exists
      if (assignedColors[nodeId]) {
        return assignedColors[nodeId];
      }

      const node = data.nodes.find((n) => n.id === nodeId);
      if (!node) return "#888888";

      // Get the next color from the appropriate palette
      const palette = colorPalettes[node.kind as keyof typeof colorPalettes] || colorPalettes.cryptoToken;
      const colorIndex = kindColorCounters[node.kind] % palette.length;
      const color = palette[colorIndex];
      
      // Increment counter for this kind
      kindColorCounters[node.kind]++;
      
      // Store assigned color
      assignedColors[nodeId] = color;
      
      return color;
    };

    // Pre-assign colors to all nodes to ensure consistency
    data.nodes.forEach(node => {
      getNodeColor(node.id);
    });

    // Prepare chart data
    const chartData = {
      labels: data.nodes.map((node) => getShortenedName(node.id)),
      datasets: [
        {
          label: "Stablecoin Flows",
          data: data.links.map((link) => ({
            from: link.source,
            to: link.target,
            flow: link.value / 1000000000, // Convert to billions
          })),
          colorFrom: (c: any) => getNodeColor(c.dataset.data[c.dataIndex].from),
          colorTo: (c: any) => getNodeColor(c.dataset.data[c.dataIndex].to),
          colorMode: "gradient",
          alpha: 0.6, // More transparent for the glow effect
          labels: data.nodes.reduce((acc, node) => {
            acc[node.id] = getShortenedName(node.id);
            return acc;
          }, {} as Record<string, string>),
          // Set column for each node
          column: data.nodes.reduce((acc, node) => {
            acc[node.id] = node.column;
            return acc;
          }, {} as Record<string, number>),
          // Adjust node ordering within columns
          priority: data.nodes.reduce((acc, node) => {
            // Set priority based on node kind to group them nicely
            if (node.kind === "cryptoToken") acc[node.id] = 1;
            else if (node.kind === "fiatToken") acc[node.id] = 2;
            else if (node.kind === "fiatCollateral") acc[node.id] = 3;
            else if (node.kind === "cryptoCollateral") acc[node.id] = 4;
            return acc;
          }, {} as Record<string, number>),
          // Size to determine how to handle overlap
          size: 'max', // Better handling of flow overlap
        },
      ],
    };

    if (chartRef.current) {
      // Destroy existing chart if it exists
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // Create new chart
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        // Clear the canvas with dark background
        ctx.fillStyle = "#111827"; // Dark gray background similar to Nivo
        ctx.fillRect(0, 0, chartRef.current.width, chartRef.current.height);
        
        chartInstanceRef.current = new Chart(ctx, {
          type: "sankey",
          data: chartData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                callbacks: {
                  label: (context: any) => {
                    const data = context.dataset.data[context.dataIndex];
                    const from = getShortenedName(data.from);
                    const to = getShortenedName(data.to);
                    const value = data.flow.toFixed(2);
                    return `${from} → ${to}: $${value} billion`;
                  },
                },
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleFont: {
                  size: 14,
                  color: 'white'
                },
                bodyFont: {
                  size: 13,
                  color: 'white'
                }
              },
              legend: {
                display: false,
              },
            },
            animation: {
              duration: 500,
              onComplete: () => {
                // Draw category labels after animation completes
                addCategoryLabels();
              },
            },
            layout: {
              padding: {
                top: 20,
                right: 120, // More space for right labels
                bottom: 50, // More space for bottom labels
                left: 20
              }
            }
          },
        });
      }
    }

    // Cleanup on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <Layout title="Stablecoin Flow">
      <main className="min-h-screen bg-gray-900 flex flex-col items-center pb-14 relative">
        <div className="w-full px-4 md:px-8" style={{ height: "calc(100vh - 100px)" }}>
          <div 
            ref={containerRef}
            className="stablecoin-sankey" 
            style={{ 
              width: "100%", 
              height: "calc(100vh - 250px)",
              backgroundColor: "#111827", // Dark background
              borderRadius: "8px",
              padding: "12px",
              position: "relative"
            }}
          >
            <canvas ref={chartRef} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default StablecoinSankey;