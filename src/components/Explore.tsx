import React from "react";

export default function Databases(): JSX.Element {
  return (
    <section className="tw-py-24 lg:tw-px-8">
      <div className="tw-max-w-7xl tw-mx-auto lg:tw-grid lg:tw-grid-cols-2 lg:tw-gap-20 lg:tw-items-center">
        <div className="tw-p-4">
          <h2 className="tw-text-4xl lg:tw-text-5xl tw-mb-6 tw-font-extrabold">
            Explore
          </h2>
          <p className="tw-text-xl tw-text-gray-400">
            Our growing library of resources helps you explore the stablecoin landscape with clarity.
            Whether you're looking for simple explainers, insights into different protocols, or broader industry trends,
            explore our{" "}
            <a
              href="https://stableresearch.xyz/docs"
              className="tw-text-emerald-600"
              target="_blank"
              rel="noopener noreferrer"
            >
            knowledge base
            </a>{" "}
            to learn more.
          </p>

         
        </div>
        <div className="tw-p-4">
          
          
        </div>
      </div>
    </section>
  );
}
