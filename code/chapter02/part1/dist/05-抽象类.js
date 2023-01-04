"use strict";
(function () {
    /*
     * 以abstract开头的类是抽象类
     *      抽象类和其他类区别不大，只是不能用来创建对象
     *      抽象类就是专门用来被继承的类(创建就是被用来当父类的类，生来就是当爸爸的料)
     *
     *      抽象类中可以添加抽象方法
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('汪汪汪');
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log('喵喵喵');
        }
    }
    const dog = new Dog('修勾');
    dog.sayHello();
    const cat = new Cat('猫桑');
    cat.sayHello();
})();
