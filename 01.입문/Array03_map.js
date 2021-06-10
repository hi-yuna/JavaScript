// 배열 내장함수 2

// 1
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const square = n => n * n ;
const squared = array.map(square);
// const sqaured = array.map(n => n * n);

console.log(squared);

// 2
const items = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
];

const texts = items.map(item => item.text);
console.log(texts);


// 3
const superheroes = ['아이언맨', '캡틴 아메리카','토르', '닥터 스트레인지'];
const index = superheroes.indexOf('닥터 스트레인지');
console.log(index);


// 4
const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    }
];

const index2 = todos.indexOf(3);
console.log(index2);  // -1(없다)

const index3 = todos.findIndex(todos => todos.id === 3);
console.log(index3);  // 2

const index4 = todos.find(todos => todos.done === false);
console.log(index4); // { id: 4, text: '배열 내장함수 배우기', done: false }