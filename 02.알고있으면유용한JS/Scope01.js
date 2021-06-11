// 총 3가지 - 전역 , 함수, 블록

const value = 'hello';

// 전역
/* function myFunction() {
    const value = 'bye';
    const anotherValue = 'world';
    function functionInside() {
        console.log('functionInside: ');
        console.log(value);
        console.log(anotherValue);
    }
    functionInside();
} */

// 블록
function myFunction() {
    const value = 'bye';
    if(true) {
        const value = 'world';
        console.log('block scope: ');
        console.log(value);
    }
    console.log('fuction scope: ');
    console.log(value);
}

myFunction();
console.log('global scope: ');
console.log(value);

