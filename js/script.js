"use strict";

const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один із останніх переглянутих філмів?", ''),
    b = prompt("На скільки ви його оцінюєте?", ''),
    c = prompt("Один із останніх переглянутих філмів?", ''),
    d = prompt("На скільки ви його оцінюєте?", '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);