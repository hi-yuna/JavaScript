var toyRobot = {
  productId: "123-12",
  name: "Robot",
  price: "25,000",
  madeIn: "Korea",
  quantity: 10,
  showStock: function () {
    document.querySelector("#display").innerHTML =
      this.name + " 제품은 " + this.quantity + "개 남았습니다!";
  },
};

// toyRobot 객체의 showStock() 메서드 실행
toyRobot.showStock();
