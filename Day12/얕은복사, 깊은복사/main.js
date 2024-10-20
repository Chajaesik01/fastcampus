import lodash from 'lodash'
const user = {
    name : 'Heropy',
    age: 85,
    emails : ['the@naver.com']
}
//깊은복사
// const copyUser = user
//얕은복사
const copyUser = Object.assign({}, user);
// 또는 const copyUser = {...user}

console.log(copyUser === user);
user.age = 22
console.log('user', user);
console.log('copyUser', copyUser);

user.emails.push('neo@zil.com');
console.log(user.emails === copyUser.emails);
console.log(user)
console.log(copyUser);