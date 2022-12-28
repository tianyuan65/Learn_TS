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
  * object
        

###总结
* a：是程序自动显示的，代码里不用敲
* TS的优点之一：类型声明不仅能用在变量身上，也可以用在参数和返回值身上
* 老师曰：不要嫌TS/unknown麻烦，遇到类型不确定的变量尽量能用unknown就用unknown，能不用any就尽量不用any，嫌麻烦别用TS
* TS编译器可以根据返回值的情况判断变量或函数的类型