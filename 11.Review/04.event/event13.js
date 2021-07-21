function login() {
  const userid = document.getElementById("userid");
  const passwd = document.getElementById("passwd");

  if (userid.value.length == 0) {
    alert("아이디를 입력하세요!");
    userid.focus();
    return false; // 페이지 이동 금지
  }
  if (passwd.value.length == 0) {
    alert("비밀번호를 입력하세요!");
    passwd.focus();
    return false;
  }
}
