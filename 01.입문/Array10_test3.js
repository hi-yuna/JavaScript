// test1

function countBiggerThanTen(numbers){
    return numbers.reduce((accumulator, current) => {
        if(current > 10){
            return accumulator+1;
        } else {
            return accumulator;
        }
    }, 0);
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count);
