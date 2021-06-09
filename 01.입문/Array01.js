const array = [1, 2, 3, 4, 5];

console.log(array);

/////////////////////////////////////////


const objects = [
    { name : '멍멍이' },
    { name : '야옹이' }
];

console.log(objects[0]);
console.log(objects[1]);

// 새로운 항목을 추가 (push)
objects.push({
    name : '멍뭉이'
});

console.log(objects);
console.log(objects.length);  // 3



////////////////////////////////////////////


const array2 = [1, true, {a : 1}, [1, 2, 3, 4]];

array2.push(6);
console.log(array2);
console.log(array2.length);