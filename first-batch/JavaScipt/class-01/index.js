// console.log(5);


// Code to log
console.log('A');
console.log("Rahul");
console.log(`Hello`);

console.log(true);
console.log(false);


var name = 'Rahul';
var name = "Rahul";
var name = `Rahul`;

var num = 3;
var num = 4.5;
var num = 299879;
var num = Number.MAX_SAFE_INTEGER;
console.log(num);

let sum;
console.log(sum);

let temperature = null;
console.log(temperature);

var bool = true;
var bool = false;
console.log(bool);



/*
JavaScript Primitive Types:
- String - "", '', ``
- Number - 2, 3.5 , 1290200, Infinity
- BigInt - 2^53 - 1
- Undefined
- Null
- Symbol
- Boolean - true, false
- Object
*/




console.log(Symbol("name"));  // Unique Symbol
console.log(Symbol("name")); // Different from the one above


// Object example
let user = {
    name: "Rahul",
    age: 20,
    address: "Nalanda"
}

// Array example
let nums = [3, 4, 6, 9, 10]


console.log(typeof name);
console.log(typeof(name));

console.log(typeof num);
console.log(typeof(num));

console.log(typeof user);
console.log(typeof nums); // object (arrays are technically objects)


// Varible

var a = 10;

let b = 20;
const c = 30;

console.log(a);

b = 40;
// c = 60;

console.log(b);
console.log(c);


let myName = "Rahul Kumar"


// console.log(`Hello my name is ${myName}`);

let introduction = `Hello my name is ${myName}`;
console.log(introduction);

console.log(4/0);
console.log(10 ** 100);


console.warn("This is a warning");
console.error("This is an error");
console.table(user)

console.group("Names");
console.log("Rahul");
console.log("Aman");
console.log("Rohit");
console.log("Ronak");
console.groupEnd()

console.log("After group");


let bigNumber = 948787089744007199254740992988777n;
console.log(typeof bigNumber);


console.log(user);

console.table(user)
