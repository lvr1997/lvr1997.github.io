import{_ as n,p as r,q as s,s as e,R as a,t as l,Y as t,n as d}from"./framework-aa5c4115.js";const c={},o=e("h2",{id:"es6语法加油站",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#es6语法加油站","aria-hidden":"true"},"#"),a(" ES6语法加油站")],-1),u={href:"https://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"},v=t(`<h2 id="找出两个数组中相同的元素" tabindex="-1"><a class="header-anchor" href="#找出两个数组中相同的元素" aria-hidden="true">#</a> 找出两个数组中相同的元素</h2><ol><li><p>封装getSameName函数，传递两个参数selectedId，allSuppliers</p></li><li><p>selectedId和allSuppliers均为数组</p></li></ol><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>getSameName(selectedId, allSuppliers) {
  let arr2Map = {};
  let result = [];
  selectedId.forEach((item) =&gt; (arr2Map[item] = item));
  allSuppliers.forEach((item) =&gt; {
    arr2Map[item.id] &amp;&amp; result.push(item.name);
  });
  console.log(result)
  return result;
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在一个字符串的指定位置插入字符" tabindex="-1"><a class="header-anchor" href="#在一个字符串的指定位置插入字符" aria-hidden="true">#</a> 在一个字符串的指定位置插入字符</h2><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// souece 原字符串 start 要截取的位置 newStr 要插入的字符
insertStr(source, start, newStr) {
	return source.slice(0, start) + newStr + source.slice(start)
}
// 使用
this.insertStr(&#39;20220808&#39;, 4, &#39;-&#39;) // 2020-0808
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function m(p,h){const i=d("ExternalLinkIcon");return r(),s("div",null,[o,e("p",null,[e("a",u,[a("es6.ruanyifeng.com"),l(i)])]),v])}const S=n(c,[["render",m],["__file","JavaScriptyufashiyongzhinan.html.vue"]]);export{S as default};
