// String()

const { use } = require("react");

let arr = [3, 4, 5];
let myArr = new Array(5, 8, 9);
console.log(arr);
console.log(myArr);


let num1 = 45;
let myString = String(num1)
console.log(typeof myString);

let conditon1 = true;
console.log(true);

console.log(String(conditon1));
console.log(typeof String(conditon1));


console.log(String([3, 4, 9, 12]));


var number = 393930998662;
console.log(String(number).length);



// Number()

var newString = "56"
console.log(Number(newString) + 44);


// console.log(parseInt("67piece"));
// console.log(parseFloat("67.54piece44"));

console.log(Number(null));
console.log(typeof NaN);

console.log(Number(false));
console.log(Number(true));
console.log(Number(undefined));


// Boolean

console.log(Boolean(" "));

let userEmail = "therahulkumar.dev@gmail.com"

if(Boolean(userEmail)) {
    console.log("Send message");
} else {
    console.log("Don't send any message");
}
console.log(Boolean(56));



let score = 100;
let convertedString = score.toString()
console.log(typeof convertedString);








