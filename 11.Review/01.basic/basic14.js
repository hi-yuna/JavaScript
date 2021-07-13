// for문을 사용하여 1부터 100까지 총합이 40보다 크면 계산 중지하고 현재값과 현재까지 구한 총합을 출력

var sum = 0;

for (var i = 1; i <= 100; i++) {
  sum += i;
  if (sum > 40) {
    var current = i;
    break;
  }
}
console.log("현재값 : " + current);
console.log("현재까지 총합 : " + sum);
