var arr = []; // 3의 배수 저장
var n = 0; //  총합에 덧셈할 3의 배수
var click = 0; // 클릭수
var sum = 0; // 총합

function three() {
  click++;
  n += 3;
  arr.push(n + " ");
  sum += n;

  var mesg = arr + " <br>";
  mesg += "클릭수 : " + click + "<br>";
  mesg += "합계 : " + sum;

  document.getElementById("result").innerHTML = mesg;
}
