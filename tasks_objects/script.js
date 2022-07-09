'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

//console.log(options.name);
//delete options.name;
let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
        } else {
            console.log(`Свойство ${key} имеет значение ${options[key]}`);
            counter++;
        }
    }

console.log(counter);
console.log(Object.keys(options).length);



/* Задача 1 Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта. */


let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

/*Задача 2 Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false */


//First pattern
let schedule = {};

/* function isEmpty(obj) {
    if ((Object.keys(schedule).length) === 0) {
        return true;
    } else {
        return false;
    }
} */
//console.log(isEmpty(schedule));


//Second pattern
function isEmpty(obj) {
    for (let key in obj) {
      // если тело цикла начнет выполняться - значит в объекте есть свойства
      return false;
    }
    return true;
  }

console.log(isEmpty(schedule));

//Задача 3
/* У нас есть объект, в котором хранятся зарплаты нашей команды:


Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0. */

//First pattern
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };


function getSumSalaries(obj) {
    for (let key in obj) {
     let sum = salaries.John + salaries.Ann + salaries.Pete;
     return sum;  
    }
    return 0;
}
console.log(getSumSalaries(salaries));

//Second pattern
/* let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum);  */


let menu = {
    width: 200,
    height: 300,
    title: 500
  };
  
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }
multiplyNumeric(menu);
  console.log(menu);

