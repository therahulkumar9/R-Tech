const display = document.getElementById('text-box');

console.log(display.value);


function deleteLast() {
  display.value = display.value.slice(0, -1) || "0"
}




/*

let value = "8877"

// console.log(value);

value = value.slice(-1, 1) || "0"

console.log(value);



let arr = [4, 5, 8, 9, 2];


console.log(arr);

arr.splice(1, 3, 11, 12, 13, 14, 15)

console.log(arr);

*/