// 1부터 100까지 정수에서 3의 배수의 갯수를 출력

var count = 0;

for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    count++;
  }
}

console.log("3의 배수 갯수 : " + count);
