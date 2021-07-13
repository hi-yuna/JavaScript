// for문을 사용하여 1부터 100까지 한줄에 10개씩 출력

var num = "";

for (var i = 1; i <= 100; i++) {
  num += i + " ";
  if (i % 10 == 0) {
    num += "\n";
  }
}

console.log(num);
