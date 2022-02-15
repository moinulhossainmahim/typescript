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
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "moinul",
    age: 21,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN
};
var favoriteFood;
favoriteFood = ["burger"];
console.log(person.role);
console.log(Role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (Role.ADMIN === "ADMIN") {
    console.log(Role.AUTHOR);
}
