const user ={
    name: 'HEROPY',
    age : 85,
    emial : "ckwotlr13@naver.com"
}
//address 기본값 지정방법
const { name, age, email, address = 'Korea'} = user;
// const { name : heropy}
// `${heropy}`
//'HEROPY, 85, ckwotlr13@..., undefined
//                            'Korea"

const fruits = ['Apple', 'Banana'];
const [a, b, c, d] = fruits
//const [, b] = fruits
//  b = Banana
console.log(a,b,c,d);
//Apple, Banana, Cherry, undefined




