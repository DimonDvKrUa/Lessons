/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const   adv = document.querySelectorAll('.promo__adv img'),
        genre = document.querySelector('.promo__genre'),
        bg = document.querySelector('.promo__bg'),
        promo = document.querySelectorAll('.promo__interactive-item'),
        promolist = document.querySelector('.promo__interactive-list');



adv.forEach (item => {
    item.remove();
});

genre.textContent = "ДРАМА";

// console.log(bg);
bg.style.cssText = 'background: url(img/bg.jpg) center center/cover no-repeat;';

promo.forEach (item => {
    item.remove();
});


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort();

console.log(promolist);

movieDB.movies.forEach((film, i) => {
    promolist.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${film}
                                <div class="delete"></div>
                            </li>`;
});





