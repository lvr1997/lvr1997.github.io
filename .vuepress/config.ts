import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'
import { comment } from './config/comment'


export default defineUserConfig({
  lang: 'zh-CN',
  title: 'R’s Blog',
  description: '来自一个web前端开发工程师的的非纯技术类博客，博主在这里分享知识，聊聊感想、畅谈人生、技术沉淀',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  port: 8888,
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo.jpg',
    author: 'LVR',
    authorAvatar: '/logo.jpg',
    primaryColor: '#52a3d8',
    // docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
    // docsBranch: 'main',
    // docsDir: 'example',
    lastUpdatedText: '最后一次更新时间',
    autoSetBlogCategories: true,
    autoAddCategoryToNavbar: true,
    autoSetSeries: true,
    // valineConfig 配置
    commentConfig: comment,
  }),
  // debug: true,
})
