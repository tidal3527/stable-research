import Layout from "@theme/Layout";
import React from "react";

export default function Contact(): JSX.Element {
  return (
    <Layout title="Contact Us" description="Get in touch with Stable Research">
      <section className="tw-py-24 lg:tw-px-8">
        <div className="tw-max-w-7xl tw-mx-auto lg:tw-grid lg:tw-grid-cols-2 lg:tw-gap-20 lg:tw-items-center">
          <div className="tw-p-4">
            <h2 className="tw-text-4xl lg:tw-text-5xl tw-mb-6 tw-font-extrabold">
              Connect With Us
            </h2>
            <p className="tw-text-xl tw-text-gray-400">
              We ae a global team of researchers, analysts, and stablecoin enthusiasts.
            </p>
            <p className="tw-text-xl tw-text-gray-400 tw-mt-4">
              For general questions, business inquiries, or collaboration opportunities, contact {" "} 
              <a href="https://www.linkedin.com/in/dasrahul29/" className="tw-text-emerald-500 tw-font-semibold">Rahul Das</a>, Lead Researcher, at
            </p>
            <p className="tw-text-xl tw-font-semibold tw-text-emerald-500 tw-mt-2">
              rd [at] stableresearch [dot] xyz
            </p>
            <p className="tw-text-sm tw-text-gray-500 tw-mt-2 tw-italic">
              Emails from the xyz domain may go to spam. Please check your inbox and spam folder.
            </p>
          </div>
          <div className="tw-p-4">
            <img
              src=""
              className="tw-block"
              alt=""
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
