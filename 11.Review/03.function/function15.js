const bananaCheck = (a) => {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i].includes("banana")) {
      count++;
    }
  }
  return count;
};

const arr = [
  "Banana",
  "Melon",
  "banana",
  "apple",
  "banana",
  "bananaa",
  "banananana",
];
const count = bananaCheck(arr);
console.log("banana 글자 포함 단어 갯수:" + count);
