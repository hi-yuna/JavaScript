// 1. querySelectorAll
/*
function result() {
  const hobby = document.querySelectorAll("input:checked");
  let mesg = "";
  for (let i = 0; i < hobby.length; i++) {
    mesg += hobby[i].value + "\t";
  }

  document.getElementById("result").innerHTML = mesg;
}
*/

// 2.class이름을 'hobby'로 부여
/*
const result = () => {
  const hobby = document.querySelectorAll(".hobby:checked");
  let mesg = "";
  for (let i = 0; i < hobby.length; i++) {
    mesg += hobby[i].value + "\t";
  }

  document.getElementById("result").innerHTML = mesg;
};
*/

// 3. getElementByNames
const result = () => {
  const hobby = document.getElementsByClassName("hobby");
  let mesg = "";
  for (let i = 0; i < hobby.length; i++) {
    if (hobby[i].checked) {
      mesg += hobby[i].value + "\t";
    }
  }

  document.getElementById("result").innerHTML = mesg;
};
