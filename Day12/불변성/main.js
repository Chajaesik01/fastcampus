// // 원시 데이터
// let a = 1;
// let b = 4;
// console.log(a,b, a === b);
// b = a;
// console.log(a,b, a===b);
// a = 7;
// console.log(a,b,a ===b);
// let c = 1;
// console.log(b,c, b===c);


// 참조형 데이터, 가변 데이터
// Object, Array, Function
let a = {k:1};
let b = {k:1};
console.log(a, b, a ===b);
a.k = 7
b = a //같은 메모리를 참조하므로
// 의도치않은 값이 변경됨
console.log(a,b,a ===b);
