function getArrayLength(arr : number[] | string[] | boolean[]): number{
    return arr.length;
}

const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];
const array3 = [true, false, true];
getArrayLength(array1);
getArrayLength(array2);
getArrayLength(array3);


function getArrayLength<T>(arr: T[]): number{
    return arr.length;
}
const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];
const array3 = [true, false, true];
getArrayLength<number>(array1);
getArrayLength<string>(array2);
getArrayLength<boolean>(array3);

interface Vehice<T>{
    name: string;
    color: string;
    option: T;
}

const car: Vehice<{ price: number}> = {
    name: 'Car',
    color: 'red',
    option: {
        price: 1000
    }
}

const bike: Vehice<boolean> = {
    name: 'Bike',
    color: 'green',
    option: true
}

const makeArr = <T, Y> (x: T, y : Y): [T, Y] => {
    return [x,y];
}

const array = makeArr<number, number>(4, 5);
const array = makeArr<string, string>("a", "b");

const makeArr1 = <T, Y = string> (x: T, y : Y): [T, Y] => {
    return [x,y];
}
const array = makeArr1<string>("a", "b");

const makeFullName = <T extends {firstName: string, lastName: string}> (obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + " "+ obj.lastName
    }
}

makeFullName({firstName: "john", lastName : "Doe", location: 'Seoul'})
makeFullName({firstName: "john", lastName : "Doe", hello: 'world'})

// React에서 Generic

interface Props {
    name: string;
}

const REactComponent: RecordingState.FC<Props> = ({ name}) => {
    return <div> {name}</div>
}

const [state] = useSatate<{name: string | null}>({name: ""});