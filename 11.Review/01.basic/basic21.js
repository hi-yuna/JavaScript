// 1부터 20까지의 정수 중 2 그리고 3의 배수가 아닌 수의 총합 출력

var sum = 0;
for (var i = 1; i <= 20; i++) {
  if (i % 2 != 0 && i % 3 != 0) {
    sum += i;
  }
}
console.log("총합 : " + sum);
