import React from "react";

export default function Databases(): JSX.Element {
  return (
    <section className="tw-py-24 lg:tw-px-8">
      <div className="tw-max-w-7xl tw-mx-auto lg:tw-grid lg:tw-grid-cols-2 lg:tw-gap-20 lg:tw-items-center">
        <div className="tw-p-4">
          <h2 className="tw-text-4xl lg:tw-text-5xl tw-mb-6 tw-font-extrabold">
            Explore
          </h2>

          <div className="tw-space-y-4 tw-text-gray-400 tw-text-lg">
            <p>
              Our work focuses on two core pillars: tools and research.
            </p>

            <p>
              <strong>
                <a
                  href="https://stableresearch.xyz/tools"
                  className="tw-text-emerald-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tools
                </a>
              </strong>{""}
              : Interactive data-driven dashboards that help you explore stablecoin collateral, markets and ecosystem activity.
            </p>

            <p>
              <strong>
                <a
                  href="https://stableresearch.xyz/docs-02"
                  className="tw-text-emerald-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Knowledge Base
                </a>
              </strong>{""}
              : A curated collection of (1) technical research and (2) succinct profiles of chains, wallets and other DeFi primitives. 
            </p>

            <p>
              Whether you’re analyzing trends or seeking clarity on a specific topic, Stable Research is built to support both exploration and decision-making.
            </p>
          </div>
        </div>

        <div className="tw-p-4">{/* Optional: Add visuals here */}</div>
      </div>
    </section>
  );
}
