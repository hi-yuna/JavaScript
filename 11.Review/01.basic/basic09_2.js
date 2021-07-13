// 면접점수와 영어점수를 입력 받아서 평균이 80이상이면 합격 아니면 불합격 문자열을 출력

var interScore = prompt("면접점수을 입력하세요");
var enScore = prompt("영어점수를 입력하세요");

var avg = (parseInt(interScore) + parseInt(enScore)) / 2;

var passMesg = "합격";
if (avg < 80) {
  passMesg = "불합격";
}

document.write("면접점수 : " + interScore + "<br>");
document.write("영어점수 : " + enScore + "<br>");
document.write("평균 : " + avg + "<br>");
document.write("합격여부 : " + passMesg + "<br>");
