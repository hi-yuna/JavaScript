function check() {
  var v1 = document.getElementById("v1").value;
  console.log(v1);
  var data = v1.split(" ");
  var word = data.length;
  console.log("단어수 : " + word);

  var letter = 0;
  for (var i = 0; i < v1.length; i++) {
    // 공백
    if (v1[i] == " ") continue;
    letter++;
    console.log(v1[i]);
  }
  console.log("글자수 : " + letter);

  var mesg = "단어수 : " + word + "<br>";
  mesg += "글자수 : " + letter + "<br>";

  document.getElementById("result").innerHTML = mesg;
}
