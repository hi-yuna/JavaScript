const asc = (a) => {
  for (let i = 0; i < a.length - 1; i++) {
    console.log("i : " + a[i]);
    for (let j = 0; j < a.length - 1 - i; j++) {
      console.log("j : " + a[j]);
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        console.log("temp : " + temp);
      }
      console.log("오름 : " + a);
    }
  }
  return a;
};

const arr = [11, 2, 33, 54, 5];
const a = asc(arr);
console.log("오름차순 정렬 : " + a);
