// Return a STRING of given values [number to print, # of times to print that number]
const repeatNumbers = function(data) {
  let numbers = []; // placeholder for number(s) to print
  for (let pair of data) {
    let x = ''; // placeholder for creation of new number
    for (let i = 0; i < pair[1]; i++) {
      x += pair[0];
    }
    numbers.push(x);
  }
  return numbers.join(', ');
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));