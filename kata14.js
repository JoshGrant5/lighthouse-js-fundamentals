// %20 represents a space character, key-value pairs are represented using = (key=value)
// multiple key-value pairs are separated with & (Key1=value1&key2=value2)
const urlDecode = function(text) {
  let item = ''; // placeholder for each item (both keys and values)
  let k = ''; // placeholder for keys
  let v = ''; // placeholder for values 
  let pairs = {}; // object to be returned
  let space = false; // test condition for space characters
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '=') {
      k = item;
      item = '';
    } else if (text[i] === '%' && text[i + 1] === '2' && text[i + 2] === '0') {
      item += ' ';
      space = true;
    } else if (text[i] === '&') {
      v = item;
      pairs[k] = v;
      item = '';
      k = '';
      v = '';
    } else if (space) {
      if (text[i] === '0') {
        space = false;
      } 
    } else {
      item += text[i]; 
    }
  }
  pairs[k] = item;
  return pairs;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);