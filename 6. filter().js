//filter()

//filters elements based on conditions , returning a new array with element that satisfy the condition

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let check = arr.filter((x) => x > 5);

console.log(check);

let number = [1, 2, 3, 4, 5, 6];
let result = number.filter((x) => x > 3);
console.log(result);

let theArr = [1, 3, 53, 2, 324, 234, 2];

let theResult = theArr.filter((x) => x < 5);

console.log(theResult);
