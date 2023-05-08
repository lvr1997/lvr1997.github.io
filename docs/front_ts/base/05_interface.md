---
title: 接口（Interface）
date: 2022-08-23 18:02:22
categories:
 - 前端
tags:
 - TypeScript
 - 学习笔记
---

接口的作用类似于抽象类，**不同点在于接口中的所有方法和属性都是没有实值的，换句话说接口中的所有方法都是抽象方法**。

接口主要负责定义一个类的结构，接口可以去限制一个对象的接口，对象只有包含接口中定义的所有属性和方法时才能匹配接口。同时，可以让一个类去实现接口，实现接口时类中要保护接口中的所有属性。

先来看一个例子

```typescript
//检查对象类型
interface Person{
    name: string;
    sayHello():void;
}

function fn(per: Person){
    per.sayHello();
}

fn({name:'孙悟空', sayHello() {console.log(`Hello, 我是 ${this.name}`)}});
```

```typescript
//接口的实现
interface Person{
    name: string;
    sayHello():void;
}

class Student implements Person{
    constructor(public name: string) {
    }

    sayHello() {
        console.log('大家好，我是'+this.name);
    }
}
```

