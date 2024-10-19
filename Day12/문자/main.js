// 문자 관련 함수 : string mdn


const str = '0123';

console.log('0123'.length);

const str2 = "Hello world";

console.log(str2.indexOf('world') !== -1);
console.log(str2.slice(0, 3));
console.log(str2.replace(' world', ''));
//실제로 값이 바뀌는 것은 아님
console.log(str2);
console.log(str2.length);

const str3 = 'thesecon@gmail.com';
// . 한글자 + 최대한 많이   @ 이 요소 앞의 값들을
console.log(str3.match(/.+(?=@)/));

const str4 = '    Hello  world   '

// trim() : 앞 뒤 공백 삭제
console.log(str4.trim());

