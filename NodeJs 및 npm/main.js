import _ from 'lodash'

console.log("hello");
console.log(_.camelCase('Hello world'));

function ten() {
	return 10
}

let x = 10
let y = ten() // ten 호출
let z = ten // 값, 종류가 함수
console.log(z);
let s = z()

let k = function ten() {
	return 10
}