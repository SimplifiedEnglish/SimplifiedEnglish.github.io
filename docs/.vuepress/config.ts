/**
 * @file config.ts
 * @brief Configuration of the translated SimplifiedEnglish.
 * @copyright Copyright (c) 2023 SimplifiedEnglish. All rights reserved.
 */

import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { defineUserConfig } from '@vuepress/cli'
import { fullTextSearchPlugin } from 'vuepress2-plugin-full-text-search'
import { sitemapPlugin } from 'vuepress-plugin-sitemap2'
import { seoPlugin } from 'vuepress-plugin-seo2'
import { defaultTheme } from '@vuepress/theme-default'

import {sideBarConfig} from './configs'
    
export default defineUserConfig({
  lang: 'zh-CN',
  title: 'SimplifiedEnglish',
  description: 'SimplifiedEnglish',

  theme: defaultTheme({
    logo: '/favicon.ico',
    sidebar: sideBarConfig,
    docsRepo: 'https://github.com/SimplifiedEnglish/SimplifiedEnglish',
    docsBranch: 'main',
    editLinkPattern: ':repo/edit/:branch/:path',
    editLinkText: 'Edit in GitHub',
    lastUpdatedText: 'Last Update',
    contributorsText: 'Contributors'
  }),
  
  plugins: [
    fullTextSearchPlugin,
    sitemapPlugin({
      hostname: 'https://involutum.org/',
    }),
    seoPlugin({
      hostname: 'https://involutum.org/',
    }),
  ],
});
