// Determine which instructor has the longest name
const instructorWithLongestName = function(instructors) {
  let letters = 0; // placeholder for longest number of letters
  let longest; // placeholder for the instructor with longest name
  for (let id of instructors) {
    if (id["name"].length > letters) {
      letters = id["name"].length;
      longest = id;
    }
  }
  return longest;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));