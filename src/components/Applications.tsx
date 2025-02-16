import React from "react";

type Feature = {
  title: string;

  icon: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const features: Feature[] = [
  {
    title: "Financial Institutions & Payment Providers",
    icon: require("@site/static/icons/Upload-toCloud.svg").default,
    description: (
      <>
        Technical evaluations, industry reports and competitive landscape analysis.
      </>
    ),
  },
  {
    title: "Regulators & Policymakers",
    icon: require("@site/static/icons/Cloud-Secure.svg").default,
    description: (
      <>
        Trends, impact assessments and macroeconomic implications.
      </>
    ),
  },
  {
    title: "Crypto & Fintech Companies",
    icon: require("@site/static/icons/Cursor-Click2.svg").default,
    description: (
      <>
        Product-market fit, institutional adoption strategies and competitive intelligence.
      </>
    ),
  },
  {
    title: "Investors & Traders",
    icon: require("@site/static/icons/Error-404Window.svg").default,
    description: (
      <>Risk assessments, liquidity analysis and DeFi yield opportunities.</>
    ),
  },
  {
    title: "Research & Media",
    icon: require("@site/static/icons/Approved-Window.svg").default,
    description: (
      <>Case studies, emerging narratives and expert interviews.</>
    ),
  },
  {
    title: "Casual Learners & Enthusiasts",
    icon: require("@site/static/icons/Factory2.svg").default,
    description: (
      <>
        Knowledge base, explainers and stablecoin fundamentals.
      </>
    ),
  },
];

export default function Applications(): JSX.Element {
  return (
    <section className="tw-py-24 lg:tw-px-8">
      <div className="tw-max-w-7xl tw-mx-auto lg:tw-grid lg:tw-grid-cols-2 lg:tw-gap-20 lg:tw-items-center">
        <div className="tw-p-4">
          <h2 className="tw-text-4xl lg:tw-text-5xl tw-mb-6 tw-font-extrabold">
            Who We Help
          </h2>
          <p className="tw-text-xl tw-text-gray-400">
            We study, analyze and interpret the stablecoin space, 
            providing custom insights through our tools and industry networks - 
            whether you need strategic overviews or technical analysis.
          </p>
          <img
            src="/img/applications-logos.png"
            className="tw-block tw-max-h-12 tw-mt-6"
          />
        </div>
        <div className="tw-p-4">
          <img src="/img/applications-screenshot.png" className="tw-block" />
        </div>
      </div>
      <div className="tw-max-w-7xl tw-mx-auto tw-mt-10 tw-grid lg:tw-grid-cols-3 tw-gap-x-20">
        {features.map((feature, index) => (
          <div key={index} className="tw-p-4">
            <feature.icon className="tw-fill-emerald-500 tw-w-12 tw-h-12" />
            <h3 className="tw-mt-4 tw-mb-2 tw-text-xl">{feature.title}</h3>
            <p className="tw-text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
