
const fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits)
console.log(...fruits); //문자 데이터 형식으로 출력
// ... 전개연산자

// 매개변수에 ...c로 작성시, 나머지 배열 값들을 받아 저장 rest parameter
function toObject(a, b, c){
    return {
        a: a,
        b: b,
        c: c
    }
}
console.log(toObject(...fruits));
// a : 'Apple', b : 'Banana' ,...
// 또는 
console.log(fruits[0], fruits[1]);


