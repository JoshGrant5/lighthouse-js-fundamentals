const sumLargestNumbers = function(data) {
  let x = 0; // One of the largest numbers
  let y = 0; // The other largest number
  let z = 0; // placeholder

  for (let num of data) {
    if (num > x && num > y) {
      z = x;
      x = y;
      y = z;
      x = num;
    } else if (num > x && num < y) {
      x = num;
    } else if (num < x && num > y) {
      y = num;
    }
  }
  return (x + y);
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
