const grade = (score) => {
  if (score >= 90) {
    return "1등급";
  } else if (score >= 80 && score < 90) {
    return "2등급";
  } else if (score >= 70 && score < 80) {
    return "3등급";
  } else {
    return "4등급";
  }
};
const mesg = grade(80);
console.log("등급 : " + mesg);
