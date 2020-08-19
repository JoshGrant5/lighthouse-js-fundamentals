// Create a single object to organize instructors based on their course {Coursename: [Instructors]}
const organizeInstructors = function(instructors) {
  let sorted = {}; // object to be returned
  for (let x of instructors) {
    let course = x.course; // course to check against - reset every iteration
    let students = []; // list of students for each course - reset every iteration
    for (let x of instructors) {
      if (x.course === course) {
        students.push(x.name);
      }
    }
    sorted[course] = students;   
  }
  return sorted;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));