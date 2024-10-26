import _ from 'lodash';

const userA = [
    { userId: '1', name: 'HEROPY'},
    { userId: '2', name: 'Neo'}
]
const userB = [
    { userId: '1', name: 'HEROPY'},
    { userId: '3', name: 'Amy'}
]
const userC = usersA.concat(userB);
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId'))

const usersD = _.unionBy(usersA, usersB, 'userId');
console.log('unionBy',usersD)

// uniqBy : 배열이 하나일 때 사용
// unionBy : 배열이 여러개일 때 사용
// find  : 인자값의 값 자체를 리턴
// findIndex : 인자값의 인덱스 위치 값 리턴
// remove : 객체 key와 value 값을 삭제
