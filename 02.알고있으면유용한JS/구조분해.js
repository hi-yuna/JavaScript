const object = { a : 1};

const { a, b = 2 } = object;
console.log(a);
console.log(b);


// 객체 비구조 할당
// 이름 바꾸기  { 원래이름 : 새로바꾸고싶은 이름 }
const animal = {
    name : '멍멍이',
    type : '개'
};

const { name : nickname } = animal;
console.log(nickname);


// 배열 비구조 할당
const array = [ 1, 2 ];

const [ one, two ] = array;

console.log(one);
console.log(two);


const array2 = [ 1 ];

const [ one2, two2 = 3 ] = array2;

console.log(one2);
console.log(two2);


// 객체의 깊숙한 곳에 있는 값 찾기!

const deepObject = {
    state : {
        information : {
            name : 'yuna',
            languages : ['korean', 'english', 'chinese']
        }
    },
    value : 5
};

// 1
/* const { name , languages } = deepObject.state.information;
const { value } = deepObject;

const extracted = {
    name,
    languages,
    value
};
console.log(extracted); */ /* {
                                name: 'yuna',
                                languages: [ 'korean', 'english', 'chinese' ],
                                value: 5
                             } */

// 2
const {
    state : {
        information : {
            name, languages : [firstLang, secondLang]
        }
    },
    value
} = deepObject;

const extracted = {
    name,
    firstLang,
    secondLang,
    value
};
console.log(extracted);  // { name: 'yuna', firstLang: 'korean', secondLang: 'english', value: 5 }