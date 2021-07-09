var now = new Date();
var firstDay = new Date("2019-06-20");
console.log(now);
console.log(firstDay);
var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst;
var passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24)); // 밀리초를 날짜 수로 변환한 후 반올림

// 사귄날짜 표시
document.querySelector("#accent").innerText = passedDay + 1 + "일";

// 기념일 계산
calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(days) {
  var future = toFirst + days * (1000 * 60 * 60 * 24);
  var someday = new Date(future);
  var year = someday.getFullYear();
  var month = someday.getMonth() + 1;
  var day = someday.getDate() - 1;
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  document.querySelector("#date" + days).innerText =
    year + "년 " + month + "월 " + day + "일";
}
