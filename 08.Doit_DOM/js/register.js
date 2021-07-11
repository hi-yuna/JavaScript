function newRegister() {
  var newP = document.createElement("p"); // p 요소 새로 만들기
  var userName = document.querySelector("#userName");
  var newText = document.createTextNode(userName.value); // 새 텍스트 노드 만들기
  newP.appendChild(newText);

  // 삭제버튼 만들기
  var delBtn = document.createElement("span");
  var delText = document.createTextNode("X");
  delBtn.setAttribute("class", "del");
  delBtn.append(delText);
  newP.appendChild(delBtn);

  var nameList = document.querySelector("#nameList");
  // nameList.appendChild(newP);

  // p요소를 #nameList 맨 앞에 추가하기
  nameList.insertBefore(newP, nameList.childNodes[0]);
  userName.value = "";

  // 삭제버튼 기능
  var removeBtn = document.querySelectorAll(".del");
  for (var i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", function () {
      if (this.parentNode.parentNode) {
        this.parentNode.parentNode.removeChild(this.parentNode);
      }
    });
  }
}
