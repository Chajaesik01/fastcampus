function helloFunc() {
    console.log(1234);
}

helloFunc(); //함수호출 1234

// 기명(이름이 있는)함수
// 함수 선언
function returnFunc() {
    return 123;
}

let a= returnFunc(); //함수 호출 
console.log(a); //123

function sum(a,b){
    return a+b;
}
let A = sum(1,2);
let b = sum(7,12);
console.log(A,b);

// 익명( 이름이 없는) 함수
// 함수 표현
// let world = function(){
// console.log('World');
// }
//world();   //World

const heropy = {
    name: 'HEROPY',
    age:85,
    //메소드(Method) - 객체안에 함수가 있는것
    getName: function (){
        return this.name;
    }
};
const hisName = heropy.getName();
console.log(hisName)
console.log(heropy.getName());


