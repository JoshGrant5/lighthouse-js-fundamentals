// Replace all whitespace with '%20'
const urlEncode = function(text) {
  let newString = ''; // placeholder for new string
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ' & i !== 0) { // make sure returned string does not start with '%20'
      newString += '%20';
    } else if (text[i] !== ' ') {
      newString += text[i];
    }
  }
  return newString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));