/* Практика ч.2 */ 
/* 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла */

/* Моё решение */

/* const personalMovieDB = {
    count: {},
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 1; i < 2; i++) {
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
personalMovieDB.count = numberOfFilms;
}

for (let i = 1; i < 2; i++) {
const a = prompt("Один из последних просмотренных фильмов?", "",);
for (let j = 1; j < 2; j++) {
     const b = prompt("На сколько оцените его?","");
     personalMovieDB.movies[a] = b;
    }
}

for(let i =1; i < 2; i++) {
    const c = prompt("Один из последних просмотренных фильмов?", "",);
    for(let j = 1; j < 2; j++) {
        const d = prompt("На сколько оцените его?","");
        personalMovieDB.movies[c] = d;
    }
}

console.log(personalMovieDB); */

/* Нормальное решение */

/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[a] = b;
}


console.log(personalMovieDB); */

/* 2)Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки, 
отменить ответ или ввести название фильма длиннее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться
    как str.length - и получить ее длину.) */


/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

console.log(personalMovieDB); */


/* 3) При помощи условий проверить PersonaMovieDB.count и если он меньше 10 - вывести сообщение 
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному из вариантов  - "Произошла ошибка".*/

/* let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms();

console.log(personalMovieDB);

function detectPersonalLevel() {
    if (personalMovieDB.count == 0) {
        alert('Произошла ошибка');
    } else if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    }
}

detectPersonalLevel(); */
