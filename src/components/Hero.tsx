import React from "react";

export default function Hero(): JSX.Element {
  return (
    <section className="tw-py-24 lg:tw-py-32 tw-text-center">
      {/* 🔔 Thin Banner at the Top */}
      <div className="tw-bg-emerald-600 tw-text-white tw-text-sm tw-py-2 tw-px-4 tw-rounded-md tw-mb-6 tw-inline-block">
        📢 New:{" "}
        <a
          href="/tools"
          className="tw-underline tw-font-semibold hover:tw-text-white"
        >
          Stablecoin Collateral Flow Tracker
        </a>{" "}
        is now live – May 2025 data included.
      </div>

      {/* Brand Label */}
      <div className="tw-text-sm lg:tw-text-base tw-text-gray-400 tw-uppercase tw-font-bold tw-tracking-wider tw-mb-4">
        STABLE RESEARCH
      </div>

      {/* Main Headline */}
      <h1 className="tw-text-4xl lg:tw-text-7xl tw-tracking-tight tw-leading-none tw-font-extrabold tw-px-4">
        Navigating{" "}
        <span className="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-to-cyan-400 tw-from-emerald-600">
          Stablecoins
        </span>
      </h1>

      {/* Subheading */}
      <p className="tw-text-lg lg:tw-text-xl tw-font-normal tw-text-gray-400 tw-max-w-2xl tw-mx-auto tw-px-4 tw-mt-6">
        A research initiative committed to exploring stablecoins and bridging traditional and decentralized finance.
      </p>
    </section>
  );
}
