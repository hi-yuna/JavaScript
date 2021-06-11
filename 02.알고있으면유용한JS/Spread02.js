// 함수 인자에서의 spread

function subtract(x, y) {
    return x - y;
}

const result = subtract(1, 2);
console.log(result);

const numbers = [1, 2];
const result2 = subtract(...numbers);
console.log(result2);



// test
function max(...num) {
    return num.reduce((acc, current) => (current > acc ? current : acc), num[0]);
  }
  
  const result3 = max(1, 2, 3, 4, 10, 5, 6, 7);
  console.log(result3);