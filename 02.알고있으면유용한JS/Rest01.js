const purpleSlime = {
    name : '슬라임',
    attribute : 'cute',
    color : 'purple'
};

// ...rest 대신 ...cuteSlime
const { color , ...cuteSlime } = purpleSlime;
console.log(color);  // purple
console.log(cuteSlime);  // { name: '슬라임', attribute: 'cute' }

const { attribute, ...Slime } = cuteSlime;
console.log(Slime);  // { name: '슬라임' }



// 배열에서의 rest는 맨 마지막에 있어야 된다!!
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [ one, two, ...rest ] = numbers;
console.log(one);  // 0
console.log(two);  // 1
console.log(rest);  // [ 2, 3, 4, 5, 6 ]