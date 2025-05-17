console.log(Math.floor(Math.random()))
console.log(Math.floor(5.5))
console.log(Math.floor(5.6))
console.log(Math.floor(5.4))

console.log(Math.floor(9.7))

let result = ""
if (Math.random() > 0.5) {
  result = "Head"
} else {
  result = "Tail"
}

let result2 = Math.random() > 0.5 ? "Head" : "Tail"
console.log(result)
console.log(result2)

setTimeout(() => {
  console.log("This shows after 2 seconds")
}, 2000)

// const interval = setInterval(() => console.log("Repeating"), 1000)




let number1 = '3';
let number2 = 6;



console.log(number1 + number2);
console.log(number2 + parseInt(number1));

