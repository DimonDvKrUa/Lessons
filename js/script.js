'use strict';

const family = ['Peter', 'Ann', 'Alex', 'Linda'];
function showFamily(arr) {
    if (arr.length > 0) {
        return `Семья состоит из: ${arr.join(' ')}`;
    } else {
        return `Семья пуста`;
    }
}
console.log(showFamily([family]));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function standardizeStrings(arr) {
    for (let key in arr) {
        console.log(arr[key].toLowerCase());
    }
}
standardizeStrings(favoriteCities);

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) === 'string') {
        let arr = [...str].reverse();
        return arr.join('');
    } else {
        return 'Ошибка!';
    }
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
//console.log(baseCurrencies.concat(additionalCurrencies));

function availableCurr(arr, missingCurr) {
    if (arr.length > 0) {
        let str = 'Доступные валюты:\n';
        for (let key in arr) {
            if (arr[key] !== missingCurr) {
                str += `${arr[key]}\n`;
            }
        }
        return str;
    } else {
        return ('нет доступных валют');
    }
}

console.log(availableCurr(baseCurrencies.concat(additionalCurrencies), 'UAH'));