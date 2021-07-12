var userId = document.querySelector("#user-id");
var userPw1 = document.querySelector("#user-pw1");
var userPw2 = document.querySelector("#user-pw2");

userId.onchange = checkId;
userPw1.onchange = checkPw;
userPw2.onchange = comparePw;

function checkId() {
  if (userId.value.length < 4 || userId.value.length > 15) {
    alert("4 ~ 15자리의 영문과 숫자를 사용하세요!");
    userId.select(); // 다시 입력할 수 있도록 userId 선택
  }
}

function checkPw() {
  if (userPw1.value.length < 8) {
    alert("비밀번호는 8자리 이상이어야 합니다!");
    userPw1.value = ""; // 비밀번호 필드 지움
    userPw1.focus(); // 다시 입력할 수 있게 포커싱
  }
}

function comparePw() {
  if (userPw1 != userPw2) {
    alert("비밀번호가 다릅니다. 다시 입력하세요!");
    userPw2.value = ""; // 비밀번호 확인 필드 지움
    userPw2.focus(); // 다시 입력할 수 있게 포커싱
  }
}
