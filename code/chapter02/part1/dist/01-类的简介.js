"use strict";
/*
 * 类中主要包含了两个部分：
 *  属性
 *  方法
 */
//使用class关键字来定义一个类(Person)
class Person {
    constructor() {
        /*
         * 直接定义的属性是实例属性，需要通过对象的实例去访问
         *   const per=new Person()
         *   per.name
         * 使用static开头的属性是静态/类属性，无需创建对象，可以直接通过类访问
         *   Person.age
         * readonly 开头的属性表示一个只读的属性，无法修改
         */
        //定义实例属性
        //实例属性，下面的两个属性(name和age)是定义在Person类的实例当中的，只有创建Person的实例对象(per)后才能看见属性，只有通过实例per(per.name,per.age)才可以访问属性
        // readonly name:string="Artem";
        this.name = "Artem";
        //在属性前使用static关键字可以定义类属性(静态属性)，此时age就是一个类/静态属性
        // static readonly age:number=29
        this.age = 29;
    }
    //定义(sayHello)方法
    /*
     * 如果方法以static开头，则方法就是类方法，可以直接通过类调用/访问
     * 直接定义的方法是实例方式(就是不加static)，需要通过对象的实例去访问
     */
    sayHello() {
        console.log("Tears of Themis");
    }
}
const per = new Person();
console.log(per);
// console.log(per.name,per.age);
//静态/类属性需要通过类访问
// console.log(Person.age);
// console.log(per.name);
// per.name="Vilhelm"
// console.log(per.name);
// per.sayHello()
// Person.sayHello()
per.sayHello();
