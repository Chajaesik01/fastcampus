import myData from './myData.json';

console.log(myData);

const user = {
    name: 'HEROPY',
    age: 85,
    emials: [
        'thesecon@gmail.com',
        'neo@zillinks.com'
    ]
}

console.log('user',user);

const str = JSON.stringify(user)
console.log('str',str);
console.log(typeof str);

//실제 js파일로 변환
const obj = JSON.parse(str);
console.log('obj',obj);

