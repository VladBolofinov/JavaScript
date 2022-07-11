'use strict';

//Задача 1
//Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и 
//возвращать строку с опытом. Желательно использовать деструктуризацию.

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

const {name, age, skills} = personalPlanPeter;

function showExperience(plan) {
    for (let key in skills) {
        return skills.exp[key];
    }
}
console.log(showExperience(skills));