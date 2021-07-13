// 3개의 정수 값을 입력받아서 가장 큰 값을 출력

var num1 = prompt("첫번째 정수값을 입력하세요");
var num2 = prompt("두번째 정수값을 입력하세요");
var num3 = prompt("세번째 정수값을 입력하세요");

var n1 = parseInt(num1);
var n2 = parseInt(num2);
var n3 = parseInt(num3);

var temp = n1 > n2 ? n1 : n2;
var max = temp > n3 ? temp : n3;

document.write("첫번째 입력값 : " + n1 + "<br>");
document.write("두번째 입력값 : " + n2 + "<br>");
document.write("세번째 입력값 : " + n3 + "<br>");
document.write("가장 큰 값 : " + max);
