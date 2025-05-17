function sayHello() {
  console.log("Hello")
}

sayHello()

function addTwoNumber(num1, num2) {
  let result = num1 + num2
  console.log(result)
}

addTwoNumber(5, 9)
addTwoNumber()

let myName = "Rahul Kumar"

let newName = myName.replace("Rahul", "Rohit")

console.log(newName)
// console.log(myName.replace("r", "k"))


let myNumber = "455"
function backspace() {
  if (myNumber.length > 1) {
    myNumber = myNumber.slice(0, -1);
  } else {
    myNumber = "0";
  }
}


backspace()

console.log(myNumber);
