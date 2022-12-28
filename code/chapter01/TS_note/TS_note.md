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
  * any表示的是任意类型，一个变量类型设置为any后相当于对该变量关闭了TS的类型检测，所以使用TS时，不建议使用any
    * 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any(隐式的any)
      * ![隐式的any](images/any.png)
    * ```
      d=10
      d="hello"
      d=false
      ```






###总结
* a：是程序自动显示的，代码里不用敲
* TS的优点之一：类型声明不仅能用在变量身上，也可以用在参数和返回值身上