function random(){
    return Math.random();
}
console.log(random())
a = random();

// if 
if (a === 0){
    console.log('a is 0');
} else if (a == 2){

    console.log('a is true');
} else {
    console.log('rest/');
}

// switch

switch (a) {
    case 0:
        console.log('a is 0');
        break;
    case 2:
        console.log('a is true');
        break;
    case 4:
        console.log('rest/');
        break;
    default:
        console.log('rest/');
}

// 반복문

for (let i=0; i<3; i++){
    console.log(i);
}

const ulEl = document.querySelector('ul');

for (let i = 0; i<10; i++){
    const li = document.createElement('li');
    li.textContent = `list-${i+1}`;
    if ((i+1) % 2 === 0){
        li.addEventListener('click', function(){
            console.log(li.textContent);
        })
    }
    ulEl.appendChild(li);
}

// 형 변환

const a = 1;
const b = '1';

console.log(a == b) //동등 연산자
console.log(a === b) //일치 연산자

// True 값
// true, {}, [], 1, 2, 'false', -12, '3.14' ... 

// False 값
// false, '', null, undefined, 0, -0, 'NaN

