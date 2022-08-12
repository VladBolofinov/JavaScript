'use strict';

//Задача. Напишите функцию, которая убирает все восклицательные знаки из строки.

function removeExclamationMarks(s) {
    s = s.split('');
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '!') {
            delete s[i];
        }
    }
    s = s.join('');
    return console.log(s);
  }
removeExclamationMarks('hap!py!Bir!thd!a!y!!!!');


//Задача. Напишите функцию, которая вернет результат значений элементов массива по порядку.

function grow(x){
let total = 1;
for (let i = 0; i < x.length; i++) {
    total *= x[i];
}
return console.log(total);
}
grow([1,8,7,9,15,35,99]);

