---
title: vue3+vue3+vite项目按需引入AntDesign
categories:
 - 前端
tags:
 - vue
 - vite
 - antdesignvue
---
```Shell
# 安装unplugin-vue-components插件
npm i unplugin-vue-components -D
```

### vite.config.js

```JavaScript
import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
      resolvers: [
        AntDesignVueResolver({
          importStyle: 'less', // 一定要开启这个配置项
        }),
      ],
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: { // 在这里自定义主题色等样式
          'primary-color': '#32B87D',
          'link-color': '#333',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
```

### 根据需要将提示类组件全局注册的组件在main.js中

```JavaScript
import { message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css';

//挂载到全局配置中
app.config.globalProperties.$message = message;
```

