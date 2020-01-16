const firstTenNums = () => {
  // firstTenNums should `console.log()` the numbers
  // from 1 - 10.  Use a `for` loop.
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(num => console.log(num))
};

function manyEvens() {
  // Return an array that contains all the even numbers between 1 and 100 (inclusive).
  // Use a for loop.
  const result = [];
  for (let i = 2; i <= 100; i += 2) {
    result.push(i);
  }
  return result;
}

function manyOdds() {
  // Return an array that contains all the odd numbers between 3 and 103 (inclusive).
  // Use a while loop.
  const result = [];
  for (let i = 3; i <= 103; i += 2) {
    result.push(i);
  }
  return result;
}

const arraySum = (nums) => {
  // arraySum(nums) receives an array of numbers as an argument
  // and should return the sum of all the numbers.
  // For example, 
  // arraySum([1, 2]) => 3
  // arraySum([3, 4, 5, 6]) => 18
  // Use a loop of your choice
  return nums.reduce((a, b) => a + b)
};

function sumToN(n) {
  // Return the sum of all numbers from 1 to n.
  let counter = 0;
  for (let i = 0; i <= n; i++) {
    counter += i;
  }
  return counter;
}

function countDown(n) {
  // Return an array of all numbers with n at index 0 and 1 at the last index.
  const result = [];
  for (let i = n; i > 0; i--) {
    result.push(i);
  }
  return result;
}

function factorial(n) {
  // compute the factorial of n. See https://en.wikipedia.org/wiki/Factorial.
  let counter = 1;
  if (n > 1) {
    for (let i = n; i > 0; i--) {
      counter = counter * i;
    }

  }
  return counter;
}

function leastCommonMult(a, b) {
  // Bonus question:
  // Find the least common multiple of two inputted numbers.
  // See: https://en.wikipedia.org/wiki/Least_common_multiple
}

const funkyText = (text) => {
  /*
   * Bonus question :
   * funkyText(text) should return a modified version of `text` which
   * is passed as an argument.  The modified string should have every other
   * letter capitalized, starting with the second character.
   *
   * For example, "wallet" should be transformed into "wAlLeT"; "cat" => "cAt"
   * Use a loop of your choice.  
   * Recall that you can concatenate two strings
   * together using "string".concat("otherString") 
   * Alternatively, Array.split() and Array.join() might be useful
   */

};

const multiplicationTable = () => {
  /*
   * multiplicationTable() should console.log() out a multiplication
   * table ( or "times table" ) up to 10 in the format of "a X b is c".
   * First, it should console.log() "1 X 1 is 1"; next, "1 X 2 is 2"
   * until "1 X 10 is 10", then the following log should be "2 X 1 is 2" and so forth
   * This one is a bit harder.  You will need to use a nested loop.
   */

}

const activityLog = () => {
  /*
   * activityLog() should `console.log()` that each
   * person is doing each activity in order.  For example,
   * first, log "Eric went on a bike ride", then "Eric 
   * played badminton"...  After logging "Eric is going to the deli...", do the same for each activity  but for Jay-Z.
   * This task also requires a nested loop
   */
  const people = [
    'Eric',
    'Jay-Z',
    'John',
    'Jason',
    'Ryan',
    'Micky'
  ];

  const activities = [
    'went on a bike ride',
    'played badminton',
    'hailed a taxi',
    'is visiting the Met',
    'is going to the deli to nosh'
  ];

};

function fib(n) {
  // Bonus question:
  // Find the nth number of the Fibonacci sequence.
  // See https://en.wikipedia.org/wiki/Fibonacci_number.
}

module.exports = {
  firstTenNums,
  manyEvens,
  manyOdds,
  arraySum,
  sumToN,
  countDown,
  factorial,
  leastCommonMult,
  funkyText,
  multiplicationTable,
  activityLog,
  fib,
};