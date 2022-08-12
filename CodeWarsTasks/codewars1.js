'use strict';
//Задачка. Написать функцию, которая меняет все значения на противоположные

function opposite(number){
    if (number < 0) {
        console.log(Math.abs(number));
    } else if (number > 0) {
        console.log(number - (number * 2));
    } else if (number == 0) {
        number = -1 / number;
        if (number == Infinity) {
            console.log(0);
        } else {
            console.log(-0);
        }
    }
}
opposite(-0);
