// Convert string to the casing style assigned to it (camel, pascal, snake, kebab, title, vowel, consonant, upper)
const makeCase = function(input, cases) {
  let phrase = input; // new variable to hold input string, since this string may be styled more than once
  let condition = false; // test condition for each style
  let checks = 1; // condition for while loop based on number of casing styles to apply
  let num = 0; // variable for indexing when given multiple casing styles
  let style = cases; // variable for holding individual casing styles
  
  if (Array.isArray(cases)) {
    checks = cases.length;
    style = cases[num];
  }

  while (checks > 0) {
    let newString = ''; // placeholder for returned string
    for (let i = 0; i < phrase.length; i++) {
      if (style === 'camel') {
        if (phrase[i] === ' ') {
          condition = true;
        } else if (condition) {
          let x = phrase[i].toUpperCase();
          newString += x;
          condition = false;
        } else {
          newString += phrase[i];
        }
      } else if (style === 'pascal') {
        if (i === 0) {
          let x = phrase[i].toUpperCase();
          newString += x;
        } else if (phrase[i] === ' ') {
          condition = true;
        } else if (condition) {
          let x = phrase[i].toUpperCase();
          newString += x;
          condition = false;
        } else {
          newString += phrase[i];
        }
      } else if (style === 'snake') {
        if (phrase[i] === ' ') {
          newString += '_';
        } else {
          newString += phrase[i];
        }
      } else if (style === 'kebab') {
        if (phrase[i] === ' ') {
          newString += '-';
        } else {
          newString += phrase[i];
        }
      } else if (style === 'title') {
        if (i === 0) {
          let x = phrase[i].toUpperCase();
          newString += x;
        } else if (phrase[i] === ' ') {
          newString += phrase[i];
          condition = true;
        } else if (condition) {
          let x = phrase[i].toUpperCase();
          newString += x;
          condition = false;
        } else {
          newString += phrase[i];
        }
      } else if (style === 'vowel') {
        if (phrase[i] === 'a' || phrase[i] === 'e' || phrase[i] === 'i' || phrase[i] === 'o' || phrase[i] === 'u') {
          let x = phrase[i].toUpperCase();
          newString += x;
        } else {
          newString += phrase[i];
        }
      } else if (style === 'consonant') {
        if (phrase[i] !== 'a' && phrase[i] !== 'e' && phrase[i] !== 'i' && phrase[i] !== 'o' && phrase[i] !== 'u') {
          let x = phrase[i].toUpperCase();
          newString += x;
        } else {
          newString += phrase[i];
        }
      } else if (style === 'upper') {
        let x = phrase[i].toUpperCase();
        newString += x;
      }
    }
    num++;
    style = cases[num];
    checks--;
    phrase = newString;
  }
  return phrase;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));