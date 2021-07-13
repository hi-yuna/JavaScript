// 입력값을 받아 1부터 입력 받은 수까지의 합을 while문을 사용하여 출력

var num = prompt("정수값을 입력하세요");
var i = 0;
var sum = 0;

while (i <= num) {
  sum += i;
  i++;
}
document.write("입력한 정수값 : " + num + "<br>");
document.write("총합: " + sum);
