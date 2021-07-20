const max = (a) => {
  let maxnum;
  for (let i = 0; i < a.length; i++) {
    if (maxnum == undefined) {
      maxnum = a[i];
    }
    if (maxnum < a[i]) {
      maxnum = a[i];
    }
  }
  return maxnum;
};

const arr = [11, 2, 33, 54, 5];
const m = max(arr);
console.log("최대값 : " + m);
