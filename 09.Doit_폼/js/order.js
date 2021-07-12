var check = document.querySelector("#shippingInfo");

check.addEventListener("click", function () {
  if (check.checked == true) {
    // 체크되었다면
    document.querySelector("#shippingName").value =
      document.querySelector("#orderName").value;
    document.querySelector("#shippingTel").value =
      document.querySelector("#orderTel").value;
    document.querySelector("#shippingAddr").value =
      document.querySelector("#orderAddr").value;
  } else {
    // 체크되어 있지 않다면 배송 정보 필드를 지움
    document.querySelector("#shippingName").value = "";
    document.querySelector("#shippingTel").value = "";
    document.querySelector("#shippingAddr").value = "";
  }
});
