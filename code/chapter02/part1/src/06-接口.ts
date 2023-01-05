(function () {
    //描述一个对象的类型
    //对对象(obj)进行限制
    type myType={
        name:string,
        age:number
    }

    /*
     * 接口即用来定义一个类的结构，用来定义一个类中应该包含哪些属性和方法
     *      同时接口也可以当成类型声明去使用
     */
    //定义一个接口
    interface myInterface{
        name:string,
        age:number
    }

    interface myInterface{
        gender:string
    }

    // const obj:myInterface={
    //     name:'小兔宰治',
    //     age:24,
    //     gender:'female'
    // }

    /*
     * 接口可以在定义类的时候限制类的结构，
     *  接口中的所有属性都不能有实际的值
     *  接口只定义对象的结构，不考虑实际值
     *      在接口中所有的方法都是抽象方法
     */
    interface myInter{
        name:string;
        sayHello():void
    }

    /*
     * 定义类时，可以使类去实现一个接口，
     *  实现接口就是使类满足接口的要求
     */
    class MyClass implements myInter{
        name: string;

        constructor(name:string) {
            this.name=name
        }

        sayHello() {
            console.log('大家好，我是'+this.name)
        }
    }
    const mc=new MyClass('旺拔稿子')
    console.log(mc.name)
    mc.sayHello()
})()