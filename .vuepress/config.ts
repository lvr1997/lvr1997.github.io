import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from "vuepress";
import { recoTheme } from "vuepress-theme-reco";

export default defineUserConfig({
  title: "I have 项目技术文档",
  description: "# 『I have』校园二手交易平台项目技术文档",
  dest: "public",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: recoTheme({
    logo: "/logo.png",
    colorMode: 'light',
    author: "Riny",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/lvr1997/lvr1997.github.io",
    docsBranch: "gh-pages-source"
  }),
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {}
  })
});
