const numbers = [1,2,3,4];

const fruits = ['Apple', 'Banana'];

console.log(numbers[1]);
console.log(fruits[2]);

console.log(numbers.length);
console.log(fruits.length);
console.log([1,2].length);

//concat 배열 합치기, 실제로 합쳐지지 않음
console.log(numbers.concat(fruits))
console.log(numbers);
console.log(fruits);

//forEach, callback 함수
//배열 데이터의 아이템만큼 반복실행됨
fruits.forEach(function (element, index){
    console.log(element, index);
})

// map
// callback에서 생성값으로, 새로운 배열을 만들어 반환 

const a = fruits.forEach(function(fruit, index){
    console.log(`${fruit}-${index}`);
})

// const a = fruits.forEach((fruit, index) => {
// 화살표 함수
// }
console.log(a);

const b = fruits.map(function(fruit, index){
    // return `${fruit}-${index}`
    return {
        id: index,
        name: fruit
    }
})
// 화살표 함수
// const b = fruits.map((fruit, index) => ({
//         id: index,
//         name: fruit
// }))
console.log(b);

const a = numbers.map(number => {
    return number < 3;
})

// const a = numbers.map(number => number < 3)
console.log(a)
// true 또는 false의 값을 가짐

const b = numbers.filter(number =>{
    return number < 3;
})
// const b = numbers.filter(number => number < 3);
console.log(b);
// 조건에 해당하는 배열 각 인덱스의 값을 반환
// 원본 데이터에 영향을 끼치지 않는다

// .find(), .findIndex()

const a = fruits.find(fruit => {
    return /^B/.test(fruit);
})
const a= fruits.find(fruit => /^B/.test(fruit))
// 대문자 B로 시작하는 문자 데이터
console.log(a);

const b = fruits.findIndex(fruit => {
    return /^B/.test(fruit)
})
const b= fruits.findIndex(fruit => /^B/.test(fruit))

// .includes()

const a = numbers.includes(3);

const b = fruits.includes('HEROPY');

// .push(), .unshift()
// 원본 데이터 수정됨 주의

numbers.pust(5);
// 배열 맨 뒤에 추가
numbers.unshift(0);
// 배열 맨 앞에 추가

// .reverse()
// 원본 수정됨 주의
// 배열 뒤집기

// .splice()
// 원본 수정됨 주의
// numbers.splice(2,1)
// 2번째 인덱스부터 값을 하나를 지워라
// numbers.splice(2, 0, 999)
// 2번쨰 인덱스에 값을 0개 지우고, 그 자리에 999를 추가한다.






