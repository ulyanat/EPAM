/*
Шахматная доска
Напишите функцию, которая принимает ширину и высоту в качестве аргументов. Функция должна возвращать строку, представляющую собой сочетание пробелов и символов решетки #, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо знак #. 
Пример
> console.log(chessBoard(8, 8));
# # # # 
 # # # #
# # # # 
 # # # #
*/

function chessBoard(width, height){
	let string = '';
	for (var j = 0; j < height; j ++){
		if (j % 2 === 0){

			for (var i = 0; i < width; i ++){
				if (i % 2 === 0){
					string += '#';
				}
				else {
					string += ' ';
				}
			}
		}	
		else {
			for (var i = 0; i < width; i ++){
				if (i % 2 === 0){
					string += ' ';
				}
				else {
					string += '#';
				}
			}
		}
		string += '\n';
	}
return string;
}
console.log(chessBoard(8, 8));


/*
Подсчет Букв
Напишите функцию, которая принимает строку и символ в качестве аргументов и возвращает количество символов в данной строке. Подсчет должен происходить независимо от регистра.
Пример
> console.log(countChar('My Random String', 'm'));
2
*/

// Вариант 1
function countChar(string, ch){

	var stringUpp = string.toUpperCase();
	var chUpp = ch.toUpperCase();
	var pos = 0;
	var i = 0;
	
	while (true) {
		var foundPos = stringUpp.indexOf(chUpp, pos);
		if (foundPos == -1) break;
		i++;
		pos = foundPos + 1;
	}
return i;
}
console.log(countChar('My Random String', 'm'));

// Вариант 2

function countChar (string, ch){ 
	var re = new RegExp(ch, 'gi'); 
	var res = string.match(re); 
	return res.length; 
} 
console.log(countChar('My Random String', 'm'));

/*
Диапазон
Напишите функцию, принимающую два аргумента, начало и конец диапазона, которая возвращает массив, содержащий все числа из этого диапазона, включая начальное и конечное. Дополнительно функция должна обрабатывать необязательный третий аргумент – шаг для построения массива. Если он не задан, шаг равен единице. Если число, указывающее начало диапазона больше, чем число обозначающее конец диапазона, то шаг д.б. отрицательным
Пример
> console.log(makeArray(1, 10));
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
> console.log(makeArray(1, 10, 3));
[1, 4, 7, 10]
> console.log(makeArray(10, 1, -2));
[10, 8, 6, 4, 2]
*/

function makeArray(first, last, step){
	
	var arr = [first];
	
	if (first < last){
		if (step == undefined) step = 1;	
		for(first; (first + step) <= last; first += step){
			arr = arr.concat(first + step);
		}
	}
	else if (first > last){
	if (step == undefined) step = -1;	
		for(first; (first + step) >= last; first += step){
			arr = arr.concat(first + step);
		}
	}
	
	return arr;
}
console.log(makeArray(1, 10));
console.log(makeArray(1, 10, 3));
console.log(makeArray(10, 1, -2));

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

function reverseArray(array){
	var lastIndex = array.length - 1;
	var arr = [];
	
	for (var i = lastIndex; i >= 0; i--){
		arr = arr.concat(array[i]);
	}
	return arr;
}

console.log(reverseArray([1, 2, 3, 4]));

// ******************************************

function reverseArrayInPlace(array){
	var lastIndex = array.length - 1;
	var arr = [];
	
	for (var i = lastIndex; i >= 0; i--){
		arr = arr.concat(array[i]);
	}
	
	window.array = arr;
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

function every(arr, method){
	var res = false;
	for (var i = 0; i < arr.length; i++){
		if ((method(arr[i])) == false){
			break;
		}
		else res = true;
	}
	return res;	
}
console.log(every([1, 4, NaN, 6], Number.isNaN));
console.log(every([NaN, NaN], Number.isNaN));

//***********************************************

function some(arr, method){
	var res = false;
	for (var i = 0; i < arr.length; i++){
		if ((method(arr[i])) == false){
			continue;
		}
		else {
			res = true; 
			break;
		}
	}
	return res;	
}
console.log(some([1, 2, 6], Number.isNaN));
console.log(some([1, 4, NaN, 6], Number.isNaN));

/*
Повтор
Имеется функция multiplyOrThrow, которая с 50% шансом вместо перемножения входных аргументов выбрасывает исключение. Напишите функцию, которая продолжает вызывать функцию multiplyOrThrow до тех пор, пока она не выполнится успешно. Убедитесь, что обработчик исключений вшей функции обрабатывает только одно исключение 'MultiplicatorUnitFailure'
*/

function multiplyOrThrow(a, b) {
  if (Math.random() < 0.5) {
    return a * b;
  } else {
    throw new Error;
  }
}

function multiply(a, b) {
	try {
		return multiplyOrThrow(a, b);
	} catch (e) {
		if (e.name == "Error"){
			alert('false');
			return multiply(a, b);
		}
	}
}
console.log(multiply(2, 3));

/*
Глубокое сравнение
Напишите функцию, которая возвращает истину, если переданные в нее объекта равны друг другу по содержимому. Поля, значение которых являются примитивами должны сравниваться с помощью оператора ===.
Пример
> console.log(deepCompare({ one: 1, two: '2' }, { one: 1, two: '2' }));
true 
> console.log(deepCompare({ one: 1, two: '2' }, { two: '2' }));
false 
> console.log(deepCompare({ one: 1, two: '2' }, { one: 1 two: 2 }));
false
*/

function deepCompare(a, b){
	if (Object.keys(a).length != Object.keys(b).length) return false;
	
	var res = true;
	
	for (var key in a) {
		if (a[key] === b[key]){
		continue;
		} else{
		res = false;
		}
	}
	return res;
}

console.log(deepCompare({ one: 1, two: '2' }, { one: 1, two: '2' }));
console.log(deepCompare({ one: 1, two: '2' }, { two: '2' }));
console.log(deepCompare({ one: 1, two: '2' }, { one: 1, two: 2 }));


/*
Кавычки в тексте
Напишите функцию, которая использует регулярные выражения, принимает строку и заменяет в ней все одинарные кавычки на двойные за исключением знака апострофа (например О’Риордан, aren’t). 
Пример
> console.log(replaceQuotes(“I’m the ‘hero’”));
I’m the “hero” 
*/

function replaceQuotes(string){ 
	var str = ''; 
	str = string.replace(/ \'/g, " \""); 
	str = str.replace(/\' |\'$|\'\./g, "\" "); 
	str = str.replace(/\'$|^\'/g, "\""); 
	return str; 
} 

console.log(replaceQuotes("I'm the 'hero'"));

/*
Найти числа
Напишите функцию, которая использует регулярное выражение, принимает массив строк и возвращает только числа, записанные в нотации JavaScript. Оно должно поддерживать возможный минус или плюс перед числом, десятичную точку, и экспоненциальную запись 5e-3 или 1E10 – опять-таки с возможными плюсом или минусом. Также заметьте, что до или после точки не обязательно могут стоять цифры, но при этом число не может состоять из одной точки. То есть, .5 или 5. – допустимые числа, а одна точка сама по себе – нет. 
Пример
> console.log(findNumbers(["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"]));
["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"]
> console.log(findNumbers(["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]));
[]
*/

function findNumbers(arr){ 
	var numbers = []; 
	for (var i = 0; i < arr.length; i++){
		var str = arr[i].match(/(\+|\-)[0-9]*\.[0-9]+e[0-9]*(\+|\-)[0-9]*|(\+|\-)[0-9]*\.[0-9]+e[0-9]*|[0-9]*\.[0-9]+e[0-9]*|\.[0-9]+e[0-9]*(\+|\-)[0-9]*|\.[0-9]+e[0-9]*|[0-9]+e[0-9]*(\+|\-)[0-9]*|[0-9]+e[0-9]*|(\+|\-)[0-9]+\.[0-9]+|[0-9]+\.[0-9]+|[0-9]+\.|\.[0-9]+|[0-9]+|(\+|\-)[0-9]+/ig); 
		if (str == arr[i]){ 
		numbers = numbers.concat(arr[i]); 
		}
	}
	return numbers; 
} 

console.log(findNumbers(["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"])); 
console.log(findNumbers(["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]));

/*
День и месяц
Напишите функцию, которая принимает объект даты, и возвращает название дня недели и месяца этой даты.
Пример
> console.log(getNames(new Date()));
January, Wednesday
*/

function getNames(date){
	var res;
	res = ( date.toLocaleString("en-US", {month: 'long'}) ) + ', ' + ( date.toLocaleString("en-US", {weekday: 'long'}) );
	return res;
}
console.log(getNames(new Date(2018, 0, 25)));

/*
Разница в годах
Напишите функцию, которая принимает два объекта дат и возвращает разницу между ними в годах
Пример
> console.log(differenceInYears(new Date(2014,10,2), new Date(2016,10,2)));
2
*/

function differenceInYears(date1, date2){
	var v = Math.abs(Math.trunc(((date1 - date2)/31536000000)/4));
	var res = Math.abs(Math.trunc(((date1 - date2)+86400000*v)/31536000000));
	return res;
}
console.log(differenceInYears(new Date(2014,10,2), new Date(2016,10,2)));

