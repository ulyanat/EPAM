/*
1.	Промисификация: 
Написать функцию по следующим требованиям:
a.	Функция должна сравнивать 2 числа ( function compare(value1, value2) )
b.	Результат должен возвращаться через 1 секунду (используйте setTimeout вместе с Promise)
i.	-1 если 1-е число меньше 2-го
ii.	0 если числа равны
iii.	1 если 1-е число больше 2-го
c.	[Дополнительно] Если одно из чисел не передано или передено не число, то должна быть проброшена ошибка, информирующая об этом (в setTimeout) и перехвачена снаружи метода (используйте методы Promise)
*/

function compare(value1, value2){
	var promise = new Promise(function(resolve, reject) {
		setTimeout(function(){ 
		if ( (typeof(value1) == 'number') && (typeof(value2) == 'number') ){
			resolve("result"); 
		} else reject (new Error ('Введите два числа'));
		}, 1000);
	}); 

	promise 
		.then( 
			function(result){ 
			if (value1 < value2){console.log(-1);}; 
			if (value1 > value2){console.log(1);}; 
			if (value1 == value2){console.log(0);}; 
		},) 
 
		.catch(
			function(err){
			console.log(err.message);
		},);
} 
console.log (compare(1, 3));
console.log (compare(3, 3));
console.log (compare(5, 3));
console.log (compare(3));

/*
2.	Цепочка промисов:
Для задания 'a':
function random(sumWith) {
    return new Promise(function(resolve) {
      var timeout = Math.random()*3000;
      setTimeout(function(){
        resolve(Math.random()*3+ sumWIth);
    }, timeout)
  })
}
Для задания 'b':
function random() {
    return new Promise(function(resolve) {
      var timeout = Math.random()*3000;
      setTimeout(function(){
        resolve(Math.random()*3);
    }, timeout)
  })
}
a.	Используя 'random' напишите цепочку промисов, которая будет суммировать результат выполнения этой функции 3 раза.
b.	Используя 'random' и методы Promise выведите в массиве результаты выполнения этой функции 7 раз.
*/

// 2.a
function random(sumWith) {
    return new Promise(function(resolve) {
      var timeout = Math.random()*3000;
      setTimeout(function(){
        resolve(Math.random()*3 + sumWith);
    }, timeout)
  })
}

random(5)
.then(
	function(result){
		return (random(result));
	})
.then(
	function(result){
		return (random(result));
	})
.then(
	function(result){
		return console.log(result);
	});

// 2.b

function random() {
    return new Promise(function(resolve) {
      var timeout = Math.random()*3000;
      setTimeout(function(){
        resolve(Math.random()*3);
    }, timeout)
  })
}

var arr  = [];
for(var i = 0; i < 7; i++){
	arr.push(random());
}

Promise.all(arr).then(function(results){
    console.log(results);
});

/*
3.	Замыкания:
Написать счетчик с методами:
a.	next - возвращает и увеличивет значение счетчика
b.	prev - возвращает и уменьшает значение счетчика
[Дополнительно] Счетчик должен хранить в истории значений счетчика последние 10.
*/

function makeCounter() {
	var currentCount = 0;
	var arr = [];
	
	function historyCounter(){
		if (arr.length >= 10) arr = [];
		arr.push(currentCount);
	}

	return {
		next: function() {
			++currentCount;
			historyCounter();
			return currentCount;
		},

		prev: function() {
			--currentCount;
			historyCounter();
			return currentCount;
		},

		history: function() {
			return arr;			
		}
	};
}

var counter = makeCounter();

console.log( counter.next() );
console.log( counter.next() ); 
console.log( counter.next() ); 
console.log( counter.history() );
console.log( counter.prev() ); 
console.log( counter.prev() );
console.log( counter.next() );
console.log( counter.next() );
console.log( counter.next() );
console.log( counter.history() );
console.log( counter.next() );
console.log( counter.next() );
console.log( counter.next() );
console.log( counter.next() );
console.log( counter.history() );

/*
4.	Контекст вызова и карринг:
function sumWith(number) {
  return this.currentValue += number;
}
var number = 2;
 alert(sumWith(number));
Исправить результат выполнения с 'NaN' на '5' не изменяя функцию 'sumWith' и значение переменной 'number'.
[Дополнительно] Использовать более 1 способа.
[Дополнительно] Создать метод на основе 'sumWIth', первый вызов которого будет возвращать 1, а все последующие на 2 больше (например, 1, 3, 5, 7...).
*/

function sumWith(number) {
	return this.currentValue += number;
}
var number = 2;
alert(sumWith.bind({currentValue: 3})(number));

//[Дополнительно] Использовать более 1 способа
 
function sumWith(number) {
	return this.currentValue += number;
}
var number = 2;
var double = sumWith.bind({currentValue: 3});
alert(double(number));

//**********************

function sumWith(number) {
	return this.currentValue += number;
}
var number = 2;
alert(sumWith.call({currentValue: 3}, number));

//[Дополнительно] Создать метод на основе 'sumWIth', первый вызов которого будет возвращать 1, а все последующие на 2 больше (например, 1, 3, 5, 7...).

function sumWith(number) {
	return this.currentValue += number;
}

function sum(){
	var value = {currentValue: -1};
	return function(){
		return sumWith.bind(value)(2);
	};
}
var counter = sum();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

/*
5.	setInterval:
Напишите код, который будет 5 раз каждые 2 секунды выводить текст.
[Дополнительно] Напишите код, который будет выводить текст через 1 секунду, потом через 3 после предыдущего, потом через 5 после предыдущего, потом через 7  после предыдущего и далее через 9 секунд после предыдущего.
*/

function timer() {
	var i = 1;
	var timerId = setInterval(function() {
		alert('текст');
		if (i == 5) clearInterval(timerId);
		i++;
	}, 2000);
}
timer();

//[Дополнительно] Напишите код, который будет выводить текст через 1 секунду, потом через 3 после предыдущего, потом через 5 после предыдущего, потом через 7  после предыдущего и далее через 9 секунд после предыдущего.

function timer() {
	var i = 1000;
	setTimeout(function run() {
		alert('текст');
		i += 2000;
		if (i > 9000) return;	
		setTimeout(run, i);
	}, i);
}
timer();
