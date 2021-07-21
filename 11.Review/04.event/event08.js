const pwcheck = (a) => {
  const passwd = document.getElementById("passwd").value;
  const passwd1 = document.getElementById("passwd1").value;

  let mesg = "비밀번호 일치";
  if (passwd !== passwd1) {
    mesg = "비밀번호 불일치";
  }

  document.getElementById("result").innerHTML = mesg;
};
