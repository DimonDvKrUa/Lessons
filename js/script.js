'use strict';

function sayHello(name) {
   return 'Привет, '+ name;
}

console.log(sayHello('Антон'));

function returnNeighboringNumbers(num) {
   const arr = [];
   arr.push(num-1);
   arr.push(num);
   arr.push(num+1);
   return arr;
}

console.log(returnNeighboringNumbers(33));

function getMathResult(num, count) {
   let res = '';
   if (typeof(count) != 'number' || count < 1) {
      res = num;
   } else {
      for (let i = 1; i < count; i++) {
         res += num*i + '---';
      }
      res += num*count;
   }
   return res;
}

console.log(getMathResult(20, -5));
