import React from "react";

export default function Hero(): JSX.Element {
  return (
    <section className="tw-pt-16 lg:tw-pt-20 tw-text-center">

      <div className="tw-bg-emerald-700 tw-text-white tw-text-sm tw-font-medium tw-py-2 tw-px-4 tw-w-full tw-text-center">
        📢 New Tool: Stablecoin Collateral Flow Tracker (April 2025 data now live) —{" "}
        <a href="/tools" className="tw-underline hover:tw-text-white">Explore</a>
      </div>


      {/* Branding */}
      <div className="tw-text-sm lg:tw-text-base tw-text-gray-400 tw-uppercase tw-font-bold tw-tracking-wider tw-mt-8">
        STABLE RESEARCH
      </div>

      <h1 className="tw-text-4xl lg:tw-text-7xl tw-tracking-tight tw-leading-none tw-font-extrabold tw-px-4">
        Navigating{" "}
        <span className="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-to-cyan-400 tw-from-emerald-600">
          Stablecoins
        </span>
      </h1>

      <p className="tw-text-lg lg:tw-text-xl tw-font-normal tw-text-gray-400 tw-max-w-2xl tw-mx-auto tw-px-4 tw-mt-6">
        A research initiative committed to exploring stablecoins and bridging traditional and decentralized finance.
      </p>
    </section>
  );
}
