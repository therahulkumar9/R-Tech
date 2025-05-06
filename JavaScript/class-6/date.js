

let todayDate = new Date();
console.log(todayDate);

let birth = new Date('2005-10-21');
console.log(birth);

console.log("Difference in millisecond", todayDate - birth);


console.log(todayDate.getFullYear())
console.log(todayDate.getDate())
console.log(todayDate.getHours());
console.log(todayDate.getMonth() + 1);


let today = new Date();
console.log(today);

console.log(`TechYukti ${today.getFullYear()}`);

let date = new Date('2025-10-21');
console.log(date.getFullYear());  
console.log(date.getMonth() + 1);  
console.log(date.getDate());  
console.log(date.getDay());  // tuesday => 2


// Get total days in February 2025
let daysInFeb = new Date(2025, 2, 0).getDate();
console.log(daysInFeb);


let myDate = new Date();
console.log(myDate);
myDate.setFullYear(2003);
console.log(myDate.getDay());


console.log(myDate.toLocaleDateString());






let dob = new Date('2005-10-21');
let dateNow = new Date();

let diffInMs = dateNow - dob;  // difference in milliseconds
let days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));  // convert to days

console.log(`You are ${days} days old`);
