let arr = [];

// e는 event
// 입력된 키 정보값 13 => enter
const enter = (e) => {
  if (e.keyCode == 13) {
    save();
  }
};

const save = () => {
  const v1 = document.getElementById("v1").value;
  arr.push(v1);

  show();
};

const show = () => {
  let mesg = "";
  for (let i = 0; i < arr.length; i++) {
    mesg += arr[i] + "<br>";
  }

  document.getElementById("result").innerHTML = mesg;
  document.getElementById("v1").value = "";
  document.getElementById("v1").focus();
};
