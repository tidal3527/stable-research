import Head from "@docusaurus/Head";
import Applications from "@site/src/components/Applications";
import Databases from "@site/src/components/Databases";
import Hero from "@site/src/components/Hero";
import What from "@site/src/components/What";
import Who from "@site/src/components/Who";
import Explore from "@site/src/components/Explore";
import Beyond from "@site/src/components/Beyond";
import Layout from "@theme/Layout";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <Layout description="Research initiative exploring stablecoins and bridging traditional and decentralized finance with independent insights.">
      <Head>
        <title>Stable Research - Stablecoin Research & Analysis</title>
      </Head>
      <Hero />
      <What />
      <Who />
      <Beyond />
    </Layout>
  );
}
