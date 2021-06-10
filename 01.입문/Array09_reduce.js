// 배열 내장함수 8

// reduce1 (연산할 때 사용!) -- 어렵군,,

const numbers = [1, 2, 3, 4, 5];

// 합
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);  // 15

// 평균
const average = numbers.reduce((accumulator, current, index, array) => {
    if(index === array.length - 1) {
        return (accumulator + current) / array.length;
    }
    return accumulator + current;
}, 0 );
console.log(average);  // 3


// reduce2

const alphabets = ['a', 'a', 'a', 'b', 'c', 'b', 'c', 'c', 'd', 'e'];
const counts = alphabets.reduce((acc, cur) => {
    if (acc[cur]) {
        acc[cur] += 1;
    } else {
        acc[cur] = 1;
    }
    return acc;
}, {});  // 비어있는 객체 {}

console.log(counts);   // { a: 3, b: 2, c: 3, d: 1, e: 1 }