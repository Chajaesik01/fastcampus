export default function getType(data){
    return Object.prototype.toString.call(data).slice();
}

// Default export : 기본 내보내기, 이름을 다르게 지정해도 , 지정하지 않아도 알아서 찾음
// Named export : 지정 내보내기