const even = (a, b, c, d, e) => {
  let sum = 0;
  if (a % 2 === 0) {
    sum += a;
  }
  if (b % 2 === 0) {
    sum += b;
  }
  if (c % 2 === 0) {
    sum += c;
  }
  if (d % 2 === 0) {
    sum += d;
  }
  if (e % 2 === 0) {
    sum += e;
  }
  return sum;
};

const mesg = even(1, 2, 3, 4, 5);
console.log(mesg);
