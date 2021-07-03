// 함수를 정의함과 동시에 실행하는 함수

var result1 = (function () {
  return 10 + 20;
})();
console.log(result1);

var result2 = (function (a, b) {
  return a + b;
})(10, 20);
console.log(result2);
