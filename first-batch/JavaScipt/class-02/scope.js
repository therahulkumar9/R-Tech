// Global Scope
let roll = 20; 
const myId = 214;


if(true){
    console.log(roll);
}

for (let i = 0; i < 3; i++) {
    console.log(roll);
}

function pluseTwo(){
    console.log(roll + 2);
}

let myArray = [12, roll, 34];
console.log(myArray);


roll = roll + 10;
let newString = `My roll is ${roll}`
console.log(newString);

// Function Scope

function bye(){
    console.log("Bye");
    let score = 95;
    var newScore = 101;
    const constantValue = 30;
    console.log("Value of score:", score);
    console.log("Value of new score:", newScore);
    console.log(constantValue);  
}

bye();
// console.log(score);
// console.log(newScore);
// console.log(constantValue);


if(true){
    let userId = 34;
    var otherId = 49;
}

// console.log(userId); // error
console.log(otherId);





// let, const
// scope - block - {}, function


// var - function


{
    let varVarible = 54;
}

let varVarible = 9;
console.log(varVarible);