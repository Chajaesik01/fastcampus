// Boolean
let boolean: boolean;
let falseBoolean: boolean = false;

// Number
let number: number
let integer: number = 6
let float: number = 1.2345

// String
let string: string 
let firstName: string = "Cha";

// Array
// 한가지 타입만 가지는 배열
let names1: string[] = ['John', 'Kim']
let names2: Array<string> = ['John', 'Kim'];

// 여러 타입을 가지는 배열(union 타입)

let array1: (string | number) [] = ['John', 1, 2];
let array2: Array<string | number> = ['John', 1, 2];

// 여러 타입을 단언 할 수 없다면 any 사용
let someArray: any[] = ['John', 1, [], {}, false];

// interface, Type
//나중에 알아보자

// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray: readonly string[] = ['A', 'B', 'C'];
let numberArray: ReadonlyArray<number> = [1,2]

stringArray.push('D'); // error
numberArray[0] = 3; // error

// Tuple

let tuple1: [ string, number];
tuple1 = ['a', 1];
tuple1 = ['a', 1, 2]; // error
tuple1 = [1, 'a']; // error

let users: [number, string][]
users = [[1, 'John'], [2, 'Doe']];

let tuple2: [string, number]
tuple2 = ['a', 1]
tuple2.push(2); // tuple2 = ['a', 1, 2]
tuple2.push(false) // error

// any

let any: any = 'abc';
any = 1;
any = [];

// unknown
let unknown: unknown = false; // 어떠한 값도 넣을 수 있지만 
let string1: string = unknown; // unknown 형식은 값을 할당할 수 없다.
let string2: string = unknown as string; // 타입 단언

// Object

let obj: object = {};
let arr: object = [];
let null: object = null;
let date: object = new Date();

const obj1: {id: number, title: string} = {
    id: 1,
    title: 'title1',
    description: 'desc' // error
}

// Union

let union: (string | number)
union = 'hi';
union = 1;
union = false; // error

// Function

let func1: (arg1: number, arg2:number) => number;
func1 = function(x, y){
    return x *y;
}

let func2: () => void;
func2 = function(){
    console.log('hi');
}

// Null, Undefined
// undefined와 null은 다른 자료형에 넣어도 오류 X
let number1: number = undefined
let string3: string = null;
let object: {a: 10, b: false} = undefined;
let array: any[] = null;
let undefined1: undefined = null;
let null1: null = undefined;
let void1: void = null;

let void2: void = undefined;

// void

function greeting(): void {
    console.log('hi');
}


