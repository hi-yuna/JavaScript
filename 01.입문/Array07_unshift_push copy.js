// 배열 내장함수 6

// unshift (첫번째)

const numbers = [10, 20 , 30 , 40];
numbers.unshift(5);
console.log(numbers);  // [ 5, 10, 20, 30, 40 ]

const value = numbers.shift();
console.log(value);  // 5
console.log(numbers);  // [ 10, 20, 30, 40 ]


// push (마지막)

const numbers2 = [10, 20, 30, 40];
numbers2.push(50);
console.log(numbers2);  // [ 10, 20, 30, 40, 50 ]

const value2 = numbers2.pop();
console.log(value2); [ 50 ]
console.log(numbers2);  // [ 10, 20, 30, 40 ]
