'use strict';


const numberOfFilms = +prompt('Скільки фільмів ви переглянули ?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один з останніх переглянутих фільмів ?', ''),
      b = prompt('На скільки Ви оцінюєте його ?', ''),
      c = prompt('Один з останніх переглянутих фільмів ?', ''),
      d = prompt('На скільки Ви оцінюєте його ?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

      