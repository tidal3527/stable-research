// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");
const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Stable Research",
  tagline: "Explore the Stablecoin World",
  url: "https://stableresearch.xyz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "stableresearch-xyz", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  stylesheets: [
    // "https://fonts.googleapis.com/css2?family=Inter:wght@583&display=block",
    // "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=block",
  ],
  trailingSlash: false,
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/easypanel-io/website/tree/main",
          breadcrumbs: false,
          sidebarCollapsed: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/easypanel-io/website/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-4JL0CD3631",
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      }),
    ],
  ],

  plugins: [
    () => ({
      name: "postcss-tailwindcss-loader",
      configurePostCss(postcssOptions) {
        postcssOptions.plugins.unshift(require("tailwindcss"));
        return postcssOptions;
      },
    }),
    () => ({
      name: "lemonsqueezy-script",
      injectHtmlTags() {
        return {
          postBodyTags: [
            `<script>window.lemonSqueezyAffiliateConfig = { store: "easypanel" };</script>
<script src="https://lmsqueezy.com/affiliate.js" defer></script>`,
          ],
        };
      },
    }),
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "product",
    //     path: "product",
    //     routeBasePath: "product",
    //     breadcrumbs: false,
    //   },
    // ],
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "templates",
    //     path: "templates",
    //     routeBasePath: "templates",
    //     breadcrumbs: false,
    //   },
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: "dockerizer",
      //   content:
      //     '<a href="https://easypanel.io/dockerizer" style="font-weight: bold; text-decoration: none;">🚀 Introducing Dockerizer - The fastest way to dockerize your apps! 🚀</a>',
      //   backgroundColor: "#059669",
      //   textColor: "#fff",
      //   isCloseable: true,
      // },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      navbar: {
        title: "stable research (beta)",
        // hideOnScroll: true,
        
        items: [
          { to: "/docs", label: "Resources", position: "left"},
          { to: "/templates", label: "Contact", position: "left" },
          { to: "/pricing", label: "About", position: "left" },
        
          {
            to: "https://demo.easypanel.io",
            label: "Github",
            position: "left",
          },
          
        ],
      },
      algolia: {
        appId: "291Q7ITAVJ",
        apiKey: "e0fa29c5c372199c5b407b3c177d50b3",
        indexName: "website",
        contextualSearch: false,
        searchPagePath: false,
      },
      footer: {
        // style: "dark",
        links: [
          
          
          
          
         
        ],
        
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["php"],
      },
    }),
};

module.exports = config;
