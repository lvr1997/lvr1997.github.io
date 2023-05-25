import{_ as e,p as i,q as n,Y as s}from"./framework-aa5c4115.js";const l={},d=s(`<div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code># 安装unplugin-vue-components插件
npm i unplugin-vue-components -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vite-config-js" tabindex="-1"><a class="header-anchor" href="#vite-config-js" aria-hidden="true">#</a> vite.config.js</h3><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>import { fileURLToPath, URL } from &quot;url&quot;;

import { defineConfig } from &quot;vite&quot;;
import vue from &quot;@vitejs/plugin-vue&quot;;
import Components from &#39;unplugin-vue-components/vite&#39;
import { AntDesignVueResolver } from &#39;unplugin-vue-components/resolvers&#39;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
      resolvers: [
        AntDesignVueResolver({
          importStyle: &#39;less&#39;, // 一定要开启这个配置项
        }),
      ],
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: { // 在这里自定义主题色等样式
          &#39;primary-color&#39;: &#39;#32B87D&#39;,
          &#39;link-color&#39;: &#39;#333&#39;,
          &#39;border-radius-base&#39;: &#39;2px&#39;,
        },
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      &quot;@&quot;: fileURLToPath(new URL(&quot;./src&quot;, i<wbr>mport.meta.url)),
    },
  },
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="根据需要将提示类组件全局注册的组件在main-js中" tabindex="-1"><a class="header-anchor" href="#根据需要将提示类组件全局注册的组件在main-js中" aria-hidden="true">#</a> 根据需要将提示类组件全局注册的组件在main.js中</h3><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>import { message } from &#39;ant-design-vue&#39;;
import &#39;ant-design-vue/es/message/style/css&#39;;

//挂载到全局配置中
app.config.globalProperties.$message = message;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),a=[d];function v(r,u){return i(),n("div",null,a)}const m=e(l,[["render",v],["__file","vue3_vitexiangmuanxuyinruAntDesign.html.vue"]]);export{m as default};
