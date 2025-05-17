let collegeName = "Nalanda College";
let userName = "Mohan Yadav";


console.log(collegeName.slice(0, 7));
console.log(userName.slice(0, 4));

let arr = [3, 9, 23, 12, 23]
console.log(arr);

let subArr = arr.slice(0, 3)

console.log(subArr);

let extraAdd = 2;
let newSubArr = arr.splice(0, 2+extraAdd)
console.log(newSubArr);

console.log(arr);


