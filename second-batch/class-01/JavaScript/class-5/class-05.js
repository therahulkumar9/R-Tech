// console.log("R-Tech")

// i = 0
// i = 1
// ..... i = 10
// i = 11

const tableOf = 2
let numberOfIteration = 10

for (let i = 1; i <= numberOfIteration; i++) {
  //   console.log("R-Tech")
  console.log(`${tableOf} * ${i} = ${tableOf * i}`)
}

let count = 1
while (count < 5) {
  console.log(count) // 1 2 3 4
  // count++;
  count = count + 1
  // coun+=2
  // count = count + 2
}

let inputValue
while (inputValue == 1) {
  // userInput = 1
  // userInput = 0
}

let imageCreatedByUser = 0
do {
  // one time
  console.log("Create image")
  imageCreatedByUser++
} while (imageCreatedByUser < 2)

if (imageCreatedByUser >= 2) {
  console.log("Take subscription for extra image generation")
}

const todos = ["task 1", "task 2", "task-3"]

for (const element of todos) {
  console.log(element)
}

todos.push("task 4")
console.log(todos)

console.log(todos.length)

count = 14
if (count < 10) {
  console.log("Count is less than 10")
} else {
  console.log("Count is not less than 10")
}

let i = 13

if (i == 11) {
  console.log("11")
} else if (i == 12) {
  console.log("12")
} else if (i == 14) {
  console.log("14")
} else {
  console.log("You value is something else")
}

const day = 3; 
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}


// Example: Check if a number is positive or negative
const num = 1;
const result = num > 0 ? "Positive":  num == 0 ? "Zero" : "Negative";
console.log(result);