/**
SimplifiedEnglish
 */

import type {SidebarConfig} from '@vuepress/theme-default';

export const sideBarConfig: SidebarConfig = [
  {
    text: '简体英语',
    children: ['/README.md'],
  },
  {
    text: '第1章 简体英语概述',
    children: [
   		'/di-1-zhang-jian-ti-ying-yu-gai-shu/di-1.1-jie-jian-ti-ying-yu-jian-hua-gui-ze.md',
		'/di-1-zhang-jian-ti-ying-yu-gai-shu/di-1.2-jie-dan-ci-de-jian-hua.md',
		'/di-1-zhang-jian-ti-ying-yu-gai-shu/di-1.3-jie-biao-dian-fu-hao-de-jian-hua.md',
		'/di-1-zhang-jian-ti-ying-yu-gai-shu/di-1.4-jie-fa-yin-gui-ze-de-jian-hua.md',
		'/di-1-zhang-jian-ti-ying-yu-gai-shu/di-1.5-jie-yu-fa-de-jian-hua.md',
		'/di-1-zhang-jian-ti-ying-yu-gai-shu/di-1.6-jie-xun-du-yu-zhu-shi.md',
    ],
  },
   {
    text: '第2章 单词',
    children: [
   		'/di-2-zhang-dan-ci/di-2.1-jie-gai-shu.md',
		'/di-2-zhang-dan-ci/di-2.2-jie-yi-ji-ci-hui.md',
		'/di-2-zhang-dan-ci/di-2.3-jie-er-ji-ci-hui.md',
    ],
  },
];
