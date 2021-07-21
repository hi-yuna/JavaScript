const login = () => {
  const userid = document.getElementById("userid");
  const passwd = document.getElementById("passwd");

  if (userid.value.length == 0) {
    document.getElementById("idSpan").innerText = "아이디를 입력하세요";
    userid.focus();
    return false;
  }
  if (passwd.value.length == 0) {
    document.getElementById("pwSpan").innerText = "비밀번호를 입력하세요";
    passwd.focus();
    return false;
  }
};
