class Vehical {

	constructor(name) {
		this.name = name;  
		this.speed = 0;
	}
  
	speed() {
		return this.speed;
	}
}

class Bike extends Vehical {

	constructor(wheelsCount) {
		super(wheelsCount);
		this.wheelsCount = 2;
	}

	wheelsCount() {
		return this.wheelsCount;
	}
}

class Car extends Vehical {

	constructor(wheelsCount, doorsCount) {
		super(wheelsCount, doorsCount);
		this.wheelsCount = 4;
		this.doorsCount = 4;		
	}
	
	doorsCount() {	
		return this.doorsCount;
	}
}

class MonsterTruck extends Car {

	constructor(wheelsSize) {
		super(wheelsSize);
		this.wheelsSize = 66;		
	}
	
	wheelsSize() {	
		return this.wheelsSize;
	}
}

let bike = new Bike();
let car = new Car();
let monsterTruck = new MonsterTruck();

console.log(bike.speed);
console.log(car.speed);
console.log(monsterTruck.speed);
console.log(monsterTruck.wheelsCount);
console.log(monsterTruck.doorsCount);
console.log(monsterTruck.wheelsSize);
/********************/

class Vehical {

	constructor(name) {
		this.name = name;  
		this.speed = 0;
	}
  
	valueOf() {
		return 'Метод valueOf класса Vehical переопределен';
	}
	
	toString() {
		return 'Метод toString класса Vehical переопределен';
	}

	stop() {
		this.speed = 0;
		console.log(this.name + ' is stopped');
	}
	
	move() {
		this.speed++;
		console.log( this.name + ' is moving, speed ' + this.speed );
	}	
	
}

class Bike extends Vehical {

	constructor(wheelsCount) {
		super(wheelsCount);
		this.wheelsCount = 2;		
	}
	
	valueOf() {
		return 'Метод valueOf класса Bike переопределен';
	}
	
	toString() {
		return 'Метод toString класса Bike переопределен';
	}
	
	move() {
		super.move();
		console.log('**звук разгона**');  
	}	
	
}

let bike = new Bike('1st_bike');
/*
bike.move();
bike.move();
bike.move();
bike.move();
bike.stop();
bike.move();
*/

class Car extends Vehical {

	constructor(wheelsCount, doorsCount, openDoors) {
		super(wheelsCount, doorsCount, openDoors);
		this.wheelsCount = 4;
		this.doorsCount = 4;
		this.openDoors = 0;
		Car.count++;		
	}
	
	valueOf() {
		return 'Метод valueOf класса Car переопределен';
	}
	
	toString() {
		return 'Метод toString класса Car переопределен';
	}
	
	showCount() {
		return Car.count;
	}

	openDoor() {
		if (this.openDoors >= this.doorsCount){
			console.log('Все двери открыты!');
			return;
		}
		this.openDoors++;
		console.log('Открыто ' + this.openDoors + ' дверей');
	}	
	
	closeDoor() {
		if (this.openDoors <= 0){
			console.log('Все двери закрыты!');
			return;
		}
		this.openDoors--;
		console.log('Закрыто ' + (this.doorsCount - this.openDoors) + ' дверей');
	}	
	
}

Car.count = 0;
let car = new Car('1st_car');
/*
car.openDoor();
car.openDoor();
car.openDoor();
car.openDoor();
car.openDoor();
car.openDoor();
car.closeDoor();
car.closeDoor();
car.closeDoor();
car.closeDoor();
car.closeDoor();
*/

class MonsterTruck extends Car {

	constructor(wheelsSize) {
		super(wheelsSize);
		this.wheelsSize = 66;		
	}
	
	valueOf() {
		return 'Метод valueOf класса MonsterTruck переопределен';
	}
	
	toString() {
		return 'Метод toString класса MonsterTruck переопределен';
	}
	
	openDoor() {
		setTimeout(super.openDoor(), 1000);
	}	
}	

var monster = new MonsterTruck('1st_MonsterTruck');
/*
monster.openDoor();
monster.openDoor();
monster.openDoor();
monster.openDoor();
monster.openDoor();
*/