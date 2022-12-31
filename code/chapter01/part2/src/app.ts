import {h} from './m.js'
let a=10
// console.log(h)
console.log(a);

// a='hello'

function fn(a:number, b:number) {
    return a+b
}

function fn2(this:Window) {
    alert(this)
}

let box1= document.getElementById('box1')
//方法1
// if(box1!==null) {
//     box1.addEventListener('click', function () {
//         alert('hello')
//     })
// }

//方法2
box1?.addEventListener('click',function () {
    alert('hello')
})
