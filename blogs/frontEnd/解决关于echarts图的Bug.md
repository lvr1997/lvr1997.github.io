---
title: 解决关于echarts图的Bug
categories:
 - 前端
tags:
 - echarts
---

## 动态改变echarts柱状图颜色

需求：上面复选框选择的内容，下方柱图对应显示彩色，未选择的则置灰

```JavaScript
color: function (params) {
if (selectedSupplier.indexOf(params.seriesName) != -1) {
     return colors[params.componentIndex];
  } else if (
    //selectedSupplier选中的名字数组 //gongyingshangData全部名字
    selectedSupplier.length == gongyingshangData.length
  ) {
     return colors[params.componentIndex];
   } else {
    return "#CCCCCC";
  }
 },
```

## echarts中setOption第二个参数的作用。处理减少series数组长度时，图表不发生变化的问题。

[echarts中setOption第二个参数的作用。处理减少series数组长度时，图表不发生变化的问题。_下一次就是永远的博客-CSDN博客_setoption第二个参数](https://blog.csdn.net/weixin_46557501/article/details/117120733)

## 封装通用弹窗组件，放大echarts图表

**解决Vue3.0使用antd时，打开Modal框时无法获取里面的dom节点**

[blog.csdn.net](https://blog.csdn.net/CSND7997/article/details/11781624)

## 柱状图数据太多时，如何动态给echarts容器指定高度

[echarts容器动态设置高度 - 且行且思 - 博客园](https://www.cnblogs.com/Fooo/p/16050886.html)

