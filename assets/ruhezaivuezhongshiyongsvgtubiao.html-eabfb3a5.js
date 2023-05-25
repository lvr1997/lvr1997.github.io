import{_ as e,p as t,q as p,s as n,R as s,t as i,Y as l,n as c}from"./framework-aa5c4115.js";const o={},u={href:"https://www.cnblogs.com/codebook/p/16168591.html",target:"_blank",rel:"noopener noreferrer"},r=l(`<h3 id="svg图标优点" tabindex="-1"><a class="header-anchor" href="#svg图标优点" aria-hidden="true">#</a> svg图标优点</h3><p>svg与iconfont之类的字体图标在网页中的使用差别不大，可以修改大小，颜色等而且不失真。</p><h3 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev svg-sprite-loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="建立文件夹目录-xxx-svg-注意-这里的-xxx-不要使用中文" tabindex="-1"><a class="header-anchor" href="#建立文件夹目录-xxx-svg-注意-这里的-xxx-不要使用中文" aria-hidden="true">#</a> 建立文件夹目录 （xxx.svg 注意：这里的 xxx 不要使用中文）</h3><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> assets 
</span><span class="token prefix deleted">-</span><span class="token line">- icon 
</span></span><span class="token coord">--- svg </span>
<span class="token coord">--- index.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// Vue2.x 在 webpack.base.conf.js 中配置如下：
// 注意svg图标的路径 src/assets/icon 要写正确
 module: {
    rules: [
      {
        test: /\\.svg$/,
        loader: &#39;svg-sprite-loader&#39;,
        include: [resolve(&#39;src/assets/icon&#39;)],
        options: {
          symbolId: &#39;icon-[name]&#39;
        }
      },
      {
        test: /\\.(png|jpe?g|gif|svg)(\\?.*)?$/,
        loader: &#39;url-loader&#39;,
        exclude: [resolve(&#39;src/assets/icon&#39;)],
        options: {
          limit: 10000,
          name: utils.assetsPath(&#39;img/[name].[hash:7].[ext]&#39;)
        }
      }
    ]
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Javascript line-numbers-mode" data-ext="Javascript"><pre class="language-Javascript"><code>// Vue3.x 在根目录新建 vue.config.js 中配置如下：
module.exports = {
  chainWebpack: config =&gt; {
    const svgRule = config.module.rule(&#39;svg&#39;)
    svgRule.uses.clear()
    svgRule.exclude.add(/node_modules/)
    svgRule
      .test(/\\.svg$/)
      .use(&#39;svg-sprite-loader&#39;)
      .loader(&#39;svg-sprite-loader&#39;)
      .options({
        symbolId: &#39;icon-[name]&#39;,
      })

    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule(&#39;images&#39;)
    imagesRule.exclude.add(resolve(&#39;src/assets/icon&#39;))
    config.module
      .rule(&#39;images&#39;)
      .test(/\\.(png|jpe?g|gif|svg)(\\?.*)?$/)
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// Vue4.x 在根目录新建 vue.config.js 中配置如下：
const path = require(&#39;path&#39;)
module.exports = {
  // 使用svg-sprite-loader编译svg，若使用file-loader时排除src/icon下的svg矢量图标
  chainWebpack: (config) =&gt; {
    const svgRule = config.module.rule(&#39;svg&#39;)
    // 清除已有的所有 loader 否则接下来的 loader 会附加在该规则现有的 loader 之后
    svgRule.uses.clear()
    svgRule
      .test(/\\.svg$/)
      .include.add(path.resolve(__dirname, &#39;./src/icon&#39;))
      .end()
      .use(&#39;svg-sprite-loader&#39;)
      .loader(&#39;svg-sprite-loader&#39;)
      .options({
        symbolId: &#39;icon-[name]&#39;,
      })
    const fileRule = config.module.rule(&#39;file&#39;)
    fileRule.uses.clear()
    fileRule
      .test(/\\.svg$/)
      .exclude.add(path.resolve(__dirname, &#39;./src/icon&#39;))
      .end()
      .use(&#39;file-loader&#39;)
      .loader(&#39;file-loader&#39;)
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在components目录下增加一个svgicon组件" tabindex="-1"><a class="header-anchor" href="#在components目录下增加一个svgicon组件" aria-hidden="true">#</a> 在components目录下增加一个<code>SvgIcon</code>组件</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isExternal<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>styleExternalIcon<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>svg-external-icon svg-icon<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$listeners<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">v-else</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>svgClass<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$listeners<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">:xlink:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>iconName<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 检查是否是外部链接</span>
<span class="token keyword">var</span> isExternal <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(https?:|mailto:|tel:)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;SvgIcon&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">iconClass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">isExternal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">isExternal</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>iconClass<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">iconName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">#icon-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>iconClass<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">svgClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>className<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;svg-icon &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>className
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;svg-icon&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">styleExternalIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">mask</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">url(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>iconClass<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">) no-repeat 50% 50%</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;-webkit-mask&quot;</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">url(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>iconClass<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">) no-repeat 50% 50%</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.svg-icon</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
      <span class="token property">vertical-align</span><span class="token punctuation">:</span> -0.15em<span class="token punctuation">;</span>
      <span class="token property">fill</span><span class="token punctuation">:</span> currentColor<span class="token punctuation">;</span>
      <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.svg-external-icon</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> currentColor<span class="token punctuation">;</span>
      <span class="token property">mask-size</span><span class="token punctuation">:</span> cover <span class="token important">!important</span><span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在icon文件夹下index-js中导入所有svg文件-并将svgicon注册到全局" tabindex="-1"><a class="header-anchor" href="#在icon文件夹下index-js中导入所有svg文件-并将svgicon注册到全局" aria-hidden="true">#</a> 在<code>icon</code>文件夹下<code>index.js</code>中导入所有svg文件，并将SvgIcon注册到全局</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> SvgIcon <span class="token keyword">from</span> <span class="token string">&#39;@/components/SvgIcon&#39;</span>

<span class="token comment">// 全局注册</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;svg-icon&#39;</span><span class="token punctuation">,</span> SvgIcon<span class="token punctuation">)</span>

<span class="token keyword">const</span> req <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;./svg&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.svg$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">requireAll</span> <span class="token operator">=</span> <span class="token parameter">requireContext</span> <span class="token operator">=&gt;</span> requireContext<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>requireContext<span class="token punctuation">)</span>
<span class="token function">requireAll</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="main-js引入" tabindex="-1"><a class="header-anchor" href="#main-js引入" aria-hidden="true">#</a> main.js引入</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;@/assets/icon&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- 其中icon-class对应图标svg文件的名称；className对应图标的css样式属性 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg-icon</span> <span class="token attr-name">icon-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>arrow<span class="token punctuation">&quot;</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left-arrow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg-icon</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="备注" tabindex="-1"><a class="header-anchor" href="#备注" aria-hidden="true">#</a> 备注</h3><p>若svg图标不能通过样式修改颜色，打开svg文件，删除style标签里的每一项fill样式设置。但是如果svg文件中使用的不是 path 那就没有办法了。比如有些在线的工具可以把图片转成svg格式，转换后svg文件中的地址是 base64 ，这种的就不能改变样式了，而且放缩也会失真。</p>`,20);function d(v,k){const a=c("ExternalLinkIcon");return t(),p("div",null,[n("blockquote",null,[n("p",null,[s("本篇文章引用自 "),n("a",u,[s("如何在vue项目中使用svg图标 - 小方块的世界 - 博客园"),i(a)])])]),r])}const g=e(o,[["render",d],["__file","ruhezaivuezhongshiyongsvgtubiao.html.vue"]]);export{g as default};
