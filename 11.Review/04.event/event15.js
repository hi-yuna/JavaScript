let childWin;

const childOpen = () => {
  childWin = window.open("childWin.html", "", "width=200, height=200");
};

const childClose = () => {
  childWin.close();
};

const parentClose = () => {
  window.close();
};
