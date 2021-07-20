const gen = (str) => {
  const g = str.substr(7, 1);
  if (g % 2 == 0) {
    return "여자";
  } else {
    return "남자";
  }
};

const gender = gen("970223-2345678");
console.log("성별 : " + gender);
