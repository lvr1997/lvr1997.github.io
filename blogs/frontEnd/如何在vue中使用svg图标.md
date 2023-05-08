---
title: 如何在vue中使用svg图标
categories:
 - 前端
tags:
 - vue
 - svg
---

> 本篇文章引用自 [如何在vue项目中使用svg图标 - 小方块的世界 - 博客园](https://www.cnblogs.com/codebook/p/16168591.html)

### svg图标优点

svg与iconfont之类的字体图标在网页中的使用差别不大，可以修改大小，颜色等而且不失真。

### 安装插件

```bash
npm install --save-dev svg-sprite-loader
```

### 建立文件夹目录 （xxx.svg 注意：这里的 xxx 不要使用中文）

```diff
- assets 
-- icon 
--- svg 
--- index.js
```

### 配置

```JavaScript
// Vue2.x 在 webpack.base.conf.js 中配置如下：
// 注意svg图标的路径 src/assets/icon 要写正确
 module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('src/assets/icon')],
        options: {
          symbolId: 'icon-[name]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        exclude: [resolve('src/assets/icon')],
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      }
    ]
  }
```

```Javascript
// Vue3.x 在根目录新建 vue.config.js 中配置如下：
module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.exclude.add(/node_modules/)
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })

    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(resolve('src/assets/icon'))
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  }
}

```

```JavaScript
// Vue4.x 在根目录新建 vue.config.js 中配置如下：
const path = require('path')
module.exports = {
  // 使用svg-sprite-loader编译svg，若使用file-loader时排除src/icon下的svg矢量图标
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    // 清除已有的所有 loader 否则接下来的 loader 会附加在该规则现有的 loader 之后
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './src/icon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
    const fileRule = config.module.rule('file')
    fileRule.uses.clear()
    fileRule
      .test(/\.svg$/)
      .exclude.add(path.resolve(__dirname, './src/icon'))
      .end()
      .use('file-loader')
      .loader('file-loader')
  },
}
```

### 在components目录下增加一个`SvgIcon`组件

```vue
<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    v-on="$listeners"
  />
  <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
// 检查是否是外部链接
var isExternal function(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export default {
  name: "SvgIcon",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
  },
  computed: {
    isExternal() {
      return isExternal(this.iconClass)
    },
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return "svg-icon " + this.className
      } else {
        return "svg-icon"
      }
    },
    styleExternalIcon() {
      return {
        mask: `url(${this.iconClass}) no-repeat 50% 50%`,
        "-webkit-mask": `url(${this.iconClass}) no-repeat 50% 50%`,
      }
    }
  }
}
</script>

<style scoped>
    .svg-icon {
      width: 1em;
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }

    .svg-external-icon {
      background-color: currentColor;
      mask-size: cover !important;
      display: inline-block;
    }
</style>
```

### 在`icon`文件夹下`index.js`中导入所有svg文件，并将SvgIcon注册到全局

```js
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

// 全局注册
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
```

### main.js引入

```js
import '@/assets/icon'
```

### 使用

```vue
<!-- 其中icon-class对应图标svg文件的名称；className对应图标的css样式属性 -->
<svg-icon icon-class="arrow" className="left-arrow"></svg-icon>
```

### 备注

若svg图标不能通过样式修改颜色，打开svg文件，删除style标签里的每一项fill样式设置。但是如果svg文件中使用的不是 path 那就没有办法了。比如有些在线的工具可以把图片转成svg格式，转换后svg文件中的地址是 base64 ，这种的就不能改变样式了，而且放缩也会失真。