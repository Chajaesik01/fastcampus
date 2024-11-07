//JSON 형태의 문자 데이터
const user  = {
    name : 'HEROPY',
    age: 85,
    emails : [
        'thesecon@gmail.com',
        'neo@zillinks.com'
    ]
}


localStorage.setItem('user', JSON.stringify(user));
console.log(localStorage.getItem('user')); //문자 데이터
JSON.parse(localStorage(getItem('user'))); //js 데이터로 변환

const obj = JSON.parse(str)
obj.age = 22
console.log(obj)
localStorage.setItem('user', JSON.stringify(obj));




