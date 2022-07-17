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

