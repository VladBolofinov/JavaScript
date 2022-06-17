"use strict";

/* Задача на создание объемной фигуры */

let result = '';
const length = 7;
for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += '\n';
}
console.log(result);


/* Задача: Вывести от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой. */

let num = 5;

while (num <= 10) {
    console.log (num);
    num++;
}

/* При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20,19,18...).
 Когда цикл дойдёт до 13- остановить весь цикл */

 for (let i = 20; i > 13; i--) {
    console.log(i);
 }

 /* При помощи цикла for выведите четные числа от 2 до 10 включительно */

 for (let i = 2; i <= 10; i += 2 ) {
    console.log(i);
 }

/* Переписать цикл for на while */

 for(let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
 }

 let i = 3;

 while (i <= 15) {
    console.log(i);
    i += 2;
 }


// Место для пятой задачи Заполнить массив цифрами от 5 до 10

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
        for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    
    // Не трогаем
    return arrayOfNumbers;
}


/* Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length,
а к элементам обращаемся все так же: arr[0], arr[1] и т.д. Должен получится точно такой же массив. */

/* Самое петушиное решение */

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 3; i < 51; i++) {
    if (i == 3)
    result[i - 3] = i;
    if ( i == 5)  
    result[i - 4] = i;
    if (i == 8)
    result[i - 6] = i;
    if (i == 16)
    result[i - 13] = i;
    if (i == 20)
    result[i - 16] = i;
    if (i == 23)
    result[i - 18] = i;
    if (i == 50)
    result[i - 44] = i;
}
console.log(result);


/* НОРМАЛЬНОЕ РЕШЕНИЕ */

    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    console.log(result);


/* Измените массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка, 
то к ней было добавленo " - done". Для определения типа данных используйте typeof();
Должно получится: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ] */

const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
            data[i] = data[i] * 2;
        } else if (typeof(data[i]) === 'string') {
            data[i] = `${data[i]} - done`;
        }
    }

    console.log(data);

/* Разверните массив data наоборот при помощи цикла и запишите данные в массив result. */

    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i]
    }

    console.log(result);
    console.log(data);




let result = '*';
const length = 5;
for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += "*" + "*";
    }
    result += '\n';
}
console.log(result);


const lines = 5;
let result = '';


result
11 9 7 5 3 1
console.log(' ' + ' ' + ' ' + ' ' + ' ' + ' ' + '*');



/* решение */
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);