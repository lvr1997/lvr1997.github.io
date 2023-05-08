---
title: 对vue的理解
date: 2020-12-28
categories:
 - 前端
tags:
 - vue 
 - 学习笔记
---

**学习了这么久，总该留下点什么**

<!-- more -->

## 优缺点
优点：

1. 数据驱动视图，对真实 dom 进行抽象出 virtual dom（本质就是一个 js 对象）， 并配合 diff 算法、响应式和观察者、异步队列等手段以最小代价更新 dom，渲染页面 
2. 组件化，组件用单文件的形式进行代码的组织编写，使得我们可以在一个文件里编写 html\css（scoped 属性配置 css 隔离）\js 并且配合 Vue-loader 之后，支持更强大的预处理器等功能 
3. 强大且丰富的 API 提供一系列的 api 能满足业务开发中各类需求
4. 由于采用虚拟 dom，让 Vue ssr 先天就足
5. 生命周期钩子函数，选项式的代码组织方式，写熟了还是蛮顺畅的，但仍然有 优 化 空 间
6. 生态好，社区活跃

## 对MVVM模型的认识

相比于传统的MVC模式，新增了VM类，即ViewModel<br />通过将【模型】转化成【视图】和将【视图】转化成【模型】完成了双向数据绑定，前者实现方式是数据绑定，后者实现方式是DOM事件监听

## 对虚拟DOM的理解
虚拟 dom 是相对于浏览器所渲染出来的真实 dom 的，在react，vue 等技术出现之前， 我们要改变页面展示的内容只能通过遍历查询 dom 树的方式找到需要修改的 dom 然后修改样式行为或者结构，来达到更新 ui 的目的。<br />这种方式相当消耗计算资源，因为每次查询 dom 几乎都需要遍历整颗 dom 树，如果建立一个与 dom 树对应的虚拟 dom 对象（ js 对象），以对象嵌套的方式来表示 dom 树，那么每次 dom 的更改就变成了 js 对象的属性的更改，这样一来就能查找 js 对象的属性变化要比查询 dom 树的性能开销小。

## vue内置指令
`v-bind` 在html元素的属性上面使用，用于绑定某个动态的值<br />`v-on` 用于监听 DOM 事件，参数是监听的事件名<br />`v-text` 会将数据解释为普通文本<br />`v-html` 渲染html，将绑定的数据输出为真正的HTML<br />`v-model`<br />`v-if`/`v-if-else`/`v-else` 用于条件渲染<br />`v-show` 用于控制元素的显示或隐藏<br />`v-for`<br />`v-pre`<br />`v-once``v-cloak`

::: tip v-if与v-show的区别
`v-if`在编译过程中会转化成三元表达式条件不满足时不渲染此节点，在运行中很少改变条件，不需要频繁切换的场景时使用<br />`v-show` 会被编译成指令，当条件不满足时通过控制`display`样式来控制元素的显示隐藏，适用于需要频繁切换显示状态的场景
:::

```html
<!-- v-bind常规用法 -->
<a v-bind:href="url"> ... </a> <img :src="imagePath"/>
<!-- v-bind还可以绑定动态参数
 1. 这里的 attributeName 会被作为一个 JavaScript 表达式进行动态求值，
 求得的值将会作为最终的参数来使用。
 例如，如果你的组件实例有一个 data property attributeName，其值为 "href"，
 那么这个绑定将等价于 v-bind:href
 2. 同理，也可以可以使用动态参数为一个动态的事件名绑定处理函数
 即当 eventName 的值为 "focus" 时，v-on:[eventName] 将等价于 v-on:focus
-->
<a v-bind:[attributeName]="url"> ... </a> <a :[attributeName]="url"> ... </a> 
<a v-on:[eventName]="doSomething"> ... </a> <a @[eventName]="doSomething"> ... </a>
<!-- v-on -->
<button v-on:click="clickMe">按钮</button> <button @click="clickMe">按钮</button>
<!-- v-on也可以加事件修饰符
     修饰符 (modifier) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。
     例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()
-->
<form v-on:submit.prevent="onSubmit">...</form> <form @submit.prevent="onSubmit">...</form>
```

## 生命周期

生命周期就是vue 从开始创建到销毁的过程，分为四大步（创建，挂载， 更新，销毁），每一步又分为两小步，如 `beforeCreate`，`created`。`beforeCreate`前，也就是`new Vue` 的时候会初始化事件和生命周期；<br />`beforeCreate` 和`created`之间会挂载Data，绑定事件；接下来会根据el 挂载页面元素，如果没有设置el 则生命周期结束，直到手动挂载；`el`挂载结束后，根据`templete`/`outerHTML(el)`渲染页面；在 `beforeMount `前虚拟 `DOM`已经创建完成；之后在 `mounted`前，将 vm.$el 替换掉页面元素`el`;`mounted `将虚拟`dom`挂载到真实页面（此时页面已经全部渲染完成）；之后发生数据变化时触发`beforeUpdate `和`updated`进行一些操作；最后主动调用销毁函数或者组件自动销毁时 `beforeDestroy`，手动撤销监听事件，计时器等；`destroyed`时仅存在`Dom`节点，其他所有东西已自动销毁。这就是我所理解的`vue`的一个完整的生命周期。

### 异步请求通常在哪一步发起
可以在`created`、`beforeMount`、`mounted`中进行异步请求，因为在这三个钩子函数中`data`已经创建，可以将服务器端返回的值进行赋值<br />如果异步请求不需要依赖`DOM`推荐加载`created`中调用异步请求，因为在created中能更快获取到服务端数据减少页面loading

### 生命周期中两个特殊的方法

1. **computed（计算属性）**：

返回一个函数，当data里面的值发生变化时执行，但是不能处理一些复杂的逻辑，**计算属性会基于其响应式依赖被缓存**

2. **watch （监听属性）**：

监听data里面某个值的变化，当发生变化时执行，可以处理一些复杂的逻辑
::: tip computed和watch的区别

1. computed能完成的功能，watch都可以完成。
1. watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作

所被vue管理的函数，最好写成普通函数，这样this的执行才是vm或组件实例对象；<br />所有不被vue管理的函数（定时器回调函数、ajax的回调函数等最好写成箭头函数）这样this的执行才是vm或组件实例对象
:::
<a name="ze2ec"></a>

### 为什么data是一个函数
`data`之所以是一个函数，是因为一个组件可能会多处调用，而每一次调用就会执行data函数并返回新的数据对象，这样，可以避免多处调用之间的数据污染。
<a name="srEIF"></a>

