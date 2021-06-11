true || false // true
false || true // true

// 앞에가 false면 연산결과는 뒤에꺼 
console.log(false || 'hello');  // hello
console.log(null || '널이다~');  // 널이다~
console.log(undefined || 'defined 되지 않았다!');  // defined 되지 않았다!
console.log('' || '아무것도 없다!');   // 아무것도 없다!
console.log(0 || '나는 0이야!');  // 나는 0이야!


// 앞에가 true면 연산결과는 앞에꺼
console.log(1 || '음?');  // 1
console.log(true || '여기 안봐요');  // true
console.log('와아' || '여기 안봐요');  // 와아
console.log([] || '여기 안봐요');  // []