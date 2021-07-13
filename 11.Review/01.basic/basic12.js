// for문을 사용하여 1부터 100까지 짝수 총합 출력

var sum = 0;

for (var i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}

console.log("짝수 총합 : " + sum);
