// for문을 사용하여 1부터 100까지 총합과 3의 배수 총합 출력

var total = 0;
var sum = 0;

for (var i = 1; i <= 100; i++) {
  total += i;
  if (i % 3 == 0) {
    sum += i;
  }
}
console.log("전체 총합 :" + total);
console.log("3의 배수 총합 :" + sum);
