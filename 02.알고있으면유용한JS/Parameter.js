// 함수의 기본 파라미터

// 원의 넓이 구하기
function calculateCircleArea(r = 1) {
    return Math.PI * r * r;
}

// 화살표 함수
const calculateCircleArea = (r=1) => Math.PI * r * r;


const area = calculateCircleArea();
console.log(area);


