// 점수 입력 받고, 등급을 출력
// 90 ~ 100 : 1등급
// 80 ~ 89 : 2등급
// 70 ~ 79 : 3등급
// 이하 : 4등급

var score = prompt("점수를 입력하세요");
var mesg = "";

if (90 <= score) {
  mesg = "1등급";
} else if (80 <= score && score <= 89) {
  mesg = "2등급";
} else if (70 <= score && score <= 79) {
  mesg = "3등급";
} else {
  mesg = "4등급";
}

document.write(mesg + " 입니다");
