var newP = document.createElement("p");
var nextText = document.createTextNode("주문이 완료되었습니다.");
newP.appendChild(nextText);
document.body.appendChild(newP);

newP.setAttribute("class", "accent");
