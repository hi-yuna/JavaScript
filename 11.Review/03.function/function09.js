const print = (str) => {
  const up = str.toUpperCase();
  const low = str.toLowerCase();
  let reverse = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return up + "\t" + low + "\t" + reverse;
};

const data = print("AbCdEf");
console.log("데이터 : " + data);
