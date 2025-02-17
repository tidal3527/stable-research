/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  
  
};

// Manually defining categories and setting explicit pagination
/*
manualSidebar: [
  {
    type: "category",
    label: "Stablecoins 101",
    link: {
      type:"doc",
      id: "docs/01-stablecoins-101/00-what-are-stablecoins",
    },
    items: [
      "docs/01-stablecoins-101/01-history-and-evolution",
      "docs/01-stablecoins-101/02-types-of-stablecoins",
      "docs/01-stablecoins-101/03-peg-mechanisms"
    ],
  }
]
  */

module.exports = sidebars;
