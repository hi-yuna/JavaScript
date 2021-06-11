function isAnimal(text) {
    const animals = ['고양이', '개', '거북이', '너구리'];
    return animals.includes(text);
}

// 화살표 함수로 표현
//const isAnimal = (text) => ['고양이', '개', '거북이', '너구리'].includes(text);

console.log(isAnimal('고양이'));  // true
console.log(isAnimal('강아지'));  // false

///////////////////////////////////////////////

function makeSound(animal) {
    const tasks = {
        개: () => {
            console.log('멍멍!');
        },
        고양이() {
            console.log('야옹!');
        },
        비둘기() {
            console.log("구구 구 구");
        }
    }
    const task = tasks[animal];
    if (!tasks[animal]) {
        console.log('...?');
        return;
    }
    task();
}

makeSound('개');
makeSound('고양이');
makeSound('비둘기');
makeSound('거북이');
