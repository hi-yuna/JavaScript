const number = document.getElementById('number');
//const increase = document.getElementById('increase');
//const decrease = document.getElementById('decrease');

const buttons = document.querySelectorAll("button");
const [increase, decrease] = buttons;

increase.onclick = () => {
    const current = parseInt(number.innerText, 10);  // 10진수
    number.innerText = current + 1;
    console.log('increase가 클릭됨');
}

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);  // 10진수
    number.innerText = current - 1;
    console.log('decrease가 클릭됨');
}