'use strict';

// Назначить действие кнопке
const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log();
});

//Простой таймер (ожидание выполнения)
const timerId = setTimeout(function(text) {
    console.log(text);
}, 2000, 'Hello');

//Вызов вункции по твймеру
const timerFuncId = setTimeout(logger, 2000, 'Hello');
function logger () {
    console.log('text');
}

//Запуск счетчика по нажатии на btn
const   btn = document.querySelector('.btn');
let     intervalId;
btn.addEventListener('click', () => {
    intervalId = setInterval(logger, 2000)
});
clearInterval(intervalId); //Остановка

//Рекурсивный запуск интерывала (строгое ожидание конца выполнения кода)
let id = setTimeout(function log() {
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500);

//Пример движения єлемента по таймеру
function myAnimation () {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos+'px';
            elem.style.left = pos+'px';
        }
    }
}
btn.addEventListener('click', myAnimation);

// Параметры документа
// https://drive.google.com/file/d/1eTxWzmaDfN0CXHC7Dv_AE39A1GlNO1nI/view

// Полчучить координаты элемента на странице
const box = document.querySelector('.box');
box.getBoundingClientRect();

// Получить стили, не инлайн
const style = window.getComputedStyle(box);

// Функции конструкторы
const num = new Number(3);
console.log(num);

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name} ушел`);
// };
// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);


// This

// 1) Обычная функция: this = window, но если 'use strict' - undefined
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

// 2) Контекст у методов объекта - сам объект// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };
// obj.sum();

// 3) this в конструкторах и класах - это новый экземпляр объекта
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// };
// let ivan = new User('Ivan', 28);

// 4) Ручная привязка this: call, apply, bind 
function sayName() {
    console.log(this);
    console.log(this.name);
}
const user = {
    name: 'John'
};
sayName.call(user);
sayName.apply(user);

function count(num) {
    return this*num;
}
const double = count.bind(2);
console.log(double(3));
console.log(double(13));


// Классы (ES6)

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hellow World', 'red');
div.showMyProps();
console.log(div.calcArea());


const square = new Rectangle(10, 10);

console.log(square);
console.log(square.calcArea());