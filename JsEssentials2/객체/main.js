const userAge = {
    name : 'Heropy',
    age: 85
}

const userEmail = {
    name: 'Heropy',
    email: 'thesecon@gmm'
}

// Object 정적 메소드         target , source
// source에 target 복사 및 저장
// 원본 데이터가 수정됨
const target = Object.assign(userAge, userEmial);

// 원본 데이터를 수정하지 않고 복사하는 방법
// const target = Object.assign({}, userAge, userEmail);
// userAge와 userEmail을 복사하여 빈 객체에 넣는다
console.log(target);
console.log(userAge);
console.log(target === userAge); //true

//  userAge를 target에 복사하는 용도로 사용
//const target = Object.assign{{}, userAge)

const a = { k : 123}
const b = { k : 123}
console.log(a === b) //false

const user = {
    name : 'Heropy',
    age : 85,
    email : 'thesecon@gmail.com'
}
// 배열 데이터로 만들어 반환
const keys = Object.keys(user)
console.log(keys)
// ['name', 'age', 'email']

console.log(user['email']) // thesecon..~
const values = keys.map(key => user(key))
console.log(values)
// user의 값들만 갖고있는 배열 생성






