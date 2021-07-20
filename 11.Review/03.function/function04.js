const check = (num) => {
  if (num % 2 === 0) {
    return "짝수";
  } else if (num % 2 === 1) {
    return "홀수";
  }
};

var mesg = check(10);
console.log(mesg);
