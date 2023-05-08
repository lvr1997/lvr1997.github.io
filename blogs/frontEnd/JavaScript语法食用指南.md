---
title: JS语法加油站
categories:
 - 前端
tags:
 - js
---

## ES6语法加油站

[es6.ruanyifeng.com](https://es6.ruanyifeng.com/)



## 找出两个数组中相同的元素

1. 封装getSameName函数，传递两个参数selectedId，allSuppliers

2. selectedId和allSuppliers均为数组

```JavaScript
getSameName(selectedId, allSuppliers) {
  let arr2Map = {};
  let result = [];
  selectedId.forEach((item) => (arr2Map[item] = item));
  allSuppliers.forEach((item) => {
    arr2Map[item.id] && result.push(item.name);
  });
  console.log(result)
  return result;
},
```

## 在一个字符串的指定位置插入字符

```JavaScript
// souece 原字符串 start 要截取的位置 newStr 要插入的字符
insertStr(source, start, newStr) {
	return source.slice(0, start) + newStr + source.slice(start)
}
// 使用
this.insertStr('20220808', 4, '-') // 2020-0808
```

