var num = [10, 4, 20, 4, 32, 9, 1, 2];

function asc() {
  var ascdata = num.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("result").innerHTML = ascdata;
}

function desc() {
  var descdata = num.sort(function (a, b) {
    return b - a;
  });
  document.getElementById("result").innerHTML = descdata;
}
