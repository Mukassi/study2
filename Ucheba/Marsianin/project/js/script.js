'use strict';

document.addEventListener('DOMContentLoaded', () =>{
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Я легенда",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const adv = document.querySelectorAll(".promo__adv img"),
          genre = document.querySelector(".promo__genre"),
          movieList = document.querySelector(".promo__interactive-list"),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector(".adding__input"),
          checkbox = addForm.querySelector('[type="checkbox"]');
          
          
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

    
        if (newFilm) {

            if (newFilm.length > 21){
                newFilm = `${newFilm.slice(0,21)}...`;
            }
            if(favorite){
                console.log("Добавляем любимый фильм");
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }
        event.target.reset();
    });

    const deleteAdv = (arr) =>{
        arr.forEach(item => {
            item.remove();
        });
        
    };
  
  
    genre.textContent = "Драма";
    
    const sortArr = (arr) =>{
        arr.sort();
    };
    
    
    
    function createMovieList(films, parent){
        parent.innerHTML = "";
        sortArr(films);
        films.forEach(function (film, i){
            parent.innerHTML += ` 
                <li class="promo__interactive-item"> ${i + 1}. ${film}
                    <div class="delete"></div>
                </li>`;
        });
        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener('click', ()=>{
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                
                createMovieList(films, parent);
        
            });
        });

    }

    
    
    deleteAdv(adv);
    createMovieList(movieDB.movies, movieList);
    
    
});