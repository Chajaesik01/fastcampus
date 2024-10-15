// const heropy = {
//     firstName : 'Heropy',
//     lastName : 'Park',
//     getFullName: function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// console.log(heropy.getFullName());

// const amy  = {
//     firstName: 'Amy',
//     lastName : 'Clarke',
//     getFullName: function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// console.log(amy.getFullName());

//Pascal case : 첫문자를 대문자로
//그 함수가 new 생성자로 사용됨을 알림
function User(first, last){
    this.firstName = first;
    this.lastName = last;

}

User.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}
//클래스 생성자 new

//heropy : 인스턴스
const heropy = new User('Heropy', 'Park');
const amy = new User('Amy', 'Clarke');
// const heropy = {} 리터럴 방식
console.log(heropy.getFullName()); //참조
console.log(amy);

// this
// 일반 함수는 호출 위치에서 따라 this 정의
// 화살표 함수는 자신이 선언된 함수 범위에서 this 정의

const heropy2 = {
    name: 'Heropy2',
    normal: function(){
        console.log(this.name);
    },
    arrow: () => {
        console.log(this.name);
    }
}

heropy2.normal();
heropy2.arrow();

const amy2= {
    name: 'Amy',
    normal: heropy2.normal,
    arrow: heropy2.arrow
}
amy2.normal();
amy2.arrow();

function User2(name){
    this.name = name
}

User2.prototype.normal = function(){
    console.log(this.name);
}
User2.prototype.arrow = () =>{
    console.log(this.name);
}
const heropy3 = new User2('Heropy');

heropy3.normal();
heropy3.arrow();

//this 예제 2

const timer = {
    name: "Heropy!!",
    timeout: function() {
        //setTimeout(함수, 시간); ms 단위
        // setTimeout(function(){
        setTimeout(()=> {
            console.log(this.name);
            // 결과값 : Heropy!!
        },2000)
    }
}
timer.timeout();

// ESC Class

// const ... = {
//     normal(){
//         console.log();
//     }
// }

//자주 사용하는 클래스 문법
class cUser {
    constructor(first, last){
        this.firstName = first;
        this.lastName = last;        
    }
    getFUllName(){
        return `${this.firstName} ${this.lastName}`
    }
}
const amy3 = new cUser('Amy', 'Smith');

//상속 개념

class Vehicle{
    constructor(name, wheel){
        this.name = name;
        this.wheel = wheel;
    }
}

const myVehicle = new Vehicle('운송 수단', 2);
console.log(myVehicle);

//extends : 다른 클래스를 확장, 상속한다.
class Bicycle extends Vehicle{
    constructor(name, wheel){
        //부모 매개변수 참조
        super(name, wheel)
    }
}
const myBicycle = new Bicycle('삼천리', 2);
const daugthersBicycle = new Bicycle('세발',3);
console.log(myBicycle)
console.log(daugthersBicycle);

class Car extends Vehicle{
    constructor(name, wheel, license){
        super(name, wheel);
        this.license = license;
    }
}

const myCar = new Car('벤츠', 4, true);
const daughtersCar = new Car('포르쉐',4,false);
console.log(myCar);
console.log(daughtersCar);

