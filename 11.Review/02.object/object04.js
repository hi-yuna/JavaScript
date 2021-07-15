function sum() {
  var nums = document.getElementById("v1").value;
  var arr = nums.split("/");
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }

  document.getElementById("result").innerText = sum;
}
