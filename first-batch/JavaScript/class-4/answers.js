// ✅ Git Questions (JS comment-style)

// 1. What command initializes a new Git repository in your project folder?
console.log("git init");

// 2. How to check the current status of your Git repository?
console.log("git status");

// 3. Write the command to add all changes to the staging area.
console.log("git add .");

// 4. Commit your staged changes with the message: 'First commit'.
console.log('git commit -m "First commit"');

// 5. Clone a GitHub repository using its URL.
console.log("git clone git@github.com:therahulkumar9/R-Tech.git");

// 6. Write the command to view the commit history of your project.
console.log("git log");


// 💻 JavaScript – Code-Based Questions

// 1. Change Text of a DOM Element
// Q: Select the element with ID "title" and change its text to "Welcome".
document.getElementById("title").innerText = "Welcome";

// 2. Select Element & Change Style
// Q: Select an element with the ID "box" and change its background color black to blue.
document.getElementById("box").style.backgroundColor = "blue";

// 3. Generate Random Number
// Q: Generate a random number between 1 and 10 and display it using alert().
let randomNumber = Math.floor(Math.random() * 10) + 1;
alert(randomNumber);

// 4. Even or Odd Function
// Q: Write a function to check if a number from an input field is even or odd.
function checkEvenOdd() {
  let number = parseInt(document.getElementById("inputNumber").value);
  if (number % 2 === 0) {
    alert("Even");
  } else {
    alert("Odd");
  }
}

// 5. Using setInterval()
// Q: Log "Running..." every second.
setInterval(() => {
  console.log("Running...");
}, 1000);

// 6. Using slice()
// Q: Extract the first 4 characters from "JavaScript".
let str = "JavaScript";
let sliced = str.slice(0, 4);
console.log(sliced); // Output: Java

// 7. Object Properties
// Q: Create a user object and log the name property.
let user = {
  name: "Rahul",
  age: 19
};
console.log(user.name);

// 8. Add Property to Object
// Q: Add a new key isLoggedIn: true to the user object and print it.
user.isLoggedIn = true;
console.log(user);

// 9. Change Image on Click
// Q: Change the src of an image to "new.png" when it’s clicked.
document.getElementById("myImage").addEventListener("click", function () {
  this.src = "new.png";
});

// 10. Create a Countdown Timer
// Q: Display a countdown from 5 to 0 using setInterval().
let count = 5;
let timer = setInterval(() => {
  console.log(count);
  count--;
  if (count < 0) {
    clearInterval(timer);
  }
}, 1000);

// 11. Filter Even Numbers
// Q: Filter even numbers from the array [1, 2, 3, 4, 5].
let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]

// 12. Uppercase Conversion
// Q: Convert ["apple", "banana"] to uppercase.
let fruits = ["apple", "banana"];
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // Output: ["APPLE", "BANANA"]
