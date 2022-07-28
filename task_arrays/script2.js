'use strict';

//Задача 3( с собеседований). Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку
//в обратном порядке. Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть 
//сообщение "Ошибка!".

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) === 'string') {
        console.log(((str.split('')).reverse()).join(''));   // split преобразует из строки в массив элементов
                                                            // reverse меняет символы местами в массиве
                                                            // join преобразует обратно в строку
    } else {
        console.log(`Ошибка!`);
    }   
}
reverse(someString);


// Задача 4. У вас есть банкомат, который выдаёт деньги из двух разных банков в разных валютах. Один банк основной
// с базовыми валютами, второй дополнительный с прочими валютами. Нужно создать главную функцию банкомата availableCurr
// которая принимает 2 аргумента: первый это массив со всеми доступными валютами из двух банков сразу (сейчас представим,
// что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас
// закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку "Нет доступных валют".

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const allCurrencies = baseCurrencies.concat(additionalCurrencies);

function availableCurr(arr, missingCurr) {
    let str = 'Доступные валюты:';
    let i = 0;
    if (arr.length <= 0) {
        console.log(`Нет доступных валют`);
    }
    for (let value of arr) {
        if (value !== missingCurr) {
            str += `\n  ${arr[i]}`;
            i++;
        } else {
            i++;
        }
    }
    console.log(str);
}
availableCurr(allCurrencies, 'EUR');

//Ниже другие паттерны решения:
/* 
const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    // Самый оптимальный вариант решения
    return str.split('').reverse().join('');

    // Решение при помощи цикла
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')


*/