// Create a Square Code algorithm for composing secret messages
// spaces are removed from text and the characters are written in a square (or rectangle)
// if there are 54 characters in the string, the square root of 54 = 7.35, rounded up to 8, so there can be 8 characters on each line (8 columns)
// the message is read down the columns from left to right *
const squareCode = function(message) {
  let noSpaces = ''; // message once spaces are removed
  let text = {}; // object for storing text of each column
  let code = []; // placeholder for final code to return
  let counter = 1; // condition for creating columns based on column length
  for (let i = 0; i < message.length; i++) {
    if (message[i] !== ' ') {
      noSpaces += message[i];
    }
  }
  let columns = (Math.ceil(Math.sqrt(noSpaces.length)));

  for (let i = 1; i <= columns; i++) {
    text[i] = '';
  }
  for (let i = 0; i < noSpaces.length; i++) {
    if (counter === columns + 1) {
      counter = 1;
      text[counter] += noSpaces[i];
      counter++;
    } else {
      text[counter] += noSpaces[i];
      counter++;
    }
  }
  for (let i = 1; i <= columns; i++) {
    code.push(text[i]);
  }
  let output = code.join(' ');
  return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));