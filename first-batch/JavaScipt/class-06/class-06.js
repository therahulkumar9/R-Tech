// if else
var age = 18;

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("You are not eligible");
}


// if else if

var age = 18;

if(age <= 10){
    console.log("Child");
} else if(age < 18){
    console.log("Teenager");
} else {
    console.log("Adult");
}


// Ternary Operator


var marks = 51;
var result;

// console.log(marks);

// if(marks >= 50) {
//  result = "Pass"
// } else {
//     result = "Fail"
// }

// result =  condtion?true:false 
result = marks >=50 ? "Pass" : "Fail"
console.log(result);

// nested if

var isLoggedIn = true;
resultPrepared = true;

if (isLoggedIn){
    if (resultPrepared){
        console.log("Show result");
    } else {
        console.log("Don't show result");
    }
} else {
    console.log("Please login");
}




