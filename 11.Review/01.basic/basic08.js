// 2개의 정수값을 입력 받고, 서로 비교하여 최대값을 출력

var num1 = prompt("첫번째 정수값을 입력하세요");
var num2 = prompt("두번째 정수값을 입력하세요");

var max = parseInt(num1) > parseInt(num2) ? num1 : num2;

document.write("첫번째 입력값 : " + num1 + "<br>");
document.write("두번째 입력값 : " + num2 + "<br>");
document.write("최댓값 : " + max);
