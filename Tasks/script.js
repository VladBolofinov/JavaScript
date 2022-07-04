'use strict';

/* Задача 1. Создайте функцию которая будет вычислять объем и площадь полной поверхности куба. Эта функция 
принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки.
Если в функцию попал неправильный аргумент или вычислить значения невозможно
 - вернуть строку 'При вычислении произошла ошибка' */

 // Моё решение

/* function calculateVolumeAndArea(a) {
    let V = a * a * a;
    let S = 6 * (a * a);
    if (Number.isInteger(V) === true && V >= 0 && Number.isInteger(S) === true &&
         S >= 0 && Number.isNaN(V) === false && Number.isNaN(S) === false) {
        let trueAnswer = `Объем куба: ${V}, площадь всей поверхности: ${S}`;
        alert(trueAnswer);
        return trueAnswer;
    } else {
       let falseAnswer = 'При вычислении произошла ошибка';
       alert(falseAnswer);
       return falseAnswer;
    }
}
calculateVolumeAndArea(17); */

/* Другое решение

function calculateVolumeAndArea(length) {
    if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;
    
    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);*/

// Задача 2. Здесь нужно выбрать номер места и чтобы показывало какое это купе. В каждом купе № 1/2/3 и т.д. до 9
// по 4 места. 

function getCoupeNumber(a) {
    if (Number.isInteger(a) === false || a < 0 || typeof(a) === String) {
        return 'Ошибка. Проверьте правильность введенного номера!';
    }  else if (a >= 1 && a <= 4 ) {
        return 1;
    } else if (a >= 5 && a <= 8) {
        return 2;
    } else if(a >= 9 && a <= 12) {
        return 3;
    } else if(a >= 13 && a <= 16) {
        return 4;
    } else if(a >= 17 && a <= 20) {
        return 5;
    } else if(a >= 21 && a <= 24) {
        return 6;
    } else if(a >= 25 && a <= 28) {
        return 7;
    } else if(a >= 29 && a <= 32) {
        return 8;
    } else if(a >= 33 && a <= 36) {
        return 9;
    } else if (a === 0 || a > 36) {
        return 'Таких мест в вагоне не существует';
    }
}

getCoupeNumber(38);

/* Другое решение

function getCoupeNumber(seatNumber) {
    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    for (let i = 4; i <= 36; i = i + 4) {
        if (seatNumber <= i) {
            return Math.ceil(i / 4);
        }
    }
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(33); */

// Задача 3. Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки.
// Обратите внимание на окончание слова час - оно меняется в зависимости от цифры. Если вместо аргумента 
// приходит не число, дробное или отрицательное число - функция возвращает строку "ошибка проверьте данные". 
// Ограничение 600 минут (Моё решение)

function getTimeFromMinutes(minutes) {

    let numberHour = Math.trunc(minutes / 60);
    let numberMinutes = minutes % 60;
    
    if (typeof(minutes) !== 'number' || minutes < 0 || !Number.isInteger(minutes) || minutes > 600) {
        return'Ошибка, проверьте данные';
    }

    for(let i = 0; i <= 600; i = i + 1) {
        if (minutes < 60 || minutes >= 300) {
            return `Это ${numberHour} часов и ${numberMinutes} минут`;
        } else if (minutes >= 60 && minutes < 120) {
            return `Это ${numberHour} час и ${numberMinutes} минут`;
        } else if (minutes >= 120 || minutes < 300) {
            return `Это ${numberHour} часа и ${numberMinutes} минут`;
        }
    }
}

getTimeFromMinutes(60);


/* Другое решение
function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(180) */

//Задача 4. Написать функцию которая принимает в себя 4 аргумента и возвращает наибольшее число 
// из заданных аргументов. Если попадает не число или аргументов меньше 4, то возвращает 0.
//Моё решение

function findMaxNumber(a, b, c, d) {
    if (arguments.length < 4 || typeof(arguments[0, 1, 2, 3]) !== 'number') {
        return 0;
    } else {
       return Math.max(a,b,c,d);
    } 
}

findMaxNumber(85, 69, 74, 198);

/* Другое решение
function findMaxNumber(a, b ,c, d) {
    // Самое простое - это использовать Math.max :)
    // А оптимизировать такую проверку мы научимся совсем скоро
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}

findMaxNumber(1, 5, 6.6, 10.5);
findMaxNumber(1, 5, '6', '10'); */




