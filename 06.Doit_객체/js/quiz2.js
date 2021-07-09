var r = prompt("원의 반지름은? (cm)");
var circle = new Circle(r);
document.write(
  "<p>반지름이 " +
    r +
    "cm일 때<br> 원의 둘레 : 약" +
    circle.circumference() +
    "cm<br> 원의 넓이 : 약" +
    circle.area() +
    "cm<sup>2</sup><p>"
);

function Circle(radius) {
  (this.radius = radius),
    (this.circumference = () => {
      return Math.floor(this.radius * 2 * Math.PI);
    });
  this.area = () => {
    return Math.floor(Math.pow(this.radius, 2) * Math.PI);
  };
}
