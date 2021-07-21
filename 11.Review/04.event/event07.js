// 버튼을 선택하면, 1부터 선택된 버튼의 값까지 더하는 값 출력

const sum = (a) => {
  let sum = 0;
  for (let i = 1; i <= a.innerText; i++) {
    sum += i;
  }
  document.getElementById("result").innerHTML = sum;
};
