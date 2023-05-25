import{_ as n,p as e,q as i,Y as s}from"./framework-aa5c4115.js";const a={},d=s(`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="在src目录下新建-plugins-echarts-js" tabindex="-1"><a class="header-anchor" href="#在src目录下新建-plugins-echarts-js" aria-hidden="true">#</a> 在src目录下新建/plugins/echarts.js</h3><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from &quot;echarts/core&quot;;
 
/** 引入柱状图and折线图图表，图表后缀都为 Chart  */
import { BarChart, LineChart } from &quot;echarts/charts&quot;;
 
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from &quot;echarts/components&quot;;
 
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from &quot;echarts/features&quot;;
 
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from &quot;echarts/renderers&quot;;
 
// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LineChart,
]);
 
// 导出
export default echarts;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="main-js中引入" tabindex="-1"><a class="header-anchor" href="#main-js中引入" aria-hidden="true">#</a> main.js中引入</h3><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// 引入echarts
import echarts from &quot;./plugins/echarts&quot;;
// 挂载到vue实例中
app.config.globalProperties.$echarts = echarts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-HAML line-numbers-mode" data-ext="HAML"><pre class="language-HAML"><code>&lt;div class=&quot;echarts_container&quot; ref=&quot;leftOne&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>import { ref, onMounted, getCurrentInstance } from &quot;vue&quot;;
const leftOne = ref(null) //echart容器

const { appContext } = getCurrentInstance()

//组件挂载后执行
onMounted(() =&gt; {
  initLeftChartOne()
})

const initLeftChartOne = () =&gt; {
  const leftChartOne = appContext.config.globalProperties.$echarts.init(leftOne.value);
  const option = {
    xAxis: {
      data: [&quot;A&quot;, &quot;B&quot;, &quot;C&quot;, &quot;D&quot;, &quot;E&quot;],
    },
    yAxis: {},
    series: [
      {
        data: [10, 22, 28, 43, 49],
        type: &quot;line&quot;,
        stack: &quot;x&quot;,
      },
      {
        data: [5, 4, 3, 5, 10],
        type: &quot;line&quot;,
        stack: &quot;x&quot;,
      },
    ],
  };
  leftChartOne.setOption(option);
  window.addEventListener(&quot;resize&quot;,function() {
    leftChartOne.resize()
  })
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),r=[d];function l(t,v){return e(),i("div",null,r)}const u=n(a,[["render",l],["__file","vue3anxuyinruecharts.html.vue"]]);export{u as default};
