import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from "vuepress";
import { recoTheme } from "vuepress-theme-reco";

export default defineUserConfig({
  title: "Lavrena's Blog",
  description: "A website for record life and work.",
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
    colorMode: 'auto',
    author: "Lavrena",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/lvr1997/lvr1997.github.io",
    docsBranch: "gh-pages-source",
    // commentConfig: {
    //   type: "valine",
    //   options: {
    //     appId: "Q6hMeY2PSaM9FMkXetzoJoU5-gzGzoHsz",
    //     appKey: "iLQlev5jo2Cm5pLcI0z3qhtr",
    //     placeholder: "填写邮箱可以收到回复提醒哦！",
    //     verify: true, // 验证码服务
    //     // notify: true, //
    //     recordIP: true,
    //     // hideComments: true
    //   },
    // },
  }),
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {}
  })
});
