'use strict';

//Задача 1
//Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и 
//возвращать строку с опытом. Желательно использовать деструктуризацию.

//const personalPlanPeter = {
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

const {languages, programmingLangs, exp} = personalPlanPeter.skills;
const {name, age, skills} = personalPlanPeter;

function showExperience(obj,obj2) {
    for (let key in obj) {
        if (typeof(obj[key]) === 'object') {
            for (let i in obj[key]) {
                //console.log(`Свойство ${i} имеет значение ${obj[key][i]}`);
            }
            } else {
                //console.log(`Свойство ${key} имеет значение ${obj[key]}`);
            }
        }

    for (let key in obj2) {
        if (typeof(obj2[key]) === 'object') {
            for (let i in obj2[key]) {
                //console.log(`Свойство ${i} имеет значение ${obj2[key][i]}`);
            }
            } else {
                //console.log(`Свойство ${key} имеет значение ${obj2[key]}`);
            }
        }
        return exp;
    }
    

showExperience(personalPlanPeter, programmingLangs);

console.log(showExperience(personalPlanPeter,programmingLangs));


//Задача 2. Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными
// и возвращать строку в нужном виде.

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

const {languages, programmingLangs, exp} = personalPlanPeter.skills;
const {js,php} = personalPlanPeter.skills.programmingLangs;

function showProgrammingLangs(obj,obj2) {
    let answ;
    for (let key in obj) {
        if (typeof(obj[key]) === 'object') {
            for (let i in obj[key]) {
                if (typeof(obj[key][i]) === 'object') {
                    for(let j in obj[key][i]) {
                    }
                }
            }
        }
    }
    if ((Object.keys(personalPlanPeter.skills.programmingLangs).length) <= 0) {
        return console.log(" ");
    } else {
    // function returnAnswer () {
        for (let key in obj2) {            
                answ = console.log(`Язык ${key} изучен на ${obj2[key]}`);
                return answ;
            }
            
        // }
        //returnAnswer();
    }
    //return returnAnswer(); 
}

showProgrammingLangs(personalPlanPeter,personalPlanPeter.skills.programmingLangs);





//Задача 3

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
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

//Задача 1

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

showExperience(personalPlanPeter);

//Задача 2

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }

    return str;
}

showProgrammingLangs(personalPlanPeter);