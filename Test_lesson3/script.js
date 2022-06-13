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