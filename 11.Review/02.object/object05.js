var arr;

function create() {
  arr = [];
}

function remove() {
  arr = [];
  show();
}

function save() {
  var v1 = document.getElementById("v1").value;
  arr.push(v1);
}

function show() {
  var mesg = "";
  for (var i = 0; i < arr.length; i++) {
    mesg += arr[i] + "<br>";
  }
  document.getElementById("result").innerHTML = mesg;
}
