import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { SankeyController, Flow } from "chartjs-chart-sankey";
import Layout from "@theme/Layout";
import data from "../../static/stablecoin-flows.json";

// Register Chart.js components
Chart.register(...registerables, SankeyController, Flow);

const sankeyAnnotations = {
  id: "sankeyAnnotations",
  afterDraw(chart) {
    const {
      ctx,
      chartArea: { left, right, top, bottom, width },
    } = chart;

    const GUTTER_X = right + 60; // 20 px into the gutter

    /* helper to draw a two-line boxed label */
    const drawTwoLineBox = (
      lines: [string, string],
      x: number,
      y: number,
      align: CanvasTextAlign,
      stroke: string
    ) => {
      ctx.textAlign = align;
      ctx.textBaseline = "top";
      ctx.fillStyle = "#ffffff";
      ctx.font = "600 18px Inter,Arial,sans-serif";

      const [l1, l2] = lines;
      const m1 = ctx.measureText(l1);
      const m2 = ctx.measureText(l2);
      const txtW = Math.max(m1.width, m2.width);
      const txtH =
        m1.actualBoundingBoxAscent +
        m1.actualBoundingBoxDescent +
        m2.actualBoundingBoxAscent +
        m2.actualBoundingBoxDescent +
        4; // 4 px line-gap

      const padX = 8,
        padY = 4;
      const boxLeft =
        align === "left"
          ? x - padX
          : align === "right"
          ? x - txtW - padX
          : x - txtW / 2 - padX;

      ctx.strokeStyle = stroke;
      ctx.lineWidth = 2;
      ctx.strokeRect(boxLeft, y - padY, txtW + padX * 2, txtH + padY * 2);

      ctx.fillText(l1, x, y);
      ctx.fillText(
        l2,
        x,
        y + m1.actualBoundingBoxAscent + m1.actualBoundingBoxDescent + 4
      );
    };

    ctx.save();

    /* ── vertical guides (unchanged) ── */
    ctx.strokeStyle = "rgba(96,165,250,.4)";
    ctx.lineWidth = 1;
    [0.333, 0.666].forEach((pct) => {
      const x = left + width * pct;
      ctx.beginPath();
      ctx.moveTo(x, top);
      ctx.lineTo(x, bottom);
      ctx.stroke();
    });

    /* ── bottom-row boxed labels – now percentage-based ── */
    const COL1 = 1 / 3; // first guide line (≈ 33 %)
    const COL2 = 2 / 3; // second guide line (≈ 66 %)

    /* mid-point between 0 % and 33 %  →  0.5 * 0.333 = 0.1665 */
    const xCryptoBacked = left + width * (COL1 / 2);

    /* mid-point between 33 % and 66 % → 0.333 + 0.1665 = 0.4995 */
    const xFiatBacked = left + width * ((COL1 + COL2) / 2);

    /* ── bottom-row boxed labels (unchanged) ── */
    const drawBottomBox = (txt: string, x: number, stroke: string) =>
      drawTwoLineBox([txt, ""], x, bottom - 30, "center", stroke); // y = bottom-30 keeps it outside data

    drawBottomBox("Crypto Backed tokens", xCryptoBacked, "#f97316");
    drawBottomBox("Fiat Backed tokens", xFiatBacked, "#f97316");

    /* ── NEW: right-side boxed labels in gutter ── */
    drawTwoLineBox(
      ["Fiat", "Collateral"],
      GUTTER_X,
      top + 10,
      "left",
      "#f97316"
    );
    drawTwoLineBox(
      ["Crypto", "Collateral"],
      GUTTER_X,
      bottom - 50,
      "left",
      "#0ea5e9"
    );

    ctx.restore();
  },
};

Chart.register(sankeyAnnotations);

const sankeyHoverFocus = {
  id: "sankeyHoverFocus",
  afterEvent(chart, args) {
    // Only one dataset, so we can be concise
    const meta = chart.getDatasetMeta(0);
    const active = chart.getActiveElements().map((a) => a.element);

    // Desired opacities
    const IN_FOCUS = 0.6; // original look
    const FADED_OUT = 0.1; // almost transparent

    meta.data.forEach((el) => {
      // Flow elements share one options object - clone on first run
      if (!el.$originalAlpha) el.$originalAlpha = el.options.alpha ?? IN_FOCUS;

      el.options.alpha =
        active.length === 0 // nothing hovered → restore
          ? el.$originalAlpha
          : active.includes(el)
          ? IN_FOCUS
          : FADED_OUT;
    });

    chart.draw(); // redraw immediately (no animation needed)
  },
};

Chart.register(sankeyHoverFocus);

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

const StablecoinSankey: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
      ],
    };

    // Map of already assigned colors to keep consistency
    const assignedColors: Record<string, string> = {};
    const kindColorCounters: Record<string, number> = {
      cryptoToken: 0,
      fiatToken: 0,
      fiatCollateral: 0,
      cryptoCollateral: 0,
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
      const palette =
        colorPalettes[node.kind as keyof typeof colorPalettes] ||
        colorPalettes.cryptoToken;
      const colorIndex = kindColorCounters[node.kind] % palette.length;
      const color = palette[colorIndex];

      // Increment counter for this kind
      kindColorCounters[node.kind]++;

      // Store assigned color
      assignedColors[nodeId] = color;

      return color;
    };

    // Pre-assign colors to all nodes to ensure consistency
    data.nodes.forEach((node) => {
      getNodeColor(node.id);
    });

    // Prepare chart data
    const chartData = {
      labels: data.nodes.map((node) => getShortenedName(node.id)),
      datasets: [
        {
          label: "Stablecoin Flows",
          color: "#ffffff",
          font: {
            size: 13,
            weight: "500",
          },
          data: data.links.map((link) => ({
            from: link.source,
            to: link.target,
            flow: link.value / 1000000000, // Convert to billions
          })),
          colorFrom: (c) => getNodeColor(c.dataset.data[c.dataIndex].from),
          colorTo: (c) => getNodeColor(c.dataset.data[c.dataIndex].to),
          hoverColorFrom: (c) => getNodeColor(c.dataset.data[c.dataIndex].from),
          hoverColorTo: (c) => getNodeColor(c.dataset.data[c.dataIndex].to),

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
          size: "max", // Better handling of flow overlap
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
          data: chartData as any,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                callbacks: {
                  label: (context) => {
                    const data = context.dataset.data[context.dataIndex];
                    const from = getShortenedName(data.from);
                    const to = getShortenedName(data.to);
                    const value = data.flow.toFixed(2);
                    return `${from} → ${to}: $${value} billion`;
                  },
                },
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                titleFont: {
                  size: 14,
                },
                bodyFont: {
                  size: 13,
                },
              },
              legend: {
                display: false,
              },
            },
            layout: {
              padding: {
                top: 20,
                right: 180, // More space for right labels
                bottom: 50, // More space for bottom labels
                left: 20,
              },
            },
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
        <div
          className="w-full px-4 md:px-8"
          style={{ height: "calc(100vh - 100px)" }}
        >
          <div
            ref={containerRef}
            className="stablecoin-sankey"
            style={{
              width: "100%",
              height: "calc(100vh - 150px)",
              backgroundColor: "#111827", // Dark background
              borderRadius: "8px",
              padding: "12px",
              position: "relative",
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
