//3. copyWithin()

let array = [1, 2, 3, 4, 5, 6];

let arr = array.copyWithin(2);

console.log(arr);

let sameArray = [1, 2, 3, 4, 5, 6];
let result = sameArray.copyWithin(3, 0);
console.log(result);

let anotherArray = [10, 20, 30, 40, 50];
console.log(anotherArray.copyWithin(2));
console.log(anotherArray.copyWithin(1, 3));
