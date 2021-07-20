var data = [];

function add() {
  var username = document.getElementById("username").value;
  var age = document.getElementById("age").value;
  var address = document.getElementById("address").value;

  var person = {
    username: username,
    age: age,
    address: address,
  };
  data.push(person);
  document.getElementById("result").innerHTML = "<h3>저장완료!</h3>";
  document.getElementById("username").value = "";
  document.getElementById("age").value = "";
  document.getElementById("address").value = "";
}

function show() {
  var mesg = "";
  for (var i = 0; i < data.length; i++) {
    var person = data[i];
    mesg += i + 1 + "번째 고객<br>";
    mesg += "이름 : " + person.username + "<br>";
    mesg += "나이 : " + person.age + "<br>";
    mesg += "주소 : " + person.address + "<br><hr>";
  }
  document.getElementById("result").innerHTML = mesg;
}
