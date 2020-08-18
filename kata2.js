// Add only the numbers in the array which match the given condition
const conditionalSum = function(values, condition) {
  let sum = 0; // placeholder for adding numbers together
  for (let num of values) {
    if (condition === 'even') {
      if (num % 2 === 0) {
        sum += num;
      }
    } else if (condition === 'odd') {
      if (num % 2 !== 0) {
        sum += num;
      }
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));