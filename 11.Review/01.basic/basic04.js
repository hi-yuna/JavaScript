// 정수값을 입력받고, 입력값이 짝수인지 홀수인지 출력

var num = prompt("정수값을 입력하세요");
document.write("입력값 : " + num + "<br>");

if (num % 2 === 0) {
  document.write("짝수입니다");
} else {
  document.write("홀수입니다");
}
