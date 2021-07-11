// DOM요소를 id 선택자로 접근하는 함수 - getElementById()
document.getElementById("heading").onclick = function () {
  this.style.fontSize = "5em";
};

// DOM요소를 class 선택자로 접근하는 함수 - getElementsByClassName()
document.getElementsByClassName("accent")[0].style.textDecoration = "underline";

// DOM요소를 태그 이름으로 찾아내는 함수 - getElementsByTagName()
document.getElementsByTagName("h2")[0].style.backgroundColor = "#eee";

// DOM요소를 다양한 방법으로 찾아주는 함수 - querySelector(), querySelectorAll()
document.querySelectorAll(".accent")[1].style.backgroundColor = "yellow";
