
const Slime = {
    name : '슬라임'
};

const cuteSlime = {
    ...Slime,
    attribute : 'cute'
};

const purpleSlime = {
    ...cuteSlime,
    color : 'purple'
};

const greenSlime = {
    ...purpleSlime,
    color : 'green'
};

console.log(Slime);
console.log(cuteSlime);
console.log(purpleSlime);
console.log(greenSlime);


const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];    

console.log(animals);
console.log(anotherAnimals);


const numbers = [1, 2, 3, 4, 5];
const spreadNumbers = [...numbers, 1000, ...numbers];

console.log(spreadNumbers);