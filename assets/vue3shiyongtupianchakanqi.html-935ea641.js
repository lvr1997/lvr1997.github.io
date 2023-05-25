import{_ as n,p as s,q as a,Y as t}from"./framework-aa5c4115.js";const p={},e=t(`<h2 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h2><p>点击左侧图片列表的图片，在右侧空白区域展示，要求支持图片的放大、缩小、旋转等操作</p><h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2><p>图片的放大、缩小、旋转等操作，使用图片查看器插件来实现，但是传统的图片查看器，一般都是只支持，点开图片之后出现遮罩层那样展示的，viewerjs就不一一样了，它的功能十分强大，它支持inline模式，图片查看器可以在dom结构中使用。下面是实现的效果图</p><h2 id="效果图" tabindex="-1"><a class="header-anchor" href="#效果图" aria-hidden="true">#</a> 效果图</h2><p><img src="https://bunalien.oss-cn-beijing.aliyuncs.com/images/viewer.gif" alt=""></p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><ol><li>安装viewer.js<code>npm install viewerjs</code></li></ol><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        左侧列表
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view_item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item,index) in imgs<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeImg(index)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        图片展示区
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>photo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view_image<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>CheckImg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>line<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">{</span>
		ref<span class="token punctuation">,</span> onMounted
	<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
    <span class="token comment">//引入viewer.js</span>
	<span class="token keyword">import</span> <span class="token string">&#39;viewerjs/dist/viewer.css&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">import</span> Viewer <span class="token keyword">from</span> <span class="token string">&#39;viewerjs&#39;</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> imgs <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
		<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./assets/test/1.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./assets/test/2.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./assets/test/3.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./assets/test/4.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./assets/test/5.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./assets/test/6.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./assets/test/7.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./assets/test/8.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">)</span>
	
	<span class="token keyword">const</span> CheckImg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
	<span class="token keyword">let</span> photoViewer <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token comment">//切换图片的方法</span>
	<span class="token keyword">const</span> <span class="token function-variable function">changeImg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">//非常重要！判断一下Viewer实例是否存在，如果存在也销毁实例。否则图片查看器不能及时更新图片</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>photoViewer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			photoViewer<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
        <span class="token comment">//准备DOM</span>
		<span class="token keyword">const</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;image&#39;</span><span class="token punctuation">)</span>
        <span class="token comment">//修改图片展示区的img路径</span>
		CheckImg<span class="token punctuation">.</span>value <span class="token operator">=</span> imgs<span class="token punctuation">.</span>value<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
        <span class="token comment">//判断dom是否存在</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>img<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//初始化Viewer实例</span>
			photoViewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Viewer</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">inline</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//行内模式</span>
				<span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
				<span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					photoViewer<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token function">viewed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					photoViewer<span class="token punctuation">.</span><span class="token function">zoomTo</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					photoViewer<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>

			photoViewer<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
		CheckImg<span class="token punctuation">.</span>value<span class="token operator">=</span>imgs<span class="token punctuation">.</span>value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.container</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> #42B983<span class="token punctuation">;</span>
		<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
		<span class="token property">justify-content</span><span class="token punctuation">:</span> space-around<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.view</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
		<span class="token property">overflow-y</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.view_item</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.view_item img</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
		
	<span class="token punctuation">}</span>

	<span class="token selector">.photo</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 450px<span class="token punctuation">;</span>
		<span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
		<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
		<span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.view_image</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.view_image img</span> <span class="token punctuation">{</span>
		<span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.line</span> <span class="token punctuation">{</span>
		<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
		<span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
		<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[e];function o(i,l){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","vue3shiyongtupianchakanqi.html.vue"]]);export{k as default};
