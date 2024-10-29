//! Task 1 - Completed 100
/* function smash(words) {
  return words.join(' ');
} */
/* const words = ['hello', 'world', 'this', 'is', 'great'];
console.log(words.join(' ')); */

/* words = ['hello', 'world', 'this', 'is', 'great'];
smash(words); // returns "hello world this is great" */

/* function smash(words) {
  return words.join(' ');
} */

//! Task-2 - Completed 100
/* function makeUpperCase(str) {
  return str.toUpperCase();
}
 */

//! Task-3 - Completed 100
// Write a function "greet" that returns "hello world!"
/* function greet() {
  return 'hello world!';
} */

//! Task-4 - Completed 100
/* function numberToString(num) {
  // Return a string of the number here!
  return String(num);
} */

//! Task-5 - 10:90
/* function drawStairs(n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += ' '.repeat(i) + 'I';
    if (i !== n - 1) {
      result += '\n';
    }
  }
  return result;
}
let n = 1;
console.log(drawStairs(n)); */

//! Task-6 - Completed 75:25
/* function basicOp(operation, value1, value2) {
   if (operation === '+') {
   return value1 + value2
  } else if (operation === '-') {
   return value1 - value2
  } else if (operation === '*') {
   return value1 * value2
  } else if (operation === '/') {
   return value1 / value2
  }
  return 0;
}
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7 */

//! Task-7 - 10:90
/* function sum(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sum([1, 5.2, 4, 0, -1])); // 9.2
console.log(sum([])); // 0 */

//! Task-8 - 10:90
/* function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
} */
