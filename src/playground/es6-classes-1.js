// class Person {
//   constructor(name = "Anonymous") {
//     //setting up default name
//     //console.log("Default");
//     //this.name = name || "test"; // here test acts as a default value
//     this.name = name;
//   }

//   getGretting() {
//     // return "Hi this is" + this.name;
//     return `Ho this is ${this.name}`;
//   }
// }

// const me = new Person("Pradeep Kumar"); //instance 1
// console.log(me.getGretting());

// const other = new Person(); //instance 2
// console.log(other);

//challenge11

// class Person {
//   constructor(name = "Anonymous", age = 0) {
//     this.name = name;
//     this.age = age;
//   }
//   getGretting() {
//     return `${this.name}`;
//   }
//   getDescription() {
//     return `${this.name} is a ${this.age} year old man`;
//   }
// }

// const me = new Person("Pradeep", 25);
// console.log(me.getDescription());

// const other = new Person();
// console.log(other.getDescription());

// class Person {
//   constructor(name = "Anonymous", age = 0) {
//     this.name = name;
//     this.age = age;
//   }
//   getGretting() {
//     return `${this.name}`;
//   }
//   getDescription() {
//     return `${this.name} is a ${this.age} year old man`;
//   }
// }

// class Student extends Person {
//   constructor(name, age, major) {
//     super(name, age);
//     this.major = major;
//   }
//   hasMajor() {
//     return !!this.major;
//   }
//   getDescription() {
//     //parent function is being over ridden
//     let description = super.getDescription();
//     if (this.hasMajor()) {
//       description = `${description} and has a major ${this.major}`;
//     }
//     return description;
//     // return `Testing`;
//   }
// }

// const me = new Student("Pradeep", 25, "Computer Science");
// console.log(me.getDescription());

// const other = new Student();
// console.log(other.getDescription());

//challenge 12
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `I am,${this.name}`;
  }
  getDescription() {
    return `${this.name} is a ${this.age} year old man`;
  }
}

class Traveller extends Person {
  constructor(name, age, location) {
    super(name, age, location);
    this.location = location;
  }
  getGretting() {
    let description = super.getGretting();

    if (this.location) {
      description += `. I am visiting from ${this.location}`;
    }

    // description = description + `${this.location}`;
    return description;
  }
}

// class Student extends Person {
//   constructor(name, age, major) {
//     super(name, age);
//     this.major = major;
//   }
//   hasMajor() {
//     return !!this.major;
//   }
//   getDescription() {
//     //parent function is being over ridden
//     let description = super.getDescription();
//     if (this.hasMajor()) {
//       description = `${description} and has a major ${this.major}`;
//     }
//     return description;
//     // return `Testing`;
//   }
// }

const me = new Traveller("Pradeep", 25, "Chicago");
console.log(me.getGretting());

const other = new Traveller();
console.log(other.getGretting());
