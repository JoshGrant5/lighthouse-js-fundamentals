// Generate multiplication table for the values from 1 to the provided number 
const multiplicationTable = function(maxValue) {
  let table = []; // placeholder for multiplication table
  for (let x = 1; x <= maxValue; x++) {
    let row = []; // placeholder for each row in table
    for (let y = 1; y <= maxValue; y++) {
      row.push(x * y);
    }
    let noCommas = row.join(' ');
    table.push(noCommas);
  }
  let newLines = table.join('\n');
  return newLines;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));