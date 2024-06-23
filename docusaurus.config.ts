import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Dave Harrington.net',
  tagline: 'Stuff',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.daveharrington.net',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'daveharrington',
  projectName: 'daveharrington.github.io',
  deploymentBranch: 'main',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/daveharrington/daveharrington.github.io',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        docs: false,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Dave Harrington',
      logo: {
        alt: 'My Logo',
        src: 'img/logo.svg',
      },
      items: [
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dave Harrington.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
