// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "moinul",
//   age: 21,
//   hobbies: ["sports", "cooking"],
//   role: [2, "author"],
// };

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = "READ_ONLY",
  AUTHOR = "AUTHOR",
}

const person = {
  name: "moinul",
  age: 21,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
};

let favoriteFood: string[];
favoriteFood = ["burger"];

console.log(person.role);
console.log(Role);

for (let hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (Role.ADMIN === "ADMIN") {
  console.log(Role.AUTHOR);
}
