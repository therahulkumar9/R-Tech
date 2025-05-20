let numbers = [1, 2, 3];
let sum = 0;
console.log(sum);

numbers.forEach((element, index, array) => {

    console.log(`At index ${index} element = ${element} in ${array} `);
    // sum += element
    sum = sum + element
})

console.log(sum);



let nums = [1, 2, 3];


let squared = nums.map((x) => x ** 2);
console.log(squared);



let nums2 = [10, 20, 30, 40, 35, 50];
let big = nums2.filter(n => n > 25);
console.log(big); 

// reduce

let myArr = [3, 4, 5, 2, 9, 6];

let result = myArr.reduce((acc, curr) => acc + curr, 0)

console.log(result);


// find


let my2Arr = [3, 4, 5, 2, 9, 6];

let newResult = my2Arr.find((x) => x > 5)

console.log(newResult);


// findIndex


let index = my2Arr.findIndex((x) => x > 5)

console.log(index);


// at
let myValue = my2Arr.at(3);
console.log(myValue);

// indexOf

console.log(myArr.indexOf(6));


// concat
let arr2 = [5, 9, 10, 12];
let arr3 = ['I', 'love', 'JavaScript'];

let arr4 = arr2.concat(arr3, 'hello', true, 8)




console.log(arr4);

// reverse

let reverseArr = arr4.reverse()
console.log(reverseArr);

// flat

let nestedArr = [3, [5, 4], 8, [1, 0]];
let flatArr = nestedArr.flat()
console.log(flatArr);
