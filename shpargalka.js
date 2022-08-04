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