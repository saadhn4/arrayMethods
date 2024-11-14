//every()

//higher order

//returns true or false if every element matches the specified condition

let arr = [1, 2, 3, 4, 5];

let check = arr.every((x) => x >= 1);

console.log(check); //true

let arr2 = [6, 7, 8, 9, 10];

let check2 = arr2.every((x) => x <= 10);

console.log(check2); //true

let arr3 = ["hi", 1, 2, 3, 4, 5];

let result = arr3.every((x) => x > 5);
console.log(result); //false
