interface Part{
    seat: number;
    tire: number;
}

class Car {
    mileage = 0;
    price = 100;
    color = 'white';

    dirve(){
        return 'drive';
    }
    break(){
        return 'break';
    }

}
class Ford extends Car {

}

class Ford implements Car, Part{
// 'Ford' 형식에 'Car' 형식의 mileage, price, color, dirve, break 속성이 없습니다
    mileage = 1;
    price = 2;
    color = 'white';
    seats = 2;
    tire = 3;

    drive(){
        return 'drive!';
    }
    break(){
        return 'break!';
    }
}


const myFordCar = new Ford();
myFordCar.