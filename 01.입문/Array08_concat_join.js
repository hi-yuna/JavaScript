// 배열 내장함수 7

// concat 

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated = arr1.concat(arr2);
console.log(concated);

const concated2 = [...arr1, ...arr2];
console.log(concated2);


// join

const array = [1, 2, 3, 4, 5];
console.log(array.join());  // 1,2,3,4,5
console.log(array.join(' '));  // 1 2 3 4 5
console.log(array.join(', '));  // 1, 2, 3, 4, 5
