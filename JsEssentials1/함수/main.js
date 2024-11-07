
function sum(x, y){
    return x+y;
}
console.log(sum(1,2));
sum(4, 12);

const a = function(x,y){
    console.log(arguments);
    return x+y;
}
a();


// 화살표 함수
// () => {} vs function () {}

const double = function(x){
    return x * 2;
}
console.log('double: ', double(7));

const doubleArrow = (x) => {
    return x * 2
}
// x * 2의 값을 반환, 축양형이 가능
const doubleArrow2 = (x, y) => x * 2
 
console.log('doubleArrow',doubleArrow(7))

// 즉시 실행 함수
// IIFE

const a3 = 7
function double2(){
    console.log(a3 * 2);
}
double2();

//즉시실행함수 예시

//case 1
(function () {
    console.log(a3 * 2);
})();

//case 2
(function () {
    console.log(a3 * 2);
}());

//호이스팅
//함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a4 = 7
// 아래와 같은 함수 표현은 불가능 
const double3 = function(){
    console.log(a4 * 2)
}
double3();

//아래와 같은 함수 선언은 가능
//일반적으로 맨 아래에 작성한다.
function double4(){
    //
}

// 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(하무, 시간) : 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

setTimeout(function() {
    console.log("hello");
}, 3000);

const timer = setTimeout(() =>{
    console.log('hello!');
},3000)

const h1El = document.querySelector('h1');
h1El.addEventListener('click',function(){
    clearTimeout(timer);
})

const timer2 = setInterval(() =>{
    console.log('hello!!');
}, 3000)

//3초에 한번 출력 종료
clearInterval(timer);


//콜백
//함수의 인수로 사용되는 함수

function timeout(callback){
    setTimeout(() => {
        console.log('Hello!!!');
        callback();
    }, 3000)
}
// 콜백함수 예시
timeout(() => {
    console.log('Done')    
});
