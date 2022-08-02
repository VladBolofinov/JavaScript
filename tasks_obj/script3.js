/* Задача:

У вас есть список учеников, которые хотят поиграть в игру:

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. 
Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

Пример:

sortStudentsByGroups(students)  =>

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi'
]
Если убрать одно студента из списка, то результат будет:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: -'
]
А если добавить одного, то:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi, Somebody'
]
То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда. */

'use strict';
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Karol'];

function sortStudentsByGroups(arr) {
    
//Сортируем имена по алфавиту
students.sort();
//Сортируем по 3 человека по алфавиту в новый массив
let team1 = [];
let team2 = [];
let team3 = [];
let i = 0;
let lastStudents = 'Оставшиеся студенты:';
let returnData = [];
for (let value of arr) {
    if (i <= 2) {
        team1[i] = `${value}`;
        i++;
    } else if (i <= 5) {
        team2[i - 3] = `${value}`;
        i++;
    } else if (i <= 8) {
        team3[i - 6] = `${value}`;
        i++;
    } else if (i <= 9 ) {
        lastStudents += ` ${value}`;
    } else if (i <= 10) {
        lastStudents += ` ${value}`;
    }
}

if (lastStudents === 'Оставшиеся студенты:') {
    lastStudents += ` -`;
}

returnData[0] = team1;
returnData[1] = team2;
returnData[2] = team3;
returnData[3] = lastStudents;
return console.log(returnData);

}
sortStudentsByGroups (students);

//РЕШЕНИЕ ЗДОРОВОГО ЧЕЛОВЕКА
function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
}

sortStudentsByGroups(students);