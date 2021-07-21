const samechk = (a) => {
  const address1 = document.getElementById("address1").value;
  const phone1 = document.getElementById("phone1").value;

  if (a.checked) {
    document.getElementById("address2").value = address1;
    document.getElementById("phone2").value = phone1;
  } else {
    document.getElementById("address2").value = "";
    document.getElementById("phone2").value = "";
  }
};
