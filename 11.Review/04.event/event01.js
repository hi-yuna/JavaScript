const up = () => {
  let count = document.getElementById("quantity").value;
  document.getElementById("quantity").value = parseInt(count) + 1;
};

const down = () => {
  let count = document.getElementById("quantity").value;
  if (count != 1) {
    document.getElementById("quantity").value = parseInt(count) - 1;
  }
};
