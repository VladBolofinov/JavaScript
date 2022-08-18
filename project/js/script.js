'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
//Задания на урок:
//Задача 1. Удалить все рекламные блоки со страницы (правая часть сайта)
const div = document.getElementsByTagName('div');
div[19].remove();
//Задача 2. Изменить жанр фильма, поменять "комедия" на "драма".
div[5].textContent = 'ДРАМА';
//Задача 3. Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//          Реализовать только при помощи JS
div[4].style.backgroundImage = 'url(img/bg.jpg)';
//Задача 4. Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту
const liFilm = document.getElementsByClassName('promo__interactive-item');
movieDB.movies.sort();
for (let i = 0; i < liFilm.length; i++) {
    liFilm[i].textContent = `${i+1}) ${movieDB.movies[i]}`;
}
//Задача 5. Добавить нумерацию выведенных фильмов
//Вверху сделано
//Другой паттерн задачи 4,5.

/* 
movieList.innerHTML = ""; --- (очистит блок т.к. мы вставляем пустую строку но нужно применить
    querySelector )
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
}); */


btnAccept[0].addEventListener('click',(event) =>{ // Вешаем обработчик события, при клике будет что-то выполнять
    event.preventDefault();                       // При выполнении события уберёт дефолтное поведение(перезагрузку стр)
    movieDB.movies.push(strAddFilm[1].value);     // При выполнении добавит элемент в конец массива
    movieDB.movies.sort();                        // Сортирует в алфавитном порядке массив
    testInner.insertAdjacentHTML("beforeend", `<li class='promo__interactive-item'> 
    ${movieDB.movies.length - 1}) ${movieDB.movies[movieDB.movies.length - 1]}</li>`);
    for (let i = 0; i < listFilm.length; i++) {
        listFilm[i].textContent = `${i+1}) ${movieDB.movies[i]}`;  //Выгружает список фильмов из массива
    }
});



