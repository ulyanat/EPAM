/*
Подсчет Букв
Напишите функцию, которая принимает строку и символ в качестве аргументов и возвращает количество символов в данной строке. Подсчет должен происходить независимо от регистра.
Пример
> console.log(countChar('My Random String', 'm'));
2
*/

// +

// Вариант 2

function countChar (string, ch){ 
	var re = new RegExp(ch, 'gi'); 
	var res = string.match(re);
	/* Если символ в строке не найден, то res будет undefined. В этом случае будет 
	 * исключение
						исправила*/
	if (res == null){
		return 0;
	}
	
	return res.length; 
} 
console.log(countChar('My Random String', 'm'));

/*
Наоборот
Напишите две функции, reverseArray и reverseArrayInPlace. Первая получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов. 
Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том же объекте массива, который был ей передан в качестве аргумента. 
Не используйте стандартный метод массива reverse. 
Пример
> console.log(reverseArray([1, 2, 3, 4]));
[4, 3, 2 ,1]
> var array = ['A', 'B', 'C', 'D'];
> reverseArrayInPlace(array);
> console.log(array);
['D', 'C', 'B', 'A']
*/

// +/-
/*
function reverseArrayInPlace(array){
	var lastIndex = array.length - 1;
	var arr = [];
	
	for (var i = lastIndex; i >= 0; i--){
		arr = arr.concat(array[i]);
	}
	
	 * Мы не можем рассчитывать на window, если наш интерпретатор не является браузером.
	 * Тем более если я передам array из любого другого объекта, то он в этой функции не
	 * изменится, например так:
	 * const obj = {
	 *   arr: ['A', 'B', 'C', 'D'];
	 * };
     * reverseArrayInPlace(obj.arr);
     * console.log(obj.arr);
     * Вместо этого нужно использовать семейство методов массива, или просто обращаться к 
     * элементам по индексам и изменять их положение в массиве переданном в фукнцию
	 *
	window.array = arr;
	return array;
}

var array = ['A', 'B', 'C', 'D'];
reverseArrayInPlace(array);
console.log(array);
*/

function reverseArrayInPlace(array){
	var lastIndex = array.length - 1;

	for (var i = 0; i < lastIndex; i++){
		array.splice(i, 0, array[lastIndex]); 
		array.pop();	
	}
	return array;
}

var array = ['A', 'B', 'C', 'D'];
reverseArrayInPlace(array);
console.log(array);

/*
Свертка
Используя метод массива concat, и spread-оператор, напишите функцию, которая принимает произвольное количество аргументов, каждый из которых является массивом. Переданные массивы нужно преобразовать в один массив, которые не содержит повторяющихся элементов.
Пример
> console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
[1, 2, 3, 4, 5, 6]
> console.log(mergeArrays([1, 2], [2, 4], [4, 6]));
[1, 2, 4, 6]
*/

// +/-

/* Данный алгоритм исключает повторяющиеся значения только если они стоят на соседних 
 * индексах. Если я просто передам аргументы в другом порядке, выходной массив будет 
 * содержать повторения:
 * console.log(mergeArrays([2, 4], [1, 2], [4, 6]));
 * Нужно прокрыть сценарии расположения элементов в любом порядке и любой длинны
 */
 /*
function mergeArrays(...rest){
	
	var str = rest.join(',');
	var arr = str.split(',');

	for (var i = 1; i < arr.length; i++) {
		if (arr[i-1] == arr[i]){
			arr.splice(i, 1);
		}
	}
	return arr;
}
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
console.log(mergeArrays([1, 2], [2, 4], [4, 6]));
*/

function mergeArrays(...rest){
	var str = rest.join(',');
	var arr = str.split(',');
	var array = [];

	filter:
	for (var i = 0; i < arr.length; i++){
		var el = arr[i];
		for (var j = 0; j < array.length; j++){
			if (array[j] == el) continue filter;
		}
		array.push(el);
	}

	return array;
}
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
console.log(mergeArrays([1, 2], [2, 4], [4, 6]));

/*
Every и some
У массивов есть стандартные методы every и some. Они принимают как аргумент некую функцию, которая, будучи вызванной с элементом массива в качестве аргумента, возвращает true или false. Так же, как && возвращает true, только если выражения с обеих сторон оператора возвращают true, метод every возвращает true, когда функция возвращает true для всех элементов массива. Соответственно, some возвращает true, когда заданная функция возвращает true при работе хотя бы с одним из элементов массива. Они не обрабатывают больше элементов, чем необходимо – например, если some получает true для первого элемента, он не обрабатывает оставшиеся. Напишите функции every и some, которые работают так же, как эти методы, только принимают массив в качестве аргумента.
Пример
> console.log(every([1, 4, NaN, 6], Number.isNaN);
false 
> console.log(every([NaN, NaN], Number.isNaN);
true
> console.log(some([1, 2, 6], Number.isNaN);
false 
> console.log(some([1, 4, NaN, 6], Number.isNaN);
true
*/

// +/-

/* Данный алгоритм возвращает истину для любого массива, первый аргумент которого 
 * удовлетворяет входному условию. Вместо этого он должен возвращать истину только если
 * все элементы массива удовлетворяют условию:
 * console.log(every([NaN, 1, 4, NaN, 6], Number.isNaN)); --> вернется true, но ожидается false
 */
function every(arr, method){
	var res;
	for (var i = 0; i < arr.length; i++){
		if ((method(arr[i])) == false){
			res = false; break;
		}
		else res = true;
	}
	return res;	
}
console.log(every([NaN, 1, 4, NaN, 6], Number.isNaN));
console.log(every([1, 4, NaN, 6], Number.isNaN));
console.log(every([NaN, NaN], Number.isNaN));

/*
Повтор
Имеется функция multiplyOrThrow, которая с 50% шансом вместо перемножения входных аргументов выбрасывает исключение. Напишите функцию, которая продолжает вызывать функцию multiplyOrThrow до тех пор, пока она не выполнится успешно. Убедитесь, что обработчик исключений вшей функции обрабатывает только одно исключение 'MultiplicatorUnitFailure'
*/

// +/-
/*
function multiplyOrThrow(a, b) {
  if (Math.random() < 0.5) {
    return a * b;
  } else {
    throw 'MultiplicatorUnitFailure';
  }
}

function multiply(a, b) {
	try {
		return multiplyOrThrow(a, b);
	} catch (MultiplicatorUnitFailure) {
	    /* Здесь мы должны обрабатывать только наше исключение 'MultiplicatorUnitFailure'
	     * Все остальные надо передавать "вверх", другому обработчику исключений через
	     * метод throw
	     */
/*		return multiply(a, b);
	}
}
console.log(multiply(2, 3));
*/

function multiplyOrThrow(a, b) {
  if (Math.random() < 0.5) {
    return a * b;
  } else {
    throw 'MultiplicatorUnitFailure';
  }
}

function multiply(a, b) {
	try {
		return multiplyOrThrow(a, b);
	} catch (e) {
	
		if (e == 'MultiplicatorUnitFailure'){
			return multiply(a, b);
		} else {
			throw 'anotherError';
		}
	}
}
console.log(multiply(2, 3));

/*
Найти числа
Напишите функцию, которая использует регулярное выражение, принимает массив строк и возвращает только числа, записанные в нотации JavaScript. Оно должно поддерживать возможный минус или плюс перед числом, десятичную точку, и экспоненциальную запись 5e-3 или 1E10 – опять-таки с возможными плюсом или минусом. Также заметьте, что до или после точки не обязательно могут стоять цифры, но при этом число не может состоять из одной точки. То есть, .5 или 5. – допустимые числа, а одна точка сама по себе – нет. 
Пример
> console.log(findNumbers(["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"]));
["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"]
> console.log(findNumbers(["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]));
[]
*/

// +/-

function findNumbers(arr){ 
	var numbers = []; 
	for (var i = 0; i < arr.length; i++){
		/* темлейт можно сделать попроще и он не обрабатывает отрицательные целочисленные 
		 * числа в экспоненте, например -1e-4 .
		 */
		var str = arr[i].match(/(\+|\-)*[0-9]*\.*[0-9]+e[0-9]*(\+|\-)*[0-9]*|(\+|\-)*[0-9]*\.[0-9]+|(\+|\-)*[0-9]+\.[0-9]*|(\+|\-)[0-9]+|[0-9]+/ig); 
		if (str == arr[i]){ 
		numbers = numbers.concat(arr[i]); 
		}
	}
	return numbers; 
} 

console.log(findNumbers(["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12", "-1e-4"])); 
console.log(findNumbers(["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]));
