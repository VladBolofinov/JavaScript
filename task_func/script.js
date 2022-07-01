/* 'use strict';

function sayHello(userName) {
    const hello = 'Привет';
    return hello + ' ' + userName;
}

console.log(sayHello('Антон')); */

/* 'use strict';

function returnNeighboringNumbers(b) {
    let a = b - 1;
    let c = b + 1;
    const arr = [a, b, c];
    return arr;
}

console.log(returnNeighboringNumbers(25)); */

/* 'use strict';

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

console.log(getMathResult(10, 5));

 */

/* function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }
    let str = '';
    for (let i = 1; i <= times;i++) {
        if (i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }
    return str;
}

console.log(getMathResult(10, 14));


let answer = prompt("Какое официальное название JS?", "");
if (answer === "ECMAScript") {
    alert("True!");
} else {
    alert("Не знаете? ECMAScript!");
}


let name, admin;
name = 'John';
admin = name;
alert(admin); */

/* Первая задачка
let a = +prompt('Введите первое число', ' ');
let b = +prompt('Введите второе число', ' ');
let c = a + b;
alert(c); */

/* Вторая задачка */

/* alert( (+(1.35 * 10 / 10)).toFixed(1) );
alert( +(6.35 * 10 / 10).toFixed(1) ); 
alert( Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4 */

/* Третья задачка */

'use strict';


for (let i = 0; i < 2; i++) {
    let answer = prompt("Введите числовое значение", " ");
    if (typeof(answer) != String) {
        alert('done');
    } else {
        alert('error');
        i--;
    }
}
console.log(typeof(answer));

function multiply(a, b) {
    let c = a * b;
    return c;
  }
multiply(5,8);

function ucFirst(a) {
    a.toUpperCase();
    return;
}

console.log('PrivetVsem'.toUpperCase());