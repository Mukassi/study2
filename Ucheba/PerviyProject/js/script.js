"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function (){
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {
        for(let i = 0; i< 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", ""),
                  b = prompt("На сколько оцените его?", "");
    
            if (a != "" && b != "" && a != null && b != null && a.length < 50 && b.length < 50){
                personalMovieDB.movies[a] = b;
            } else{
                i--;
            }
        }
    },
    detectPersonalLevel: function (){
        if (personalMovieDB.count < 10){
            alert("Просмотрено довольно мало фильмов");
            
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            alert("Вы классический зритель");
            
        } else if ( personalMovieDB.count >= 30){
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function (hidden){
        if (!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function (){
        for (let i = 1; i < 4; i++){ 
            let a = prompt (`Ваш любимый жанр под номером ${i}`);
            if (a != null || a != '' || a != false){
                personalMovieDB.genres[i - 1] = a;
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach ( function(item, i) {
            console.log(`Любимый жанр №${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat === true){
            personalMovieDB.privat = false;
        } else { 
            personalMovieDB.privat = true;
        }
    }
};
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();
