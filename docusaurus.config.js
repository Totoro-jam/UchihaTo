// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer'

const editUrl = 'https://github.com/Totoro-jam/UchihaTo/edit/main/'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site test sdf ',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/uchihato.ico',

  // Set the production url of your site here
  url: 'https://totoro-jam.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/UchihaTo',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'totoro-jam', // Usually your GitHub org/user name.
  projectName: 'UchihaTo', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },

  // 插件 sass/scss
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'demo',
        path: 'demo',
        routeBasePath: 'demo',
        sidebarPath: './sidebars/sidebarsdemo.js',
        editUrl,
        // ... other options
      },
    ],
    // 解析tailwind.css, 为使用nextUI做准备
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
      }
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars/sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl,
        },
        theme: {
          customCss: './src/css/custom.scss',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'UchihaTo',
        logo: {
          alt: 'My Site Logo',
          src: 'img/uchihato1.png',
          srcDark: 'img/uchihato2.png',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'StudyNotes',
          },
          {
            to: '/demo/',
            label: 'ProjectDemo',
            position: 'left',
            activeBaseRegex: `/demo/`,
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            to: '/resume',
            label: 'Resume',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            className: 'github-box',
            href: 'https://github.com/Totoro-jam/UchihaTo',
            html: '<span class="github-logo">',
            position: 'right',
            target: '_blank',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UchihaTo, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      giscus: {
        repo: 'Totoro-jam/UchihaTo',
        repoId: 'R_kgDOLCdBTA',
        category: 'General',
        categoryId: 'DIC_kwDOLCdBTM4Cceck',
        theme: 'light',
        darkTheme: 'dark_dimmed',
      },
      // 配置可隐藏侧边栏
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
}

export default config
