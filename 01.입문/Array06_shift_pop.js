// 배열 내장함수 5

// shift (첫번째)

const numbers = [10, 20 , 30 , 40];

const value = numbers.shift(); // 10 out!
numbers.shift(); // 20 out!
numbers.shift(); // 30 out!
console.log(value);  // 10
console.log(numbers);  // [ 40 ]


// pop (마지막)

const numbers2 = [10, 20, 30, 40];
const value2 = numbers2.pop();
numbers2.pop();
numbers2.pop();
numbers2.pop();
numbers2.pop();
console.log(value2);  // 40
console.log(numbers2);  // [] 비었다..