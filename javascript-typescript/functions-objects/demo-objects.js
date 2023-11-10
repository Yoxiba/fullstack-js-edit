const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// Access properties from object person
console.log(person.firstName);
// If a property is undefined, what should I do?
console.log(person.age);
// How to invoke a function inside object?
console.log(person.fullName());
// How to interact over properties?
Object.keys(persno).forEach((key) => {
  console.log(key);
  console.log(person[key]);
});
// How to interact over values?

Object.values(person).forEach((value) => {
  console.log(value);
});
