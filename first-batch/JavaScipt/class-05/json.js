// JSON
let user = {
    name: "R-Tech",
    age: 5,
    address: 'Biharsharif'
};

console.log(user);
console.log(typeof user);
let myString = JSON.stringify(user)
console.log(myString);
console.log(typeof myString);


let newString = myString
console.log(newString);
console.log(typeof newString);

let myObject = JSON.parse(newString);
console.log(myObject.address);


