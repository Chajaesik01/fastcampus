interface Animal {
    name: string;
}

interface Bear extends Animal{
    honey: boolean;
}

const Bear1: Bear = {
    name: 'heoney beadr',
    honey: true
}

type Animal = {
    name: string;
}

type Bear = Animal & {
    honey: boolean;
}

const bear1 = {
    name: 'honey bear',
    honey: true
}

interface Animal {
    name: string;
}

interface Animal{
    honey: boolean;
}

// interface 병합

const baer1: Animal = {
    name: 'honey bear',
    honey: true
}

type Animal = {
    name: string;
}

type Animal = {
    honey: boolean;
}