// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const dotenv = require("dotenv");
dotenv.config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Docs",
  tagline: "Dinosaurs are cool",
  favicon: "media/favicon.ico",

  // Set the production url of your site here
  url: "http://192.168.1.224:3000",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "gauniverseorg", // Usually your GitHub org/user name.
  projectName: "ga-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/gauniverseorg/ga-docs/tree/master/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themes: ["docusaurus-theme-search-typesense"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "media/docusaurus-social-card.jpg",
      navbar: {
        logo: {
          alt: "General Admin Logo",
          src: "media/logo2.png",
        },
        items: [
          {
            href: "https://github.com/gauniverseorg/ga-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} General Admin. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      typesense: {
        // Replace this with the name of your index/collection.
        // It should match the "index_name" entry in the scraper's "config.json" file.
        typesenseCollectionName: "docs",

        typesenseServerConfig: {
          nodes: [
            {
              host: process.env.TYPESENSE_HOST,
              port: process.env.TYPESENSE_PORT,
              protocol: process.env.TYPESENSE_PROTOCOL,
            },
          ],
          apiKey: process.env.TYPESENSE_SEARCH_API_KEY,
        },

        // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
        typesenseSearchParameters: {},

        // Optional
        contextualSearch: true,
      },
    }),
};

module.exports = config;
