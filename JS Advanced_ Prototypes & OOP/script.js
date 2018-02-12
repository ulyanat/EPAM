/*
1.	Создать цепочку прототипов для следующих объектов: 

Vehical - обобщеное траспортное средство с полями:
speed - скорость перемещения

Bike - мотоцикл с полями:
wheelsCount = 2- количество колес

Car - автомобиль с полями:
wheelsCount - количество колес
doorsCount - количество дверей

MonsterTruck - автомобиль( https://en.wikipedia.org/wiki/Monster_truck ) с полями:
wheelsSize - размер колес

Таким образом, чтобы были определены:
Bike.speed,
Car.speed,
MonsterTruck.speed,
MonsterTruck.wheelsCount,
MonsterTruck.doorsCount
*/

var Vehical = {
	speed: 0
};

var Bike = {
	wheelsCount: 2
};

Bike.__proto__ = Vehical;

var Car = {
	wheelsCount: 4,
	doorsCount: 4
};

Car.__proto__ = Vehical;

var MonsterTruck = {
	wheelsSize: 66
};

MonsterTruck.__proto__ = Car;

console.log(Bike.speed);
console.log(Car.speed);
console.log(MonsterTruck.speed);
console.log(MonsterTruck.wheelsCount);
console.log(MonsterTruck.doorsCount);


/*
2.	Используя прототипное наследование  создать иерархию классов для объектов из задания 1 с дополнениями):
Vehical 
Добавить функции move увеличивающий скорость на 1 и stop обнуляющий скорость

Bike
Переопределить фукнцию move таким образом, что бы при ускорении (вызов move), кроме изменения скорости, в консоль приходили "звуки" разгона.

Car
Добавить фунции openDoor, которая 'открывает' одну дверь и выводит в консоль количество открытых дверей, и closeDoor , которая 'закрывает' одну дверь и выводит в консоль количество закрытых дверей. Число должо быть больше или равно 0 И меньше или равно количеству дверей.

MonsterTruck
Вызов фунции openDoor должен делать то же самое что и у Car, но через 1 секунду

+ Для каждого из классов переопределить методы toString и valueOf

+ Вести счет созданных объектов класса Car, используя статическое поле или метод
*/

function Vehical(name){
	this.name = name;
	this.speed = 0;
	Vehical.prototype.valueOf = function() { return 'Метод valueOf класса Vehical переопределен'; };
	Vehical.prototype.toString = function() { return 'Метод toString класса Vehical переопределен'; };
}

Vehical.prototype.stop = function(){
	this.speed = 0;
	console.log(this.name + ' is stopped');
}

Vehical.prototype.move = function(speed) {
  this.speed++;
  console.log( this.name + ' is moving, speed ' + this.speed );
}

function Bike(name){
	Vehical.apply(this, arguments);
	this.name = name;
	this.wheelsCount = 2;
	Bike.prototype.valueOf = function() { return 'Метод valueOf класса Bike переопределен'; };
	Bike.prototype.toString = function() { return 'Метод toString класса Bike переопределен'; };
}

Bike.prototype = Object.create(Vehical.prototype);
Bike.prototype.constructor = Bike;

Bike.prototype.move = function(){
  	Vehical.prototype.move.apply(this, arguments);
  	console.log('**звук разгона**');  
}

var bike = new Bike('1st_bike');
/*
bike.move();
bike.move();
bike.move();
bike.move();
bike.stop();
bike.move();
*/

function Car(name){
	Vehical.apply(this, arguments);
	this.name = name;
	this.wheelsCount = 4;
	this.doorsCount = 4;
	this.openDoors = 0;
	Car.count++;
	Car.prototype.valueOf = function() { return 'Метод valueOf класса Car переопределен'; };
	Car.prototype.toString = function() { return 'Метод toString класса Car переопределен'; };
}

Car.count = 0;
Car.showCount = function() {
	console.log( this.count );
}

Car.prototype = Object.create(Vehical.prototype);
Car.prototype.constructor = Car;

Car.prototype.openDoor = function(){
	if (this.openDoors >= this.doorsCount){
		console.log('Все двери открыты!');
		return;
	}
	this.openDoors++;
	console.log('Открыто ' + this.openDoors + ' дверей');
}

Car.prototype.closeDoor = function(){
	if (this.openDoors <= 0){
		console.log('Все двери закрыты!');
		return;
	}
	this.openDoors--;
	console.log('Закрыто ' + (this.doorsCount - this.openDoors) + ' дверей');
}

var car = new Car('1st_car');
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

function MonsterTruck(name){
	Car.apply(this, arguments);
	this.name = name;
	this.wheelsSize = 66;
	MonsterTruck.prototype.valueOf = function() { return 'Метод valueOf класса MonsterTruck переопределен'; };
	MonsterTruck.prototype.toString = function() { return 'Метод toString класса MonsterTruck переопределен'; };
}

MonsterTruck.prototype = Object.create(Car.prototype);
MonsterTruck.prototype.constructor = MonsterTruck;

MonsterTruck.prototype.openDoor = function(){
	setTimeout(Car.prototype.openDoor.bind(this), 1000);
}

var monster = new MonsterTruck('1st_MonsterTruck');
/*
monster.openDoor();
monster.openDoor();
monster.openDoor();
monster.openDoor();
monster.openDoor();
*/
Car.showCount();

/*
3.	Используя функциональное наследование повторить задачу из п2.
*/

function Vehical(name){
	this.name = name;
	this.speed = 0;

	this.stop = function(){
		this.speed = 0;
		console.log(this.name + ' is stopped');
	}
    
	this.move = function(speed) {
		this.speed++;
		console.log( this.name + ' is moving, speed ' + this.speed );
	}
    
	this.valueOf = function() { return 'Метод valueOf класса Vehical переопределен'; };
	this.toString = function() { return 'Метод toString класса Vehical переопределен'; };
}

function Bike(name){
	Vehical.call(this);
	this.name = name;
	this.wheelsCount = 2;

	var parentMove = this.move;
	this.move = function(){
		parentMove.call(this);
		console.log('**звук разгона**');  
	}
	this.valueOf = function() { return 'Метод valueOf класса Bike переопределен'; };
	this.toString = function() { return 'Метод toString класса Bike переопределен'; };
}
Bike.prototype = Object.create(Vehical.prototype);
var bike = new Bike('1st_bike');

/*
bike.move();
bike.move();
bike.move();
bike.move();
bike.stop();
bike.move();
*/

function Car(name){
	Vehical.call(this);
	this.name = name;
	this.wheelsCount = 4;
	this.doorsCount = 4;
	this.openDoors = 0;
	Car.count++;
	
	this.openDoor = function(){
		if (this.openDoors >= this.doorsCount){
			console.log('Все двери открыты!');
			return;
		}
		this.openDoors++;
		console.log('Открыто ' + this.openDoors + ' дверей');
	}

	this.closeDoor = function(){
		if (this.openDoors <= 0){
			console.log('Все двери закрыты!');
			return;
		}
		this.openDoors--;
		console.log('Закрыто ' + (this.doorsCount - this.openDoors) + ' дверей');
	} 
	this.valueOf = function() { return 'Метод valueOf класса Car переопределен'; };
	this.toString = function() { return 'Метод toString класса Car переопределен'; };
}

Car.count = 0;
Car.showCount = function() {
	console.log( this.count );
}
Car.prototype = Object.create(Vehical.prototype);
var car = new Car('1st_car');

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

function MonsterTruck(name){
	Car.call(this);
	this.name = name;
	this.wheelsSize = 66;
	
	var parentOpenDoor = this.openDoor;
	this.openDoor = function(){
		setTimeout(parentOpenDoor.bind(this), 1000);
	}
	this.valueOf = function() { return 'Метод valueOf класса MonsterTruck переопределен'; };
	this.toString = function() { return 'Метод toString класса MonsterTruck переопределен'; };
}
MonsterTruck.prototype = Object.create(Car.prototype);
var monster = new MonsterTruck('1st_MonsterTruck');
/*
monster.openDoor();
monster.openDoor();
monster.openDoor();
monster.openDoor();
monster.openDoor();
*/

Car.showCount();

/*
4.	Исправтьте ошибки в коде
a.	https://jsbin.com/qajajoseka/edit?js,console 
*/

function Animal(name) { 
	this.name = name; 
} 

Animal.prototype.printName = function() { 
	console.log(this.name); 
} 

function Rabbit(name) { 
	Animal.apply(this); 
	this.name = name; 
} 

Rabbit.prototype = Object.create(Animal.prototype); 
Rabbit.prototype.constructor = Rabbit; 

var r = new Rabbit('Lucky'); 
r.printName(); // Should run without any errors and write 'Lucky' 
console.log(Rabbit.prototype.hasOwnProperty('printName')) // Should be false

/*
b.	https://jsbin.com/titubameqi/edit?js,console
*/

var animal = { 
	speed: 0 
}; 

var mammal = { 
	age: 3 
}; 

mammal.__proto__ = animal; 

var rabbit = { 
	name: 'Lucky' 
}; 

rabbit.__proto__ = mammal; 

console.log(rabbit.age) // Should be '3' 
console.log(rabbit.hasOwnProperty('age')) // Should be 'false' (also fix error)
