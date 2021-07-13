// 3개의 주사위를 던졌을 때, 눈의 곱이 3의 배수가 되는 모든 경우의 수를 출력

for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    for (var z = 1; z <= 6; z++) {
      var sum = i * j * z;
      if (sum % 3 == 0) {
        console.log(i + " * " + j + " * " + z + " = " + sum);
      }
    }
  }
}
