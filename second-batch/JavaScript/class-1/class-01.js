// clas-01.js
"use strict";


// print

console.log("Hello");
console.log('Hello');

let roll = 5;
console.log(`${roll} Hello`);

let Patna = "Patna is a city";

console.log(Patna);



// Variables 

var x = 10;

let y = 20;
const z = 30;

x = 12;
y = 22;
// z = 32; //error

console.log(x);
console.log(y);
console.log(z);

// let score = 100;

/*
line1
line2 
line3
*/

const accountNumber = 4036287890;
let accountEmail = "therahulkumar.dev@gmail.com";
var accountPassword = "@rk.dev";
// accountCity = "Patna";  // Not recommended

let accountState = true;

console.log(typeof accountNumber);
console.log(typeof accountEmail);
console.log(typeof accountPassword);


console.log(typeof(accountState));




console.table([accountNumber, accountEmail, accountPassword, accountState])



// scope issue in var

var x1 = 34;
let y1 = 45;

if (12 > 10) {
    console.log("TRUE");
    var x1 = 39;
}

if (12 > 10) {
    console.log("TRUE");
    let y1 = 49;
    
}

console.table([x1, y1]);

let scoreOfPikku = 50;
{
    let scoreOfPikku = 34;
    {
        let scoreOfPikku = 45;
    }
    scoreOfPikku = 55;

}
console.log(scoreOfPikku);
console.log(2+2);


// alert("Warning");


// Data Types

// - `number` → 2 to the power 53
// - `bigint`
// - `string` → ""
// - `boolean` → true/false
// - `null` → standalone value
// - `undefined` → variable declared but no value assigned
// - `symbol` → unique values
// - `object` → collection of data


const userDetails = {
    name: "Mohan",
    roll: 4,
    email: "mohan@google.com",
    city: "Patna"
}

let isPass = false;
let uniqueSymbol = Symbol("&78");
console.log(uniqueSymbol);





let name = "rahul";
let age = 18;
let isLoggedIn = false;
let state; // undefined // null temprature

console.log(typeof undefined); // undefined
console.log(typeof null);      // object
console.log(typeof state);     // undefined



// conversion

let myRoll = 5;
console.log(typeof myRoll);

let myRollInString = String(myRoll);

console.log(typeof myRollInString);


let myClass = Number("10");
console.log(typeof myClass);


let emptyString = Boolean("r");
console.log(emptyString);
console.log(typeof emptyString);






console.log(2 + Number("2"));


// increment and decrement

let totalMarks = 89;

totalMarks++; // post-increment
++totalMarks; // pre-increment
console.log(totalMarks);

totalMarks--;
--totalMarks;
console.log(totalMarks);
