console.log(!undefined); // true
console.log(!null);  // true
console.log(!0);  // true
console.log(!'');  // true
console.log(!NaN);  //true



console.log(!3);  // false
console.log(!'hello');  // false
console.log(!['array']);  // false
console.log(![]);  // false


const value = 3;  

const truthy = value ? true : false;
console.log(truthy);  // true