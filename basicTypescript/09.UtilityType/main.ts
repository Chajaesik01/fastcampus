// Partial

interface Address {
    email: string;
    address: string;
}

const me: Partial<Address> ={};
const you = {email: 'john@abc.com'}; //type error! 
const you: Partial<Address> = {email: 'john@abc.com'};

const all: Address = {email: 'jon@abc.com', address: 'john'};

//Pick

interface Todo{
    title: string;
    desctiption: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;



const todo : TodoPreview = {
    title: "Clean Room",
    completed: false
}

// Omit 생략하다

interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoPreview = Omit<Todo, "desctipion">;

const todo = {
    title: "clean room"
    completed: false,
    createdAt: 12312412,
}

// Required

type User = {
    firstName: string,
    lastName?: string
}

let firstUser: User = {
    firstName: "john"
}

let secondUser: Required<User> = {
    firstName: "john"
}

// Record

interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName,CatInfo> = {
    miffy: {age: 10, breed: 'persian'},
    boris: {age: 5, breed: 'maine coon'},
    mordred: {age: 16, breed: "british shorthair"}
}

// ReturnType

type T0 = ReturnType<() => string> // string
type T1 = ReturnType<(s: string) => void> // void

function fn(str: string){
    return str;
}

const a: ReturnType<typeof fn> = 'Hello';
