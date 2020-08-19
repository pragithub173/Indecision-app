//argument objects no longer bound with arrow functions

const add = (a, b) => a + b;
console.log(add(5, 2));

//this keyword no longer bound

// const user = {
//   name: "Andrew",
//   cities: ["Chicago", "Dublin", "Newyork"],
//   printPlacesLived: function () {
//     this.cities.forEach((city) => {
//       console.log(this.name + "has lived in " + city);
//     });
//   },
// };

// user.printPlacesLived();

// const user = {
//   name: "Andrew",
//   cities: ["Chicago", "Dublin", "Newyork"],
//   printPlacesLived() {
//     return this.cities.map((city) => this.name + "has lived in " + city);
//   },
// };

// console.log(user.printPlacesLived());

//challenge 6

const multiplier = {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  singleNumber: 3,
  multiply() {
    return this.numbers.map((num) => this.singleNumber * num);
  },
};

console.log(multiplier.multiply());
