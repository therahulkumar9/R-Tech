const person = {
  name: "Rahul",
  age: 20,
  isStudent: true
};

// console.log(person);
person.rollno = 4;
// console.log(person);
// console.log(typeof person);

// JSON to string
// Convert to string
const jsonString = JSON.stringify(person);

console.log(jsonString);
// Output: '{"name":"Rahul","age":20,"isStudent":true}'
// console.log(typeof jsonString);


// String to JSON
const myJsonString = '{"name":"Rahul","age":20,"isStudent":true, "rollno": 4}';
// console.log(myJsonString);

// Convert to JSON object
const personObject = JSON.parse(myJsonString);
// console.log(personObject);

console.log(personObject.name); // Output: Rahul
console.log(personObject.age);  // Output: 20
console.log(personObject);  // Output: 4
