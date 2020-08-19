// Calculate which coins to use when giving out change (total of transaction, cash given to cashier)
// Both parameters are given in cents - $10 is represented as 1000
// Include pennies in change given if needed
const calculateChange = function(total, cash) {
  let numbers = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];

  let options = {2000: 'twentyDollar', 1000: 'tenDollar', 500: 'fiveDollar', 200: 'twoDollar', 100: 'oneDollar', 25: 'quarter', 
  10: 'dime', 5: 'nickel', 1: 'penny'}
  
  let amount = cash - total;
  let change = {}; // placeholder object for change to be given
  
  for (let num of numbers) {
    if (amount / num > 1) {
      let x = Math.floor(amount / num);
      change[options[num]] = x;
      amount -= num * x;
    } else if (amount % num === 0) {
      if (amount > 0) {
        change['penny'] = amount / 1;
      }
    }
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));