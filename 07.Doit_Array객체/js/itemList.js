var itemList = [];

var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList); // 버튼 클릭하면 addList함수 실행

// 물품 추가하기
function addList() {
  var item = document.querySelector("#item").value;
  if (item != null) {
    itemList.push(item);
    document.querySelector("#item").value = "";
    document.querySelector("#item").focus();
  }
  showList();
}

// 추가한 목록 보여주기
function showList() {
  var list = "<ul>";
  for (var i = 0; i < itemList.length; i++) {
    list +=
      "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>";
  }
  list += "</ul>";

  document.querySelector("#itemList").innerHTML = list;

  var remove = document.querySelectorAll(".close");
  for (var i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", removeList);
  }
}

function removeList() {
  var id = this.getAttribute("id"); // this(클릭한 삭제 버튼)의 id값 가져와 id변수에 저장
  itemList.splice(id, 1); // itemList 배열에서 인덱스 값이 id인 요소 1개 삭제!
  showList();
}
