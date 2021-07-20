const myAge = (a) => {
  const year = a.split("/")[0];
  const current = new Date().getFullYear();
  const age = current - year + 1;

  return age;
};

const ssn = "1997/02/23";
const age = myAge(ssn);
console.log("현재 나이 : " + age);
