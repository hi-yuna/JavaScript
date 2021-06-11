true && true // true
true && false // false

const dog = {
    name : '멍멍이'
};

function getName(animal) {
    return animal && animal.name;
}

const name = getName(dog);
console.log(name);

// 앞에가 true면 연산결과는 뒤에꺼 
console.log(true && 'hello');  // hello
console.log('hello' && 'bye');  // bye
console.log(1 && 'hello');  // hello
console.log(1 && 1);  // 1

// 앞에가 false면 연산결과는 앞에꺼
console.log(false && 'hello');  // false
console.log(null && 'hello');  // null
console.log(undefined && 'hello');  // undefined
console.log('' && 'hello');   // 공백
console.log(0 && 'hello');  // 0

