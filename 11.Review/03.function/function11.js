const sum = (a) => {
  let s = 0;
  for (var i = 0; i < a.length; i++) {
    s += a[i];
  }
  return s;
};

const arr = [1, 2, 3, 4, 5];
const total = sum(arr);
console.log("합계 : " + total);
