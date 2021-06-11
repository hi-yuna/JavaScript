// 호이스팅은 피해라! - 코드가 헷갈려지고 유지보수 어렵
// const, let은 변수 호이스팅 방지
// var은 호이스팅 가능

myFunction();

function myFunction() {
    console.log('hello world');
}