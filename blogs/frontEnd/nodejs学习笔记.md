---
title: nodejs记录
categories:
 - 前端
tags:
 - nodejs
---

## node内置模块

fs 文件系统模块

 path 路径模块，解决

 http 用于创建服务

## 模块化



## Express

### 中间件
Express 官方把常见的中间件用法，分成了 5 大类，分别是：应用级别的中间件、路由级别的中间件、错误级别的中间件、Express内置的中间件、第三方的中间件

**应用级别的中间件**
通过app.use app.get 或app.post方式创建的中间件

**路由级别的中间件**
绑定到 express.Router0 实例上的中间件，叫做路由级别的中间件。它的用法和应用级别中间件没有任何区别。只不过，应用级别中间件是绑定到 app 实例上，路由级别中间件绑定到 router 实例上，代码示例如下:
```js
var app = express()
var router = express.Router()
// 路由级别的中间件
router.use(funct n (req, res, next) {
console.log( 'Time:", Date.now())6
next()
app.use( ' /' , router)
```

**错误级别的中间件** 必须要注册在所有路由之后！
专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题。
格式: 错误级别中间件的 function 处理函数中，必须有 4 个形参，形参顺序从前到后，分别是`(err, req, res, next).`
```js
app.get('/', function (req, res) {
	// 1.路由
	throw new Error(“服务器内部发生了错误!) // 11 抛出一个自定义的错误2
	res .send( ' Home Page.' )
})
app.use(function (err, reqnext){ // 2.错误级别的中间件
	console.1og("发生了错误:.message") //2.1 在服务器打印错误消息6
	res .send("Error!+ err.message")  // 2.2 向客户些响应错误相关的内容
})
```

**Express内置的中间件**
自Express 4.16.0 版本开始，Express 内置了3 个常用的中间件，极大的提高了 Express 项目的开发效率和体验
express.static 快速托管静态资源的内置中间件，例如: HTML 文件、图片、CSS 样式等 (无兼容性)
express.json 解析JSON 格式的请求体数据(有兼容性，仅在 4.16.0+ 版本中可用)
express.urlencoded 解析 URL-encoded 格式的请求体数据 (有兼容性，仅在 4.16.0+ 版本中可用)
```js
// 配置解析 application/json 格式数据的内置中间件
app.use(express.json( ))
// 配置解析 application/x-www-form-urlencoded 格式数据的内置中间件
app.use(express .urlencoded({ extended: false }))
```

**自定义中间件**
例：自己手动模拟一个类似于 express.urlencoded 这样的中间件，来解析 POST 提交到服务器的表单数据.
实现步骤: 
1. 定义中间件
2. 监听 req的 data 事件
    在中间件中，需要监听 req 对象的 data 事件，来获取客户端发送到服务器的数据如果数据量比较大，无法一次性发送完毕，则客户端会把数据切割后，分批发送到服务器。所以 data 事件可能会触发多次，每一次触发 data 事件时，获取到数据只是完整数据的一部分，需要手动对接收到的数据进行拼接。
```js
// 定义变量，用来存储客户端发送过来的请求体数据
let str = '
// 监听 req 对象的 data 事件 (客户端发送过来的新的请求体数据)
req.on('data',(chunk) => (
//拼接请求体数据，隐式转换为字符串
str += chunk
})
```
1. 监听 req的end 事件
2. 使用querystring 模块解析请求体数据
3. 将解析出来的数据对象挂载为 req.body
4. 将自定义中间件封装为模块