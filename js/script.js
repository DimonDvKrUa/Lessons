'use strict';

// Место для первой задачи
function calculateVolumeAndArea(rebro) {
    if (typeof(rebro) == 'number' && rebro > 0 && Number.isInteger(rebro)) {
        let volume, area;
        volume = rebro*rebro*rebro;
        area = 6*rebro*rebro;
        return  `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
    } else {
        return 'При вычислении произошла ошибка';
    }
}

console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.2));
console.log(calculateVolumeAndArea('15'));
console.log(calculateVolumeAndArea(-15));



// Место для второй задачи
function getCoupeNumber(mesto) {
    if (typeof(mesto) == 'number' && mesto >= 0 && Number.isInteger(mesto)) {
        if (mesto !== 0 && mesto < 36) {
            return Math.ceil(mesto/4);
        } else {
            return 'Таких мест в вагоне не существует';
        }
    } else {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }
}

console.log(getCoupeNumber(1));
console.log(getCoupeNumber(33));
console.log(getCoupeNumber(7));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));

// Место для первой задачи
function getTimeFromMinutes(minuts) {
    let hour = 0,
        min = 0,
        txt = 'час';
    if (typeof(minuts) == 'number' && minuts >= 0 && Number.isInteger(minuts)) {
        hour = Math.floor(minuts/60);
        min = minuts-(hour*60);
        if (hour > 1 && hour <5) {
            txt += 'а';
        } else if(hour > 4 || hour == 0) { 
            txt += 'ов';
        }
        return (`Это ${hour} ${txt} и ${min} минут`);
    } else {
        return ('Ошибка, проверьте данные');
    }
}
console.log(getTimeFromMinutes(60));
console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));
console.log(getTimeFromMinutes(350));

// Место для второй задачи
function findMaxNumber(x1, x2, x3, x4) {
    if (typeof(x1, x2, x3, x4) == 'number') {
        return Math.max(x1, x2, x3, x4);
    } else {
        return(0);
    }
    
}

console.log(findMaxNumber(1, 5, 6.6, 11));
console.log(findMaxNumber(1, 5, '6', '10'));


function fib(x) {
    let ch1 = 0,
        ch2 = 1,
        ch3 = 0,
        str = '';
    if (x === 1) {str = '0';} 
    else if (x === 2) {str = '0 1';}
    else {
        str = '0 1';
        for (let i = 2; i < x; i++) {
            ch3 = ch1 + ch2;
            ch1 = ch2;
            ch2 = ch3;
            str += ' ' + ch3;
        }
    }
    return(str);
}

console.log(fib(4));
console.log(fib(7));
console.log(fib('7'));
console.log(fib(1));
console.log(fib(0));