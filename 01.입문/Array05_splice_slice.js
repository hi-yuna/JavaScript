// 배열 내장함수 4


// splice (변함)
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);

const splice = numbers.splice(index,2);
console.log(splice);  // [ 30, 40 ]
console.log(numbers); // [ 10, 20 ]


// slice (변하지않음)
const numbers2 = [10, 20, 30, 40];

const sliced = numbers2.slice(0,2);
console.log(sliced);  // [ 10, 20 ]
console.log(numbers2);  // [ 10, 20 , 30 , 40]