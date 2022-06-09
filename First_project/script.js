"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const firstLastMovie = prompt("Один из последних просмотренных фильмов?", "",);

const firstScore = prompt("На сколько оцените его?","");

const secondLastMovie = prompt("Один из последних просмотренных фильмов?", "",);

const secondScore = prompt("На сколько оцените его?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        [firstLastMovie]: firstScore,
        [secondLastMovie]: secondScore,
    },
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMovieDB.movies);

