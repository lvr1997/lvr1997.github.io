---
title: vue3使用图片查看器
categories:
 - 前端
tags:
 - vue
 - viewerjs
---
## 需求

点击左侧图片列表的图片，在右侧空白区域展示，要求支持图片的放大、缩小、旋转等操作

## 分析

图片的放大、缩小、旋转等操作，使用图片查看器插件来实现，但是传统的图片查看器，一般都是只支持，点开图片之后出现遮罩层那样展示的，viewerjs就不一一样了，它的功能十分强大，它支持inline模式，图片查看器可以在dom结构中使用。下面是实现的效果图

## 效果图

![](https://bunalien.oss-cn-beijing.aliyuncs.com/images/viewer.gif)

## 代码

1. 安装viewer.js`npm install viewerjs`

``` vue
<template>
	<div class="container">
        左侧列表
		<div class="view" >
			<div class="view_item" v-for="(item,index) in imgs" :key="index" @click="changeImg(index)" >
				<img :src="item" alt="">
			</div>
		</div>

        图片展示区
		<div class="photo">
			<div class="view_image" id="image">
				<img :src="CheckImg" alt="">
			</div>
			<div class="line"></div>
		</div>
	</div>
</template>
<script setup>
	import {
		ref, onMounted
	} from 'vue'
    //引入viewer.js
	import 'viewerjs/dist/viewer.css';
	import Viewer from 'viewerjs';

	const imgs = ref([
		require('./assets/test/1.jpg'),
		require('./assets/test/2.jpg'),
		require('./assets/test/3.jpg'),
		require('./assets/test/4.jpg'),
		require('./assets/test/5.jpg'),
		require('./assets/test/6.jpg'),
		require('./assets/test/7.jpg'),
		require('./assets/test/8.jpg'),
	])
	
	const CheckImg = ref('')
	let photoViewer = null

    //切换图片的方法
	const changeImg = (index) => {
        //非常重要！判断一下Viewer实例是否存在，如果存在也销毁实例。否则图片查看器不能及时更新图片
		if(photoViewer) {
			photoViewer.destroy()
		}
        //准备DOM
		const img = document.getElementById('image')
        //修改图片展示区的img路径
		CheckImg.value = imgs.value[index]
        //判断dom是否存在
		if (img) {
            //初始化Viewer实例
			photoViewer = new Viewer(img, {
				inline: true, //行内模式
				navbar: false,
				show() {
					photoViewer.update()
				},
				viewed() {
					photoViewer.zoomTo(1)
				},
				hide() {
					photoViewer.destroy()
				}
			})

			photoViewer.show()
		}
	}
	
	onMounted(()=>{
		CheckImg.value=imgs.value[0]
	})
</script>
<style scoped>
	.container {
		width: 800px;
		height: 600px;
		background-color: #42B983;
		display: flex;
		justify-content: space-around;
	}

	.view {
		width: 150px;
		height: 100%;
		overflow-y: auto;
	}

	.view_item {
		width: 120px;
		height: 120px;
	}

	.view_item img {
		width: 100%;
		
	}

	.photo {
		width: 500px;
		height: 450px;
		padding: 20px;
		position: relative;
		margin-top: 20px;
	}

	.view_image {
		width: 100%;
		height: 100%;
	}
	.view_image img {
		opacity: 0;
	}

	.line {
		position: absolute;
		width: 100%;
		height: 20px;
		top: 0;
		left: 0;
	}
</style>


```

