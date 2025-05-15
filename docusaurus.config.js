// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");
const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Stable Research",
  tagline: "Navigating Stablecoins",
  url: "https://stableresearch.xyz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "tidal3527", // Usually your GitHub org/user name.
  projectName: "stable-research", // Usually your repo name.
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
          // editUrl: "https://github.com/tidal3527/stable-research",
          breadcrumbs: false,
          sidebarCollapsed: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/tidal3527/stable-research",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-PZLYMR849M",
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

  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'docs-02',
      path: 'docs-02',
      routeBasePath: 'docs-02',
      sidebarPath: require.resolve('./sidebars-docs-02.js'),
      breadcrumbs: false,
      sidebarCollapsed: true,
      },
    ],

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
      //   backgroundColor: "#059669",
      //   textColor: "#fff",
      //   isCloseable: true,
      // },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      navbar: {
        title: "stable research",
        // hideOnScroll: true,
        
        items: [
          { to: "/contact", label: "Contact", position: "left" },
          { to: "/tools", label: "Tools", position: "left" },
          { to: "/docs-02", label: "Knowledge Base", position: "left" },
          { to: "/docs", label: "Stablecoins 101", position: "left"},
          
          
          {
            to: "https://github.com/tidal3527/stable-research",
            label: "Github",
            position: "left",
          },

         // {
           // to: "https://miruvor.me/",
            // label: "Blog",
            // position: "left",
         // },
          
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
