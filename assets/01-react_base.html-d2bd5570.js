import{_ as a,p as t,q as e,s as n,R as p,t as o,w as c,Y as l,n as i}from"./framework-aa5c4115.js";const u={},r={href:"https://www.bilibili.com/video/BV1wy4y1D7JT?p=17&spm_id_from=333.880.my_history.page.click&vd_source=0ac7746e9ece1179baaedba6f1b41114",target:"_blank",rel:"noopener noreferrer"},d=l(`<h2 id="jsx语法规则" tabindex="-1"><a class="header-anchor" href="#jsx语法规则" aria-hidden="true">#</a> jsx语法规则</h2><ol><li>创建虚以D0M时，不要写引号：</li><li>标签中要混入js表达式，要是用 {}</li><li>标签中样式的类名要用className指定</li><li>标签中的内联样式要用sty1e=({color:&#39;white&#39;)},注意属性名转为小驼峰</li><li>只能有一个根标签</li><li>标签必须闭合</li><li>关于标签首字母</li></ol><p><strong>注意</strong></p><ul><li>若首字母小写，那么React.就会去寻找与之同名的htm1标签，若找见，直接转为html同名元素；若未找见，报错</li><li>若首字母大写，那么React.就会去寻找与之同名的组件；若找见，那么就是用组件；若未找见，报错</li></ul><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><h3 id="函数式组件" tabindex="-1"><a class="header-anchor" href="#函数式组件" aria-hidden="true">#</a> 函数式组件</h3><p>通过定义函数的方式创建组件</p><p><em>执行了ReactDOM.render(...,后发生了什么？</em></p><ol><li>React解析组件标签，寻找Demo组件的定义位置</li><li>React发现Demo组件是用函数定义的，随后React去直接调用Demo函数，将返回的虚拟DON渲染到页面</li></ol><h3 id="类式组件" tabindex="-1"><a class="header-anchor" href="#类式组件" aria-hidden="true">#</a> 类式组件</h3><p>通过创建类的方式，定义组件（常用）</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//render是放在哪里的？一MyComponent的原型对象上，供实例使用。</span>
    <span class="token comment">//render中的this是谁？一yComponent的实例对象&lt;=&gt;MyComponent组件实例对象。</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;render中的this:&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">我是用类定义的组件（适用于【复杂组件】的定义）</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//2.渲染组件到页面</span>
<span class="token comment">//ReactDOM.render(&#39;组件名标签形式&#39;,document.getElementById(&#39;test&#39;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>执行ReactDOM.render(......)后发生了什么？</em></p><ol><li>React解析组件标签，找到MyComponent组件</li><li>发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法。</li><li>将render返回的虚拟DOM转为真实DOM，随后呈现在页面上。</li></ol><h2 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> State</h2><p>组件中用来维护其内部的状态数据，组件的状态数据改变时，组件会再次调用 render() 方法重新渲染对应的标记。</p><h2 id="案例应用" tabindex="-1"><a class="header-anchor" href="#案例应用" aria-hidden="true">#</a> 案例应用</h2><p>实现鼠标点击页面空白处，今天天气切换的功能</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Weather</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>changeWeather <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">changeWeather</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">isHot</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//读取状态</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> isHot <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>weather_container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        今天的天气是：</span><span class="token punctuation">{</span>isHot<span class="token operator">?</span> <span class="token string">&quot;☀️&quot;</span><span class="token operator">:</span> <span class="token string">&quot;🌥️&quot;</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeWeather<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">切换天气</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">changeWeather</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">isHot</span><span class="token operator">:</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isHot<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//渲染组件</span>
<span class="token comment">//ReactDOM.render(\`&lt;Weather/&gt;\`, document.getElementById(&quot;root&quot;))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),k=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"案例总结"),n("p",null,"changeWeather方法放在了哪里？—— Weather的原型对象上，供实例使用"),n("p",null,"由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用"),n("p",null,"类中的方法默认开启了局部的严格模式，所以changeWeather中的this是undefind")],-1);function m(v,h){const s=i("ExternalLinkIcon");return t(),e("div",null,[n("p",null,[n("a",r,[p("B站学习视频"),o(s)])]),c(" more "),d,k])}const g=a(u,[["render",m],["__file","01-react_base.html.vue"]]);export{g as default};
