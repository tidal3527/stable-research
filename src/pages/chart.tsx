import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { SankeyController, Flow } from "chartjs-chart-sankey";
import Layout from "@theme/Layout";
import data from "../../static/stablecoin-flows.json";

Chart.register(...registerables, SankeyController, Flow);

const PAD_X = 16; // inside-box horizontal padding
const PAD_Y = 8; // inside-box vertical   padding
const OUTSET = 24; // distance of any label from the chart edge

const sankeyAnnotations = {
  id: "sankeyAnnotations",
  afterDraw(chart) {
    const {
      ctx,
      chartArea: { left, right, top, bottom, width },
    } = chart;

    function drawBox({
      ctx,
      lines, // ['Fiat', 'collateral']  OR  ['Crypto Backed tokens']
      anchorX,
      anchorY,
      align, // 'left' | 'center' | 'right'
      baseline, // 'top'  | 'bottom'
      stroke,
    }: {
      ctx: CanvasRenderingContext2D;
      lines: string[];
      anchorX: number;
      anchorY: number;
      align: CanvasTextAlign;
      baseline: CanvasTextBaseline;
      stroke: string;
    }) {
      ctx.save();
      ctx.textAlign = align;
      ctx.textBaseline = "top";
      ctx.font = "600 18px Inter,Arial,sans-serif";
      ctx.fillStyle = "#ffffff";

      /* measure each line */
      const metrics = lines.map((l) => ctx.measureText(l));
      const txtW = Math.max(...metrics.map((m) => m.width));
      const lineH =
        metrics[0].actualBoundingBoxAscent +
        metrics[0].actualBoundingBoxDescent;
      const lineGap = lines.length > 1 ? 4 : 0; // gap between lines
      const txtH = lines.length * lineH + lineGap;

      /* shift anchor down if baseline === 'bottom' */
      const anchorYAdj = baseline === "bottom" ? anchorY - txtH : anchorY;

      /* compute box top-left */
      const boxLeft =
        align === "left"
          ? anchorX - PAD_X
          : align === "right"
          ? anchorX - txtW - PAD_X
          : anchorX - txtW / 2 - PAD_X;

      const boxTop = anchorYAdj - PAD_Y;

      /* draw rectangle */
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 2;
      ctx.strokeRect(boxLeft, boxTop, txtW + PAD_X * 2, txtH + PAD_Y * 2);

      /* render lines */
      lines.forEach((line, idx) =>
        ctx.fillText(line, anchorX, anchorYAdj + idx * (lineH + lineGap))
      );
      ctx.restore();
    }

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

    /* 1️⃣  bottom labels (centred horizontally) */
    const COL1 = 1 / 3,
      COL2 = 2 / 3;
    drawBox({
      ctx,
      lines: ["Crypto-backed tokens"],
      anchorX: left + width * (COL1 / 2),
      anchorY: bottom - OUTSET,
      align: "center",
      baseline: "bottom",
      stroke: "#f97316",
    });

    drawBox({
      ctx,
      lines: ["Fiat-backed tokens"],
      anchorX: left + width * ((COL1 + COL2) / 2),
      anchorY: bottom - OUTSET,
      align: "center",
      baseline: "bottom",
      stroke: "#f97316",
    });

    /* 2️⃣  right-hand labels in the gutter */
    drawBox({
      ctx,
      lines: ["Fiat", "Collateral"],
      anchorX: right + 30 + OUTSET,
      anchorY: top + OUTSET,
      align: "left",
      baseline: "top",
      stroke: "#f97316",
    });

    drawBox({
      ctx,
      lines: ["Crypto", "Collateral"],
      anchorX: right + 30 + OUTSET,
      anchorY: bottom - OUTSET,
      align: "left",
      baseline: "bottom",
      stroke: "#0ea5e9",
    });
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

interface Props {
  topNote?: string;
  bottomNote?: string;
}

const StablecoinSankey: React.FC<Props> = ({ topNote, bottomNote }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getShortenedName = (fullName: string): string => {
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

    const columnOf = (kind: string) =>
      ({
        cryptoToken: 0,
        fiatToken: 1,
        fiatCollateral: 2,
        cryptoCollateral: 2,
      }[kind] ?? 0);

    const chartData = {
      /* 1️⃣  node labels (use .display if the user supplied it) */
      labels: data.nodes.map((n) => getShortenedName(n.displayName ?? n.id)),

      datasets: [
        {
          label: "Stablecoin Flows",
          color: "#ffffff",
          font: {
            size: 13,
            weight: "500",
          },

          /* 2️⃣  convert billions → raw dollars (or whatever scale you pick) */
          data: data.links.map((l) => ({
            from: l.source,
            to: l.target,
            flow: l.value / 1000000000, // Convert to billions
          })),

          priority: data.nodes.reduce((acc, n) => {
            acc[n.id] =
              n.kind === "cryptoToken"
                ? 1 // left-column tokens
                : n.kind === "fiatToken"
                ? 2 // middle-column tokens
                : n.kind === "fiatCollateral"
                ? 3 // fiat collateral (top of col 2)
                : 4; // crypto collateral (bottom of col 2)
            return acc;
          }, {} as Record<string, number>),

          colorFrom: (c) => getNodeColor(c.dataset.data[c.dataIndex].from),
          colorTo: (c) => getNodeColor(c.dataset.data[c.dataIndex].to),
          hoverColorFrom: (c) => getNodeColor(c.dataset.data[c.dataIndex].from),
          hoverColorTo: (c) => getNodeColor(c.dataset.data[c.dataIndex].to),
          colorMode: "gradient",
          alpha: 0.6,

          /* 4️⃣  tell the Sankey which column each node belongs in */
          column: data.nodes.reduce((acc, n) => {
            acc[n.id] = columnOf(n.kind);
            return acc;
          }, {} as Record<string, number>),

          labels: data.nodes.reduce((acc, n) => {
            acc[n.id] = getShortenedName(n.displayName ?? n.id);
            return acc;
          }, {} as Record<string, string>),
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
        {topNote && (
          <h2 className="py-6 tw-m-2 text-center text-2xl font-bold leading-tight mx-auto max-w-3xl">
            {topNote}
          </h2>
        )}

        <div className="flex-1 w-full px-4 md:px-8 flex items-stretch">
          <div
            ref={containerRef}
            className="stablecoin-sankey flex-1"
            style={{
              backgroundColor: "#111827",
              borderRadius: "8px",
              height: "calc(100vh - 150px)",
              padding: "12px",
              position: "relative",
            }}
          >
            <canvas ref={chartRef} />
          </div>
        </div>

        {bottomNote && (
          <h3 className="tw-px-6 tw-py-2 text-center text-lg">{bottomNote}</h3>
        )}
      </main>
    </Layout>
  );
};

export default function ChartPage() {
  return (
    <StablecoinSankey
      topNote="Stablecoin reserve flows – May 2025"
      bottomNote="Source: issuer attestations – billions of USD"
    />
  );
}
