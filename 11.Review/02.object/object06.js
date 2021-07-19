function check() {
  var v1 = document.getElementById("v1").value;
  var data = v1.split(",");
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

  var mesg = "합계 : " + sum + "<br>";
  mesg += "평균 : " + avg.toFixed(2) + "<br>";

  document.getElementById("result").innerHTML = mesg;
}
