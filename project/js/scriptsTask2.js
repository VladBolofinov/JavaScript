/* Задания на урок:

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
*/

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

/* Задача 1. Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий. */
// Задача 2. Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// Задача 5. Фильмы должны быть отсортированы по алфавиту 

let strAddFilm = document.getElementsByTagName('input'), // Обращаемся к строке ввода, чтобы могли с ней работать
    btnAccept = document.getElementsByTagName('button'), // Обращаемся к кнопке, чтобы могли с ней работать
    listFilm = document.getElementsByClassName('promo__interactive-item'), // Обращаемся к списку, чтобы работать с ним
    movieList = document.querySelector('.promo__interactive-list'),
    deleteIcon = document.querySelectorAll('.delete'), // Возвращает NodeList(это не псевдомассив!!!это коллекция узлов)
    deleteIconArr = Array.from(deleteIcon); // NodeList превращаем в array, теперь можем перебирать через ForEach

    deleteIconArr.forEach((icon,index) =>{          //Перебираем массив, где в call-back func эл-т перебираемого массива
        icon.addEventListener('click',()=>{         //это icon.На каждый эл-т вешается eventListner,он сработает на клик
            listFilm[index].textContent = `Delete`; //после чего удалит строку.2ой аргумент index это порядковый номер 
        });                                         //эл-та массива,т.е. при клике на кнопку он будет понимать какой
    });                                             //номер строки ему нужно удалить!
    








function useForm(arr,var1,var2,var3) {
    btnAccept[0].addEventListener('click',(e) =>{ // Вешаем обработчик события, при клике будет что-то выполнять
       
        e.preventDefault();                       // При выполнении события уберёт дефолтное поведение(перезагрузку стр)

        if (var1[1].value.length < 21) {
            arr.push(var1[1].value);     // Если верно то добавит элемент в конец массива
        } else {
            let bigVar1 = var1[1].value.slice(0,21) + '...'; // Если >21 то обрежет строку и добавит 3 точки с конца
            arr.push(bigVar1);                      // и запишет в новую переменную, которую добавит в конец массива 
        }
        arr.sort();                        // Сортирует в алфавитном порядке массив

        var2.insertAdjacentHTML("beforeend", `<li class='promo__interactive-item'> 
        ${arr.length - 1}) ${arr[arr.length - 1]}</li>`);

        for (let i = 0; i < listFilm.length; i++) {
            var3[i].textContent = `${i+1}) ${arr[i]}`;  //Выгружает список фильмов из массива
            var3[i].insertAdjacentHTML("beforeend", `<div class='delete'></div>`); //Иконку корзины добавит
        } 


        
    });  
}
useForm(movieDB.movies,strAddFilm,movieList,listFilm);


