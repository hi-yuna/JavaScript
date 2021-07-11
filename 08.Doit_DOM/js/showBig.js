var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");

// 1
for (var i = 0; i < smallPics.length; i++) {
  console.log(smallPics[i]);
  smallPics[i].onclick = showBig;
}

function showBig() {
  var newBig = this.src;
  bigPic.setAttribute("src", newBig);
}

// 2
/* for (var i = 0; i < smallPics.length; i++) {
  console.log(smallPics[i]);
  smallPics[i].onclick = function (event) {
    bigPic.src = this.src;
  };
} */
