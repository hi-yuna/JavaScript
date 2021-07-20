const sum = (a) => {
  let s = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
      s += a[i];
    }
  }
  return s;
};

const arr = [1, 2, 3, 4, 5];
const even = sum(arr);
console.log("짝수합계 : " + even);
