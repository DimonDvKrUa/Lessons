'use strict';


// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//    result.push(arr[i]);
// }
// console.log(result);


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i < data.length; i++) {
//    if (typeof(data[i]) == "number") {
//       data[i] = data[i]*2;
//    } else if (typeof(data[i]) == "string") {
//       data[i] += " - done";
//    } else{
//       continue;
//    }
// }
// console.log(data);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for (let i = data.length-1; i >= 0; i--) {
//    result.push(data[i]);
// }
// console.log(result);

const lines = 5;
let result = '';
for (let i = 0; i <= lines; i++) {
   for (let j = 1; j <= lines-i; j++) {
      result += " ";
   }
   for (let k = 1; k <= 1+2*i; k++) {
      result += "*";
   }
   result += "\n";
}
console.log(result);