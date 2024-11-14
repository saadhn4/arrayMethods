//fill ()

//the fill method changes all the elements in the array to a static value, from a start index (default 0) to an end index (default.array.length)

let arr = [1, 2, 3, 4, 5];
//start    0 1 2 3 4
//end      1 2 3 4 5

let result = arr.fill("Hello", 0); //this does not have an end value so all are changed into hello

console.log(result);

let sameArray = [1, 2, 3, 4, 5];

let result2 = sameArray.fill("Hello", 0, 1);

console.log(result2);

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11];

let checks = arr3.fill(11, 10, 11);

console.log(checks);

let checks2 = arr3.fill(12, 11, 12);
console.log(checks2);
