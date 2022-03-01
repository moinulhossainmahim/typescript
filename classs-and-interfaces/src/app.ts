// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

// let user1: Person;

// user1 = {
//   name: "Moinul",
//   age: 20,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

// user1.greet("Hi there! I am");

interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name: string) {}
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;
user1 = new Person("Mahim");
