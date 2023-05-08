---
title: tsc项目编译
date: 2022-08-23 17:09:12
categories:
 - 前端
tags:
  - TypeScript
  - 学习笔记
---

使用`tsc`指令可以快速编译整个项目

<!-- more -->

## ts.config.json

如下是配置文件样例

```json
{
  "extends": "@vue/tsconfig/tsconfig.web.json",
  "include": ["env.d.ts", "src/**/*", "src/**/*.vue"],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },

  "references": [
    {
      "path": "./tsconfig.config.json"
    }
  ]
}
```

## 常见配置项如下

### include

定义希望被编译文件所在的目录；默认值：["\*\*/\*"]

```json
//指定所有src目录和tests目录下的文件都会被编译
"include":["src/**/*", "tests/**/*"]
```

### exclude

定义需要排除在外的目录

默认值：["node_modules", "bower_components", "jspm_packages"]
```json
"exclude": ["./src/hello/**/*"]
//指定src下hello目录下的文件都不会被编译
```

### extends

定义被继承的配置文件

```json
"extends": "./configs/base"
//当前配置文件中会自动包含config目录下base.json中的所有配置信息
```

### files

指定被编译文件的列表，只有需要编译的文件少时才会用到

```json
"files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "tsc.ts"
]
//列表中的文件都会被TS编译器所编译
```

### compilerOptions

> 编译选项是配置文件中非常重要也比较复杂的配置选项
>
> compilerOptions中包含多个子选项，用来完成对编译的配置

**target** 设置ts代码编译的目标版本

可选值：ES3（默认）、ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext
    

```json
"compilerOptions": {
    "target": "ES6"
}
```

如上设置，我们所编写的ts代码将会被编译为ES6版本的js代码

**lib** 指定代码运行时所包含的库（宿主环境）

可选值：ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost ......

```json
"compilerOptions": {
    "target": "ES6",
    "lib": ["ES6", "DOM"],
    "outDir": "dist",
    "outFile": "dist/aa.js"
}
```
**module** 设置编译后代码使用的模块化系统
可选值：CommonJS、UMD、AMD、System、ES2020、ESNext、None

 ```typescript
"compilerOptions": {
    "module": "CommonJS"
}
 ```

**outDir** 编译后文件的所在目录
    
默认情况下，编译后的js文件会和ts文件位于相同的目录，设置outDir后可以改变编译后文件的位置

```json
"compilerOptions": {
    "outDir": "dist"
}
```

设置后编译后的js文件将会生成到dist目录

**outFile** 将所有的文件编译为一个js文件

默认会将所有的编写在全局作用域中的代码合并为一个js文件，如果module制定了None、System或AMD则会将模块一起合并到文件之中

```json
"compilerOptions": {
    "outFile": "dist/app.js"
}
```
**rootDir** 指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录为根目录，通过rootDir可以手动指定根目录

```json
"compilerOptions": {
    "rootDir": "./src"
}
```

**allowJs** 是否对js文件编译

**checkJs** 是否对js文件进行检查

```json
"compilerOptions": {
    "allowJs": true,
    "checkJs": true
}
```

**removeComments** 是否删除注释

默认值：false

**noEmit**不对代码进行编译

默认值：false

**sourceMap** 是否生成sourceMap

默认值：false

**严格检查strict**

启用所有的严格检查，默认值为true，设置后相当于开启了所有的严格检查

alwaysStrict 是以严格模式对代码进行编译

noImplicitAny 禁止隐式的any类型

noImplicitThis 禁止类型不明确的this

strictBindCallApply 严格检查bind、call和apply的参数列表

strictFunctionTypes 严格检查函数的类型

strictNullChecks 严格的空值检查

strictPropertyInitialization 严格检查属性是否初始化

**额外检查**

noFallthroughCasesInSwitch 查switch语句包含正确的break

  - noImplicitReturns 检查函数没有隐式的返回值
  - noUnusedLocals 检查未使用的局部变量
  - noUnusedParameters 检查未使用的参数



**高级**

allowUnreachableCode 检查不可达代码

可选值：

- true，忽略不可达代码
- false，不可达代码将引起错误

noEmitOnError 有错误的情况下不进行编译

- 默认值：false