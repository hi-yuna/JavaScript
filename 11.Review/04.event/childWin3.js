const post = (postNum, addr) => {
  opener.document.getElementById("post").value = postNum;
  opener.document.getElementById("address").value = addr;
  window.close();
};
