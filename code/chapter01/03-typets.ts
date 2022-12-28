//也可以直接使用字面量进行类型声明
let a:10
a=10
// a=11

//可以使用 | 来连接多个类型(联合类型)
let b:"male" | "female"
b="male"
b="female"

let c:boolean | string
c=true
c="hello"

//any 表示的是任意类型，一个变量类型设置为any后相当于对该变量关闭了TS的类型检测
//使用TS时，不到万不得已，不建议使用any类型
// let d:any

//声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any(隐式的any)
let d
d=10
d="hello"
d=false

//unknown 表示未知类型的值
let e:unknown
e=10
e="hello"
e=true

let s:string

//d的类型是any，它可以赋值给任意变量
// s=d

e="hello"
//unknown实际上就是一个类型安全的any，把未知类型的变量赋值给字符串就会报错
//unknown类型的变量不能直接赋值给其他变量
if(typeof e==="string"){
    s=e
}

//类型断言，可以用来告诉解析器变量的实际类型
/*
 * 语法：
 *  变量 as 类型
 *  <类型>变量
 */
s=e as string
s=<string>e

//void 表示空，以函数为例，就表示没有返回值的函数
function fn():void {
    return
}

//never 表示永远不会反悔结果，就是什么都没有，里面连undefined都别写
//不同于空，它是压根就是没有，它的用途就是用来报错的，用的少
function fn2():never {
    throw new Error('报错啦！！')
}
