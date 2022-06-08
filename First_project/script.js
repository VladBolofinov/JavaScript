"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const lastMovie = prompt("Один из последних просмотренных фильмов?", "",);

const score = prompt("На сколько оцените его?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        lastMovie: score,
    },
    actors: {},
    genres: [],
    privat: false
};


console.log(personalMovieDB.movies);

