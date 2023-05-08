---
title: 组件的认识
date: 2020-12-28
categories:
 - 前端
tags:
 - vue
 - 学习笔记
---

> 父子组件的生命周期是一个嵌套的过程包括渲染和更新两部分

## 父子组件的生命周期

1. 渲染的过程：

 - 父 `beforeCreate`-> 父`created` -> 父`beforeMount` -> 子`beforeCreate` -> 子`created` -> 子`beforeMount` -> 子`mounted`

2. 组件更新过程：

 - 父`beforeUpdate` -> 子`beforeUpdate` -> 子`updated` -> 父`updated`<br />- 父组件更新过程：<br /> - 父`beforeUpdate` -> 父`updated`

3. 销毁过程

 - 父`beforeDestory` -> 子`beforeDestory` -> 子`destoryed` -> 父`destoryed`

## 组件的自定义事件

### 全局事件总线

**Vue2中**
```js
//在App.vue中
new Vue({
    beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线，$box就是当前应用的vm
    }
})
```

```js
//在A组件：A组件想要接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身
method: {
	demo(data) {  
    }
},
mounted() {
    this.$bus.$on('xxx', this.demo)
}
```

提供数据：`this.$bus.$emit("xxx",  '数据')`
<a name="eFnV5"></a>

**Vue3中**

1. 安装mitt插件

2. 在需要用到全局事件总线的组件中引入emitter


