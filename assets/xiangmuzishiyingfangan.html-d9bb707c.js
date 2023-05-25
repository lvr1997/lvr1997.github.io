import{_ as e,p as i,q as s,Y as n}from"./framework-aa5c4115.js";const l={},a=n(`<h2 id="vue项目中使用flexible-js实现自适应" tabindex="-1"><a class="header-anchor" href="#vue项目中使用flexible-js实现自适应" aria-hidden="true">#</a> vue项目中使用<strong>flexible.js实现自适应</strong></h2><ol><li><p>安装插件npm i -s amfe-flexible, npm i postcss-pxtorem -D</p></li><li><p>在main.js中引入import &#39;amfe-flexible’</p></li><li><p>按照设计稿1920px来划分，因为amfe-flexible将页面分为10等份，故每份为192，所以在vue.config.js中修改postcss-pxtorem插件配置rootValue的值为192</p></li></ol><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>postcss: {
 plugins: [
   require(&quot;postcss-pxtorem&quot;)({ // 把px单位换算成rem单位
     rootValue: 192, // 换算的基数(设计图1920的根字体为192)
     propList: [&#39;*&#39;], 
     exclude: &#39;/node_modules/i&#39;
   })
 ],
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r=[a];function d(t,c){return i(),s("div",null,r)}const u=e(l,[["render",d],["__file","xiangmuzishiyingfangan.html.vue"]]);export{u as default};
