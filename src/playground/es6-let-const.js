//var variable

var nameVar = "Andrew";
var nameVar = "Pradeep";
console.log("nameVar", nameVar);

//let variable
let letVar = "Pradeep";
letVar = "Kumar";
console.log("letVar", letVar);

//const variable
const nameConst = "Pradeep";
console.log("nameConst", nameConst);

//block scoping

const fullName = "Pradeep kumar Lokesh";
let firstName;
//there is a if not a function
if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}
console.log(fullName);
