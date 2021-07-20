function check() {
  var v1 = document.getElementById("v1").value;
  var data = v1.split(",");
  // 오름차순
  var sort = data.sort(function (a, b) {
    return a - b;
  });

  var sum = 0;
  for (var i = 0; i < sort.length; i++) {
    sum += parseInt(sort[i]);
  }
  console.log("합계 : " + sum);

  var avg = sum / sort.length;
  console.log("평균(소수점 2자리) : " + avg.toFixed(2));

  var median = 0;
  if (data.length % 2 == 0) {
    var n = sort.length;
    var f = parseInt(sort[n / 2 - 1]);
    var l = parseInt(sort[n / 2]);
    var i = (f + l) / 2;
    median = i;
  } else {
    var i = (sort.length + 1) / 2;
    median = parseInt(sort[i - 1]);
  }

  var mesg = "합계 : " + sum + "<br>";
  mesg += "평균 : " + avg.toFixed(2) + "<br>";
  mesg += "중앙값 : " + median + "<br>";

  document.getElementById("result").innerHTML = mesg;
}
