---
title: 接口文档
---

# kd-shop接口文档

> v1.0.0

Base URLs:

* <a href="http://localhost:3000">测试环境: http://localhost:3000</a>

# 学生端系统/用户

## POST 上传头像

POST /my/avatarUpload

> Body 请求参数

```yaml
avatar: "{% mock 'dataImage' %}"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |none|
|body|body|object| 否 |none|
|» avatar|body|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": {},
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[JSONResult](#schemajsonresult)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|Inline|

### 返回数据结构

## GET 登录和注册时判断验证码输入是否正确

GET /user/checkCode

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|checkcode|query|string| 是 |验证码|
|creationTime|query|string| 否 |none|
|id|query|string| 否 |none|
|lastAccessedTime|query|string| 否 |none|
|maxInactiveInterval|query|string| 否 |none|
|new|query|string| 否 |none|
|valueNames|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": {},
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[JSONResult](#schemajsonresult)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|Inline|

### 返回数据结构

## POST 修改密码

POST /my/updatePwd

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": {},
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[JSONResult](#schemajsonresult)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|Inline|

### 返回数据结构

## POST 发送手机短信验证码

POST /user/get_verify_code

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|captcha|query|string| 是 |图形验证码|
|creationTime|query|string| 否 |none|
|id|query|string| 否 |none|
|lastAccessedTime|query|string| 否 |none|
|maxInactiveInterval|query|string| 否 |none|
|new|query|string| 否 |none|
|phonenum|query|string| 是 |需要发送短信的手机号|
|type|query|string| 是 |验证类型为登录还是找回密码|
|valueNames|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": {},
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[JSONResult](#schemajsonresult)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|Inline|

### 返回数据结构

## POST 登录请求

POST /user/login

> Body 请求参数

```json
{
  "phone": "13211214545",
  "password": "123456",
  "verifyCode": ""
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": {},
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[JSONResult](#schemajsonresult)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|Inline|

### 返回数据结构

## POST 退出

POST /user/logout

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|user|query|string| 是 |登入用户信息|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": {},
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[JSONResult](#schemajsonresult)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|Inline|

### 返回数据结构

## POST 处理注册信息

POST /user/register

> Body 请求参数

```json
{
  "userEmail": "123@126.com",
  "phone": "13211214545",
  "password": "123456",
  "userSchool": "12000"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": {},
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[JSONResult](#schemajsonresult)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|Inline|

### 返回数据结构

## GET 获取个人信息

GET /my/userinfo

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 修改个人信息

POST /my/updateInfo

> Body 请求参数

```json
{
  "username": "",
  "birthday": "",
  "sex": "",
  "residence": ""
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |none|
|body|body|object| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 学生端系统/商品

## POST 发布闲置

POST /goods/add

> Body 请求参数

```yaml
{}

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |none|
|body|body|object| 否 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": {},
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[JSONResult](#schemajsonresult)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|Inline|

### 返回数据结构

## POST 上传图片

POST /goods/upload

> Body 请求参数

```yaml
goods_image:
  - file://E:\Code\ershoujiaoyi\科大二手工坊项目图片\5d241ab2-801e-4d6a-9041-a176836056c3.png
  - file://E:\Code\ershoujiaoyi\科大二手工坊项目图片\5d241ab2-801e-4d6a-9041-a176836056c3.png

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |none|
|body|body|object| 否 |none|
|» goods_image|body|string(binary)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": {},
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[JSONResult](#schemajsonresult)|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|Inline|

### 返回数据结构

## GET 根据商品id查询该商品详细信息

GET /goods/detail/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |none|
|Authorization|header|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": {},
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[JSONResult](#schemajsonresult)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|Inline|

### 返回数据结构

# 学生端系统/首页

## GET 根据分类查询商品

GET /goods/catelog/{cid}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|cid|path|integer| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": {},
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[JSONResult](#schemajsonresult)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|Inline|

### 返回数据结构

## GET 首页显示商品、分类、轮播图

GET /goods/index

查询所有的商品，按照商品刷新时间排序,左侧显示浏览量最多的商品数据，按照浏览数排序;首页显示分类数据，放入分类菜单

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": {},
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[JSONResult](#schemajsonresult)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|Inline|

### 返回数据结构

# 学生端系统/分类

## GET 查询分类列表

GET /goods/categoryList

> Body 请求参数

```json
{}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |none|
|body|body|object| 否 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": {},
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[JSONResult](#schemajsonresult)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|Inline|

### 返回数据结构

# 学生端系统/图片验证码

## GET 图片验证码

GET /home/captcha

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|time|query|string| 是 |none|
|width|query|string| 是 |none|
|height|query|string| 是 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|Inline|

### 返回数据结构

# 数据模型

<h2 id="tocS_JSONResult">JSONResult</h2>

<a id="schemajsonresult"></a>
<a id="schema_JSONResult"></a>
<a id="tocSjsonresult"></a>
<a id="tocsjsonresult"></a>

```json
{
  "code": 0,
  "data": {},
  "msg": "string"
}

```

JSONResult

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||none|
|data|object|false|none||none|
|msg|string|false|none||none|

