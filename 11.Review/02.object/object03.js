function info() {
  var text = document.getElementById("str").value;
  console.log(text);

  var str1 = text.length;
  var str2 = "";
  for (var i = 0; i < str1; i++) {
    str2 += text[i] + ",";
  }
  var str3 = text.toUpperCase();
  var str4 = text.toLowerCase();
  var str5 = "";
  for (var i = str1 - 1; i >= 0; i--) {
    str5 += text[i];
  }
  var str6 = text.charAt(0);
  var str7 = text.charAt(2);
  var str8 = text.substr(0, 5);

  document.getElementById("str1").innerText = str1;
  document.getElementById("str2").innerText = str2;
  document.getElementById("str3").innerText = str3;
  document.getElementById("str4").innerText = str4;
  document.getElementById("str5").innerText = str5;
  document.getElementById("str6").innerText = str6;
  document.getElementById("str7").innerText = str7;
  document.getElementById("str8").innerText = str8;
}
