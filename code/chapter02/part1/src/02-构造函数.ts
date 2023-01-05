class Dog{
    name:string;
    age:number

    //constructor 被称为构造函数
    //构造函数会在对象创建时调用，就是调用new Dog()的时候
    constructor(name:string,age:number) {
        //在实例方法中，this表示当前的实例
        //在构造函数中，当前对象就是当前新建的那个对象
        //所以，在构造函数中，可以通过this向新建的对象中添加属性
        // console.log(this)
        this.name=name;
        this.age=age
    }

    bark(){
        // alert('汪汪汪')
        //在方法中可以通过this来表示当前调用方法的对象
        console.log(this)
        console.log(this.name);
        console.log(this.age);
    }


}

const dog=new Dog('狗桑',3)
const dog2=new Dog('修勾',1)
console.log(dog);
console.log(dog2);

dog.bark()
dog2.bark()


