const chk = (a) => {
  const lang = document.querySelectorAll(".lang");
  for (let i = 0; i < lang.length; i++) {
    lang[i].checked = a.checked;
  }
};
