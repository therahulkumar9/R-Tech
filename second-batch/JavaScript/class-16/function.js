// console.log("Function");

let a = 10
let b = 20

function sumOfTwoNum() {
  console.log(a + b)
}

sumOfTwoNum() // Function calling

// Function with single parameter
function greetings(username = "Sir") {
  console.log(`Hello, ${username}`)
}

const username = "Rahul"
greetings(username) // argument
greetings("Aman")
greetings()

// Function with more than more parameter
function greet(name, city) {
  console.log(`Hello ${name} from ${city}`)
}

greet("Rahul", "Nalanda")

function sum(a, b, c = 0) {
  return a + b + c
}

console.log(sum(5, 18, 4))
console.log(sum(15, 18, 7))
console.log(sum(15, 18))

function sayHello() {
  console.log("Hello")
  return "Hello, returned by funtion sayHello"
}

console.log(sayHello())

function multiply(a, b) {
  return a * b
}

console.log(multiply(3, 8))

let result = multiply(5, 2)
console.log(result)

const myFunction = function (a, b) {
  return a * b
}

console.log(myFunction(4, 9))
console.log(myFunction)

// Arrow funtion

const arrowFunction = (num1, num2) => {
  console.log("First value :", num1, "Second value :", num2)
}

arrowFunction(4, 6)

// const hello = (name) => console.log(`Hello, ${name}`);
// const hello = name => console.log(`Hello, ${name}`);

// const add = (a, b) => {
//   return a + b
// }

const add = (a, b) => a + b;

console.log(add(4, 5));

// IIFE
(function Bye() {
    console.log("Bye");
    console.log("I am self-invoked!");
})()

// constructor syntax
const addition = new Function('a', 'b', 'return a + b');
console.log(addition(4, 9));



// Higher-Order Functions

function higherOrderFunction(a, callback) {
    console.log("Value of variable :", a);
    callback();
}


higherOrderFunction(3, () => {
    console.log("I am a callback function.");
})


function newFunction() {
    
    function helloSir() {
        return "Hello, Sir";
    }

    return helloSir;
}


// console.log(newFunction());

const returnFunction = newFunction()
console.log(returnFunction());

