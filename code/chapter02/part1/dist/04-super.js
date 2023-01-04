"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('你瞎喊什么');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            //如果在子类中写了构造函数，在子类的构造函数中必须对父类的构造函数进行调用
            super(name); //调用父类的构造函数，不调用不行，语法错误
            this.age = age;
        }
        sayHello() {
            //在类的方法中super就表示当前类的父类
            // super.sayHello();
            console.log('汪汪汪');
        }
    }
    const dog = new Dog('修勾', 3);
    dog.sayHello();
})();
