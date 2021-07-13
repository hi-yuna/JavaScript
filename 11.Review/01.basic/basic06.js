// 입력한 정수값이 3의 배수면 '3의 배수' 5의 배수면 '5의 배수' 7의 배수면 '7의 배수' 출력
// 입력값이 15인 경우에는 3의 배수도 되고 5의 배수도 되기 때문에 두 값을 같이 출력

var num = prompt("정수값을 입력하세요");
document.write("입력값 : " + num + "<br>");

var mesg = "";
if (num % 3 === 0) {
  mesg += "3의 배수 <br>";
}
if (num % 5 === 0) {
  mesg += "5의 배수 <br>";
}
if (num % 7 === 0) {
  mesg += "7의 배수 <br>";
}

document.write(mesg);
