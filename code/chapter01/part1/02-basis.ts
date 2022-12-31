//表示声明一个变量a，同时制定它的类型为number
let a:number;

//a的类型设置为了number，在以后的使用过程中，a的值只能是数字
a=10;
a=23;
// a='hello'  //此行代码会报错，因为变量a的类型是number，不能赋值字符串
let b:string;
b='hello'
// b=133

//声明完变量直接进行赋值
// let c:boolean=false

//如果变量的声明和赋值时同时进行的，TS可以自动对变量进行类型检测
let c=false
c=true

//JS中的函数是不考虑参数的类型和个数的
// function sum(a, b) {
//     return a+b
// }

// console.log(sum(123,456))  //579
// console.log(sum(123,"456"))  //123456

//a:number, b:number-给参数加上类型声明，表示我希望sum函数的两个参数类型都是数字类型
// function sum(a:number, b:number):number-括号后面的number表示希望函数返回值的类型是数字类型
function sum(a:number, b:number):number{
    return a+b
}
let result=sum(124,456)

