// @ts-check
// `@type` JSDoc annotations alw editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jailbreak Italia',
  tagline: 'Il sito ufficiale di Jailbreak Italia',
  favicon: 'img/favicon.ico',
  
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/blog/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JailbreakItalia', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'it',
    locales: ['it'],
  },
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: false,
      }),
    ],
  ],

  plugins: [
    [
      'docusaurus-lunr-search', 
      {
        languages: ['it'],
        maxHits: 10,
        indexBatchSize: 100,
        excludeRoutes: [
          'docs/tags/**',
          '404'
        ]
      }
    
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Jailbreak Italia',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guide',
          },
          {
            href: 'https://github.com/JailbreakItalia/blog',
            className: 'header-github-link',
            position: 'right',
          },
          {
            href: 'https://t.me/jailbreakitalia',
            className: 'header-telegram-link',
            position: 'right',
          },
          {
            href: 'https://t.me/jailbreakitalianews',
            className: 'header-news-link',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/JailBreakItalia',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} JailBreak Italia. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
