//concat()

//it combines 2 or more arrays together

let arr1 = [1, 2];
let arr2 = [3, 4];

let result = arr1.concat(arr2);
let resultAgain = arr2.concat(arr1);

console.log(result); //[1,2,3,4]
console.log(resultAgain); //[3,4,1,2]

let arr3 = [5, 6];
let arr4 = [7, 8];
let arr5 = [9, 10];

let combinedArray = arr3.concat(arr4, arr5);

console.log(combinedArray);
