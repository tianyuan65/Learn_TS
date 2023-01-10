//引入样式
import './style/index.less';
//定义食物类Food
class Food {
    constructor() {
        //获取页面中的food元素，并将其赋值给element
        this.element = document.getElementById('food');
    }
    //定义一个获取食物X轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }
    //定义一个获取食物Y轴坐标的方法
    get Y() {
        return this.element.offsetTop;
    }
    //改变食物的位置
    change() {
        //生成一个随机的位置
        //事物的位置最小是0 最大是298
        //蛇移动一次就是一格，一格的大小就是10，所以就要求食物的坐标必须是10的倍数
        let top = Math.round(Math.random() * 29);
        // Math.floor(Math.random()*30)*10
        let left = Math.round(Math.random() * 29);
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}
//测试
const food = new Food();
console.log(food.X, food.Y);
food.change();
console.log(food.X, food.Y);
