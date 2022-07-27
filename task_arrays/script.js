'use strict';

// Задача 1. Напишите функцию showFamily, которая будет принимать в себя массив строк и 
// возвращать сообщение в нужном формате. Имена подставляются автоматически из массива. 
// Если массив пустой, то выводится сообщение "семья пуста".

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length <= 0) {
        return `Семья пуста`;
    } else {
        return `Семья состоит из: ${arr.join(' ')}`;   //Метод .join превращает массив в строку
    }
}
showFamily (family);

// Задача 2. Напишите функцию standardizeStrings которая будет принимать в себя массив строк
// и будет выводить в консоль эти строки в нижнем регистре.

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin',];

function standardizeStrings(arr) {
    for (let i = 0; i < arr.length; i++)
        console.log(arr[i].toLowerCase());
}
standardizeStrings(favoriteCities);

//Решение двух задач другим способом
/* 
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(member => {
        str += `${member} `
    });

    return str;
}

showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}

standardizeStrings(favoriteCities);

*/