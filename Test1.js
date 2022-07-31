function factorial(x) {
  if (x < 1) {
    return 1;
  } else if (!Number.isInteger(x)) {
    return 'Ошибка';
  } else {
    if (x === 1) {
      return x;
    } else {
      return x *= factorial(x - 1);
    }
  }
}

console.log(factorial(1)); // 1! = 1
console.log(factorial(2)); // 2! = 2 * 1 = 2
console.log(factorial(3)); // 3! = 3 * 2 * 1 = 6
console.log(factorial(4)); // 4! = 4 * 3 * 2 * 1 = 24
console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120

console.log(factorial(-5)); 
console.log(factorial(5.5));
console.log(factorial('sdsfsd'));

