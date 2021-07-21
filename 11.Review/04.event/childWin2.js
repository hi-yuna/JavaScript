const a = () => {
  let data = document.getElementById("userid").value;

  opener.document.getElementById("userid").value = data;
  window.close();
};
