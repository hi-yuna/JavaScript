//1. 변수 inx가 10 보다 크고 20 보다 작을 때의 true인 조건식
var inx = 15;
if (10 < inx && inx < 20) {
  console.log("true");
}

//2. 변수 ch가 'x' 또는 'X'일 때 true인 조건식
var ch = "x";
if (ch == "x" || ch == "X") {
  console.log("true");
}

//3.  변수 year가 400으로 나눠 떨어지거나, 또는 4로 나눠 떨어지고 100으로 나눠 떨어지지 않을 때 true인 조건식
var year = 400;
if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
  console.log("true");
}

//4. 변수 powerOn가 false일 때 true인 조건식
var powerOn = false;
if (!powerOn) {
  console.log("true");
}
