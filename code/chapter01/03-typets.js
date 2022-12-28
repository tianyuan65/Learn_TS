//也可以直接使用字面量进行类型声明
var a;
a = 10;
// a=11
//可以使用 | 来连接多个类型(联合类型)
var b;
b = "male";
b = "female";
var c;
c = true;
c = "hello";
//any 表示的是任意类型，一个变量类型设置为any后相当于对该变量关闭了TS的类型检测
//使用TS时，不建议使用any类型
// let d:any
//声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any(隐式的any)
var d;
d = 10;
d = "hello";
d = false;
