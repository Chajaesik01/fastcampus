const pi = 3.141592;
console.log(pi);

const str = pi.toFixed(2)
console.log(str);
console.log(typeof str)

const integer = parseInt(str)
const float = parseFloat(str)

console.log(integer)
console.log(float)
console.log(typeof integer, typeof float);

// Math.celi : 보통 정수 단위로 올림처리
// floor : 내림
// round 버림