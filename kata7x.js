// Convert strings to camelCase
const camelCase = function(input) {
  let newString = ''; // placeholder for new string
  let upper = false; // condition for use of .toUpperCase method
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      upper = true;
    } else if (upper) {
      let x = input[i].toUpperCase();
      newString += x; 
      upper = false;
    } else {
      newString += input[i];
    }
  }
  return newString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
