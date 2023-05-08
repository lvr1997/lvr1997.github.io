---
title: 泛型（Generic）
date: 2022-08-23 18:04:04
categories:
 - 前端
tags:
 - TypeScript
 - 学习笔记
---

定义一个函数或类时，有些情况下无法确定其中要使用的具体类型（返回值、参数、属性的类型不能确定），此时泛型便能够发挥作用。

## 引入泛型

先来看一个例子：

```typescript
function test(arg: any): any{
	return arg;
}
```

上例中，test函数有一个参数类型不确定，但是能确定的时其返回值的类型和参数的类型是相同的，由于类型不确定所以参数和返回值均使用了any，但是很明显这样做是不合适的，首先使用any会关闭TS的类型检查，其次这样设置也不能体现出参数和返回值是相同的类型

这时就用到了泛型

```typescript
function test<T>(arg: T): T{
	return arg;
}
```

这里的```<T>```就是泛型，T是我们给这个类型起的名字（不一定非叫T），设置泛型后即可在函数中使用T来表示该类型。所以泛型其实很好理解，就表示某个类型。

**也就是说：当我们不确定某个函数的参数和返回值类型时，就需要用泛型来进行指定**

## 泛型的使用

上面说到如何去定义泛型，那么如何使用上边的函数呢？

-- 使用时可以直接传递参数使用，类型会由TS自动推断出来，但有时编译器无法自动推断时还需要使用下面的方式

```typescript
//直接使用
test(10)
//手动指定类型
test<number>(10)
```

可以同时指定多个泛型，泛型间使用逗号隔开

使用泛型时，完全可以将泛型当成是一个普通的类去使用

```typescript
function test<T, K>(a: T, b: K): K{
    return b;
}

test<number, string>(10, "hello");
```

## 类中的泛型

上面泛型的使用，我们是在方法中定义了一个泛型，对于类来说，同样可以使用泛型

```typescript
class MyClass<T>{
    prop: T;

    constructor(prop: T){
        this.prop = prop;
    }
}
```

除此之外，也可以对泛型的范围进行约束

```typescript
interface MyInter{
    length: number;
}

function test<T extends MyInter>(arg: T): number{
    return arg.length;
}
```

使用T extends MyInter表示泛型T必须是MyInter的子类，不一定非要使用接口类和抽象类同样适用。

