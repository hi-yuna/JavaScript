function biggerThanThree(numbers){
    const array = [];
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] > 3) {
            array.push(numbers[i]);
        }
    }
    return array;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers));

