(function () {
    //定义一个表示人的类
    class Person {
        //TS可以在属性前添加属性的修饰符
        /*
         * public 修饰的属性可以在任意位置访问/修改(包括在子类中也可以访问) 默认值
         * private 私有属性只能在类内部进行访问/修改
         *  -通过在类中添加方法使得私有属性可以被外部访问
         * protected 受保护的属性，只能在当前类和当前类的子类中访问/修改
         */
        private _name:string
        private _age:number

        constructor(name:string,age:number) {
            this._name=name
            this._age=age
        }
        //定义方法，用来获得name属性
        // getName(){
        //     return this._name
        // }
        // //定义方法，用来设置name属性
        // setName(value:string){
        //     this._name=value
        // }
        //
        // getAge(){
        //     return this._age
        // }
        // setAge(value:number){
        //     //判断年龄是否合法
        //     if(value>=0) {
        //         this._age = value
        //     }
        // }

        //TS中设置getter方法的方式
        get name(){
            // console.log('get name()执行了')
            return this._name
        }
        set name(value){
            this._name=value
        }
        get age(){
            return this._age
        }
        set age(value){
            if(value>=0){
                this._age=value
            }
        }

    }

    const per=new Person('小兔宰治',24)

    /*
     * 现在属性是在对象中设置的，属性可以任意的被修改
     *  属性可以任意被修改将会导致对象
     */
    // per.setName('旺拔稿子')
    // per.setAge(-23)

    per.name='旺拔稿子'
    per.age=23

    // console.log(per)

    class A {
        protected num:number

        constructor(num:number) {
            this.num=num
        }
    }
    
    class B extends A{
        test(){
            console.log(this.num)
        }
    }

    const b=new B(2345)
    // b.num=278

    /*class C {
        name:string
        age:number

        constructor(name:string,age:number) {
            this.name=name
            this.age=age
        }
    }*/
    class C {
        //可以直接将属性定义在构造函数中
        constructor(public name:string,public age:number) {
        }
    }
    const c=new C('小碧宰治',12)
    console.log(c);
})()