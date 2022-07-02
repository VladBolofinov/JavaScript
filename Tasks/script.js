'use strict';

/* Задача 1. Создайте функцию которая будет вычислять объем и площадь полной поверхности куба. Эта функция 
принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки.
Если в функцию попал неправильный аргумент или вычислить значения невозможно
 - вернуть строку 'При вычислении произошла ошибка' */

 // Моё решение
 
function calculateVolumeAndArea(a) {
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
calculateVolumeAndArea(17);

console.log(typeof(calculateVolumeAndArea(17)));
