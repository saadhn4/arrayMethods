//find()

/*

find method returns the value of the first element in the array that satisfies the provided testing function.
if no element satisfies the testing function, it returns undefind 

finds the first element in an array that matches a condition and returns that element

*/

let arr = [1, 2, 3, 4, -1, -5];

let check = arr.find((x) => x < 0);

console.log(check);

let number = [1, 12, 3, 2, 234, 5, 6, 7];

let result = number.find((x) => x > 50);

console.log(result);
