---
title: 类（Class）
date: 2022-08-23 18:00:56
categories:
 - 前端
tags:
 - TypeScript
 - 学习笔记
---

> 在程序中所有的对象都被分成了两个部分数据和功能，以人为例，人的姓名、性别、年龄、身高、体重等属于数据，人可以说话、走路、吃饭、睡觉这些属于人的功能。数据在对象中被成为属性，而功能就被称为方法。所以简而言之，在程序中一切皆是对象。

Typescript中使用`Class`来创建对象，先定义类，所谓的类可以理解为对象的模型，程序中可以根据类创建指定类型的对象，

举例来说：可以通过Person类来创建人的对象，通过Dog类创建狗的对象，通过Car类来创建汽车的对象，不同的类可以用来创建不同的对象。

## 类的定义与使用

```typescript
class className {
	属性名: 数据类型;
	//类的构造器
	constructor(参数: 类型){
		this.属性名 = 参数;
	}
	//类中操作属性的方法
	method(){
		....
	}
}
```

**举例：**

定义一个Person类

```typescript
class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log(`大家好，我是${this.name}`);
    }
}
```

使用Person类创建一个实例

```typescript
const p = new Person('孙悟空', 18);
p.sayHello();
```

## 面向对象的特点

### 封装

1. 对象实质上就是属性和方法的容器，它的主要作用就是存储属性和方法，这就是所谓的封装

2. 默认情况下，对象的属性是可以任意的修改的，为了确保数据的安全性，在TS中可以对属性的权限进行设置

3. 只读属性（readonly）：

4. 如果在声明属性时添加一个readonly，则属性便成了只读属性无法修改

5. TS中属性具有三种修饰符：

- **public（默认值），可以在类、子类和对象中修改**

```typescript
class Person{
    public name: string; // 写或什么都不写都是public
    public age: number;

    constructor(name: string, age: number){
        this.name = name; // 可以在类中修改
        this.age = age;
    }

    sayHello(){
        console.log(`大家好，我是${this.name}`);
    }
}

class Employee extends Person{
    constructor(name: string, age: number){
        super(name, age);
        this.name = name; //子类中可以修改
    }
}

const p = new Person('孙悟空', 18);
p.name = '猪八戒';// 可以通过对象修改
```

- **protected ，可以在类、子类中修改**

```typescript
class Person{
    protected name: string;
    protected age: number;

    constructor(name: string, age: number){
        this.name = name; // 可以修改
        this.age = age;
    }

    sayHello(){
        console.log(`大家好，我是${this.name}`);
    }
}

class Employee extends Person{

    constructor(name: string, age: number){
        super(name, age);
        this.name = name; //子类中可以修改
    }
}

const p = new Person('孙悟空', 18);
p.name = '猪八戒';// 不能修改
```

- **private ，可以在类中修改**

```typescript
class Person{
    private name: string;
    private age: number;

    constructor(name: string, age: number){
        this.name = name; // 可以修改
        this.age = age;
    }

    sayHello(){
        console.log(`大家好，我是${this.name}`);
    }
}

class Employee extends Person{

    constructor(name: string, age: number){
        super(name, age);
        this.name = name; //子类中不能修改
    }
}

const p = new Person('孙悟空', 18);
p.name = '猪八戒';// 不能修改
```

6. 属性存取器

   对于一些不希望被任意修改的属性，可以将其设置为private

   直接将其设置为private将导致无法再通过对象修改其中的属性

   我们可以在类中定义一组读取、设置属性的方法，这种对属性读取或设置的属性被称为属性的存取器

   读取属性的方法叫做setter方法，设置属性的方法叫做getter方法

   ```typescript
   class Person{
       private _name: string;
   
       constructor(name: string){
           this._name = name;
       }
   
       get name(){
           return this._name;
       }
   
       set name(name: string){
           this._name = name;
       }
   
   }
   
   const p1 = new Person('孙悟空');
   console.log(p1.name); // 通过getter读取name属性
   p1.name = '猪八戒'; // 通过setter修改name属性
   ```

   

7. 静态属性

   静态属性（方法），也称为类属性。使用静态属性无需创建实例，通过类即可直接使用

   静态属性（方法）使用static开头

   ```typescript
   class Tools{
       static PI = 3.1415926;
       
       static sum(num1: number, num2: number){
           return num1 + num2
       }
   }
   
   console.log(Tools.PI);
   console.log(Tools.sum(123, 456));
   ```

   

   this：在类中，使用this表示当前对象

### 继承

- 继承时面向对象中的又一个特性

- 通过继承可以将其他类中的属性和方法引入到当前类中

- 通过继承可以在不修改类的情况下完成对类的扩展

  ```typescript
  class Animal{
      name: string;
      age: number;
  
      constructor(name: string, age: number){
          this.name = name;
          this.age = age;
      }
  }
  
  class Dog extends Animal{
  
      bark(){
          console.log(`${this.name}在汪汪叫！`);
      }
  }
  
  const dog = new Dog('旺财', 4);
  dog.bark();
  ```

- 重写

  - 发生继承时，如果子类中的方法会替换掉父类中的同名方法，这就称为方法的重写
  - 在子类中可以使用super来完成对父类的引用

  ```typescript
  class Animal{
      name: string;
      age: number;
  
      constructor(name: string, age: number){
          this.name = name;
          this.age = age;
      }
  
      run(){
          console.log(`父类中的run方法！`);
      }
  }
  
  class Dog extends Animal{
  
      bark(){
          console.log(`${this.name}在汪汪叫！`);
      }
  
      run(){
          console.log(`子类中的run方法，会重写父类中的run方法！`);
      }
  }
  
  const dog = new Dog('旺财', 4);
  dog.bark();
  ```

### 抽象类 （abstract class）

抽象类是专门用来被其他类所继承的类，它只能被其他类所继承不能用来创建实例

使用abstract开头的方法叫做抽象方法，抽象方法没有方法体只能定义在抽象类中，继承抽象类时抽象方法必须要实现

```typescript
abstract class Animal{
    abstract run(): void;
    bark(){
        console.log('动物在叫~');
    }
}

class Dog extends Animals{
    run(){
        console.log('狗在跑~');
    }
}
```