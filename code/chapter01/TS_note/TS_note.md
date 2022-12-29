###
* TS类型声明
  * ts可以编译成任意版本的js文件(ES3，ES5，ES6都可以)
  * a:number, b:number-给参数加上类型声明，表示我希望sum函数的两个参数类型都是数字类型
  * function sum(a:number, b:number):number-括号后面的number表示希望函数返回值的类型是数字类型
    * ![:number-返回值类型](images/指定返回值类型.png)
  
* TS中类型(1)
  * 可以直接使用字面量进行类型声明
    * ```
      let a:10
      a=10
      ```
  * 可以使用 | 来连接多个类型(联合类型)
    * ```
      let b:"male" | "female"
      b="male"
      b="female"```
    * ```
      let c:boolean | string
      c=true
      c="hello"```  
  * any表示的是任意类型，一个变量类型设置为any后相当于对该变量关闭了TS的类型检测，所以使用TS时，不到万不得已，不建议使用any
    * 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any(隐式的any)
      * ![隐式的any](images/any.png)
    * ```
      d=10
      d="hello"
      d=false
      ```
  * unknown 表示未知类型的值，可以设置任意类型的变量
    * ```
      let e:unknown
      e=10
      e="hello"
      e=true
      let s:string
      // d的类型是any，它可以赋值给任意变量
      // s=d
      ```
    * 但不可以把设置为unknown的变量赋值给其他类型的变量
      * ```
        e="hello"
        //unknown实际上就是一个类型安全的any，把unkmown类型的变量赋值给其他变量就会报错
        s=e
        ```
    * 类型断言，可以用来告诉解析器变量的实际类型
      * 语法：
        * 变量 as 类型
        * <类型>变量
        * eg:```s=e as string 
                s=<string>e```
  * void 表示空，以函数为例，就表示没有返回值的函数，如果return后面写了返回值就会报错
    * 可以不写，可以写undefined(虽然这是有病行为)，也可以写null
    * ![没有返回值的函数](images/void不可写返回值.png)
    * 如果写了返回值的类型函数的类型便是什么类型
      * ![boolean类型](images/函数的自动判断.png)
    * 如果函数里啥也没写，那就会自动判断为void
      * ![自动判断](images/函数的自动判断2.png)
    * 简单的例子
      * ```
        function fn(num) {
          if(num>0){
          return false
          }else{
          return 234
          }
        }
        ```
  * never 表示永远不会反悔结果，就是什么都没有，里面连undefined都别写
    * 不同于空，它是压根就是没有，它的用途就是用来报错的，用的少
    * ```
      function fn2():never {
        throw new Error('报错啦！！')
      }

      ```

* TS中类型(2)
  * object 表示一个js对象
    * ![需要属性为字符串的对象例子，写错了会报错](images/需要属性为字符串的对象.png)
    * ![该写啥写啥，不要缺或多](images/该咋写咋写，别缺啥多啥.png)
      * 如果赋值时没有写某个属性名和值时，可以在没写的对象的属性后面加 ? ，表示某个没写的属性是可选的，可有可无
        * ```
          let b:{name:string,age?:number}
          b={name:"Luke",age:24}
          ```
    * 定义对象的结构
      * 设置对象c内有且只有一个属性就是name，不能出现name以外的任何属性
      * [propName:string]:any  表示任意类型的属性，如果]后面是string，就表示属性名后面必须是字符串类型的属性值
        * ```
          let c:{name:string,[propName:string]:any}
          c={name:"Artem",age:29,gender:"male"}
          ```
    * 设置函数结构的类型声明：
      * 语法：(形参:类型,形参:类型,...)=>返回值
      * 表示希望d是一个函数，有两个参数(a和b)，且两个参数的类型都是number类型，并返回值也是number
        * ```let d:(a: number,b:number)=>number```
      * 要注意的是定义了几个参数，后面就写几个参数，不能多写或少写，当参数类型不一致时，就会报错
        * ![参数类型不一致就会报错](images/参数类型不一致.PNG)
    * 数组的声明类型：
      * 1. 类型[]
        * ```
          //string[] 表示字符串数组，希望e是个数组，里头装的都是字符串类型
          let e:string[]
          e=['a','s','g',]
          //:number[] 表示数值数组，希望f是个数组，里头装的都是数字类型
          let f:number[]
          ```
      * 2. Array<类型>
        * ```
          //和let f 是一个意思 :Array<number> 表示数值数组，希望g是个数组，里头装的都是数字类型
          let g:Array<number>
          g=[1,4,5,8]
          //不想限制那就设置为any，但是不建议，尽量明确属性的值类型
          let q:Array<any>
          q=[1,2,'hhhhh',true]
          ```
    * tuple 元祖，就是设置固定长度的数组，不可多，不可少，也不可能写错
      * 语法：[类型,类型,类型,类型]
      * 错误示范
        * [错误示范1](images/元祖.PNG)
        * [错误示范2](images/元祖2.PNG)
        * [错误示范3](images/元祖3.PNG)
    * enum 枚举-在多个值之间进行选择时，适合使用枚举
      * ```
        枚举一个类，叫Gender，Gender里有两个值，male和female
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
        console.log(s.gender===Gender.Male)  //true
        ```
   * 补充：
      * | 或
        * ```
          表示k的类型是string或number
          let k:string|number
          
          ```
      * & 表示同时(且、与)
        * 例举有病行为:
          ```
          //表示r的类型是string且number
          let r:string&number ```
        * 正常行为：
          * ```
            let z:{name:string}&{age:number}
            z={name:"Marius",age:21}```
      * 类型的别名，主要用来简化类型的使用
        * ![错误示范](images/类型的别名.PNG)
        * ![正确示范](images/类型的别名2.PNG)

* TS编译选项(1)
  * 
  

###总结
* a：是程序自动显示的，代码里不用敲
* TS的优点之一：类型声明不仅能用在变量身上，也可以用在参数和返回值身上
* 老师曰：不要嫌TS/unknown麻烦，遇到类型不确定的变量尽量能用unknown就用unknown，能不用any就尽量不用any，嫌麻烦别用TS
* TS编译器可以根据返回值的情况判断变量或函数的类型
* 中括号里的不是变量，你把他当成一个rule就行