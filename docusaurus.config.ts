import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "Nicolas415 - Notes",
    // tagline: "Resources for cloud and sysadmin",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://nicolas415.github.io/",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "nicolas415", // Usually your GitHub org/user name.
    projectName: "nicolas415.github.io", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     "https://github.com/nicolas415/nicolas415.github.io/blob/main",
                },
                // blog: {
                //     // showReadingTime: true,
                //     // // Please change this to your repo.
                //     // // Remove this to remove the "edit this page" links.
                //     // editUrl:
                //     //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                // },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
            title: "Nicolas Laudinet",
            logo: {
                alt: "Notes Logo",
                src: "img/logo.svg",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "sidebarNetwork",
                    position: "left",
                    label: "Réseaux",
                },
                // { to: "/blog", label: "Blog", position: "left" },
                // {
                //     href: "https://github.com/facebook/docusaurus",
                //     label: "GitHub",
                //     position: "right",
                // },
            ],
        },
        footer: {
            // style: 'dark',
            // links: [
            //   {
            //     title: 'Docs',
            //     items: [
            //       {
            //         label: 'Tutorial',
            //         to: '/docs/intro',
            //       },
            //     ],
            //   },
            //   {
            //     title: 'Community',
            //     items: [
            //       {
            //         label: 'Stack Overflow',
            //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //       },
            //       {
            //         label: 'Discord',
            //         href: 'https://discordapp.com/invite/docusaurus',
            //       },
            //       {
            //         label: 'Twitter',
            //         href: 'https://twitter.com/docusaurus',
            //       },
            //     ],
            //   },
            //   {
            //     title: 'More',
            //     items: [
            //       {
            //         label: 'Blog',
            //         to: '/blog',
            //       },
            //       {
            //         label: 'GitHub',
            //         href: 'https://github.com/facebook/docusaurus',
            //       },
            //     ],
            //   },
            // ],
            copyright: `Copyright © ${new Date().getFullYear()} Nicolas Laudinet, Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
