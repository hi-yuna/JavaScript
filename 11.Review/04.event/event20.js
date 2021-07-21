const sum = () => {
  const v1 = document.getElementById("v1").value;
  const v2 = document.getElementById("v2").value;
  const result = parseInt(v1) + parseInt(v2);

  document.getElementById("result").value = result;
};

const total = (quantity) => {
  const price = document.getElementById("price").value;
  const total = price * quantity;

  document.getElementById("total").innerText = total;
};

const totalsum = () => {
  const fruits = document.querySelectorAll(".fruits");
  let total = 0;
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].checked) {
      total += parseInt(fruits[i].value);
    }
  }

  document.getElementById("totalprice").innerText = total;
};
