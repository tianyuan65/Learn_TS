//object表示一个js对象
let a:object
a={}
a=function () {
    
}

//{} 用来指定对象中可以包含哪些属性
//语法：{属性名：属性值}
let b:{name:string,age?:number}
b={name:"Luke",age:24}

//设置对象c内有且只有一个属性就是name，不能出现name以外的任何属性
//[propName:string]:any  表示任意类型的属性，如果]后面是string，就表示属性名后面必须是字符串类型的属性值
let c:{name:string,[propName:string]:any}
c={name:"Artem",age:29,gender:"male"}

//表示希望d是一个函数，有两个参数(a和b)，且两个参数的类型都是number类型，并返回值也是number
//要注意的是定义了几个参数，后面就写几个参数，不能多写或少写
//当参数类型不一致时，就会报错
/*
 * 设置函数结构的类型声明：
 *      语法：(形参:类型,形参:类型,...)=>返回值
 */
let d:(a: number,b:number)=>number
// d=function (n1:string,n2:string):number{
//     return 9
// }

/*
 * 数组的类型声明：
 *      类型[]
 *      Array<类型>
 */

//string[] 表示字符串数组，希望e是个数组，里头装的都是字符串类型
let e:string[]
e=['a','s','g',]

//:number[] 表示数值数组，希望f是个数组，里头装的都是数字类型
let f:number[]

//和let f 是一个意思 :Array<number> 表示数值数组，希望g是个数组，里头装的都是数字类型
let g:Array<number>
g=[1,4,5,8]
//不想限制那就设置为any，但是不建议，尽量明确属性的值类型
let q:Array<any>
q=[1,2,'hhhhh',true]

/*
 * tuple 元祖，就是固定长度的数组
 *      语法：[类型,类型,类型,类型]
 */
let t:[string,string]
t=['hhhhh','aha']

/*
 * enum 枚举
 *  在多个值之间进行选择时，适合使用枚举
 */
//枚举一个类，叫Gender，Gender里有两个值，male和female
enum Gender{
    Male,
    Female
}
let s:{name:string,gender:Gender}
s={
    name:'Vilhelm',
    //'男'/'male' 为了在数据库中占用的容量小，且属性名的值在一定范围内的，就设置为数值类型
    gender:Gender.Male
}

// console.log(s.gender===Gender.Male)  //true

//表示k的类型是string或number
let k:string|number

//表示r的类型是string且number  & 表示同时
let r:string&number  //这是个有病行为
let z:{name:string}&{age:number}  //这个就不是有病行为了
z={name:"Marius",age:21}

//类型的别名
//给string类型创建了个别名，叫myType
type myType=string
type type1=1|2|3|4|5
// let i:1|2|3|4|5
let i:type1
// let l:1|2|3|4|5
let l:type1
let m:myType

i=5

