"use strict"

// Spoller Btn

// let spollerBtn = document.getElementById('header-spoller');
// const spollerIcon = document.querySelector('.header__spoller-icon');
// const spollerList = document.querySelector('.header__spoller-list');

// console.log(spollerBtn);
// console.log(spollerIcon);
// console.log(spollerList);

// spollerBtn.addEventListener('click', function(){
//  spollerIcon.classList.toggle('rotate');
//  spollerList.classList.toggle('_open');
//  });

//  document.addEventListener('click', function(e){
//   if(e.target.closest(".header__spoller-list-item")){
//     spollerIcon.classList.remove('rotate');
//     spollerList.classList.remove('_open');
//   }
//   })

// ================================================================================
// menu-burger
const iconBurger = document.querySelector('.icon-menu');
const headerMenu = document.querySelector('.header-bottom__menu');
const menuItem = document.querySelectorAll('.bottom-menu__item');  // получаем в константу все пункты меню

iconBurger.addEventListener('click', function (e) {
  iconBurger.classList.toggle('menu-open');
  headerMenu.classList.toggle('_open');
  document.body.classList.toggle('_lock');
}
);
console.log(iconBurger)

//  проходим циклом forEach по пунктам меню и назначаемм каждому по клику обработчик, который срабатывает при открытом мобильном меню
//  обработчик закрывает мобильное меню и возвращает иконку бургера-меню в начальное "закрытое" положение
menuItem.forEach(function(item){
  item.addEventListener('click', function (e){
    if (headerMenu.closest('._open')) {
      headerMenu.classList.remove('_open');
      iconBurger.classList.remove('menu-open');
    }
  })
})

// назначаем обработчик на весь document
// document.addEventListener('click', function(e){
//   // если мы кликнули не на блок меню, то забираем у меню user-header класс .open и оно закрывается
// if(!e.target.closest('.user-header')){
//   user_menu.classList.remove('open');
// }
// })


// ТАБЫ tab --в переводе с английского "вкладка"
const tabs = document.querySelectorAll('.tabs__item'); // получаем в константу все табы-вкладки на странице
const contents = document.querySelectorAll('.tabs__content-block');   // получаем в константу все блоки с контентом таба на странице

// проходим циклом forEach по коллекции вкладок:
tabs.forEach(function (tab, index) {
  // по клику добавляем выбранному табу класс active:
  tab.addEventListener("click", function () {
    //ПРЕДВАРИТЕЛЬНО проходим по всем табам удаляем класс active у предыдущего активного таба:
    tabs.forEach(function (tab) {
      tab.classList.remove("active");
    });
    // и добавляем текущему
    tab.classList.add("active");

    //проходим по всем блокам с контентом и удаляем класс active у предыдущего активного блока:
    contents.forEach(function (item) {
      item.classList.remove('active');
    })
    // для отображения содержимого в соответствии с выбранной вкладкой, добавляем блоку с контентом класс active (текущий индекс совпадает,
    //  т.к. кол-во вкладок и кол-во блоков с контентом одинаково)
    contents[index].classList.add('active');
  });

})


// ТАБЫ tab --в переводе с английского "вкладка"
const tabs2 = document.querySelectorAll('.news__tab-item'); // получаем в константу все табы-вкладки на странице
const contents2 = document.querySelectorAll('.news__tab-content');   // получаем в константу все блоки с контентом таба на странице

// проходим циклом forEach по коллекции вкладок:
tabs2.forEach(function (tab, index) {
  // по клику добавляем выбранному табу класс active:
  tab.addEventListener("click", function () {
    //ПРЕДВАРИТЕЛЬНО проходим по всем табам удаляем класс active у предыдущего активного таба:
    tabs2.forEach(function (tab) {
      tab.classList.remove("active");
    });
    // и добавляем текущему
    tab.classList.add("active");

    //проходим по всем блокам с контентом и удаляем класс active у предыдущего активного блока:
    contents2.forEach(function (item) {
      item.classList.remove('active');
    })
    // для отображения содержимого в соответствии с выбранной вкладкой, добавляем блоку с контентом класс active (текущий индекс совпадает,
    //  т.к. кол-во вкладок и кол-во блоков с контентом одинаково)
    contents2[index].classList.add('active');
  });

})






















// метод forEach:
const numbers = [1, 2, 3, 4, 5,];
numbers.forEach(function (item) {
  const square = item * item;
  console.log(`квадрат числа равен : ${square}`);
  console.log("квадрат числа равен:" + square);

})

// метод map: трансформирует один массив в другой при помощи функции-колбэка
// переданная методу map функция вызовется для каждого элемента, из результатов вызовов соберется новый массив 
const nums = [1, 2, 3, 4, 5, 6, 7,];
const square2 = nums.map(function (num) {
  return num * num
})
console.log(square2);

// метод filter() получает новый массив отфильтровав элементы с помощью коллбэк-функции. Функция выполнится
// для каждого элемента и метод примет решение включать этот элемент в новый массив или нет 
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
const evenOnly = nums2.filter(function (n) {
  let remainder = n % 2

  return remainder === 0
});
console.log(evenOnly);

// метод find() вернет первый найденный в массиве элемент, который подходит под условие  в переданной коллбэк-функции
// если в массиве нет подходящих элементов, то вернется undefined
// findindex() возвращает индекс первого подходящего элемента или -1 если подходящих нет

function isMyFavoriteHobby(item, index, array) {
  const myFavoriteHobby = "смотреть You Tube"

  return item === myFavoriteHobby
}

const currentToDoList = [
  "смотреть You Tube",
  "пить кофе",
  "кататься на велосипеде",
  "ходить в баню",
];

const tomorrowToDoList = [
  "пить кофе",
  "кататься на велосипеде",
  "ходить в баню",

];

console.log(currentToDoList.find(isMyFavoriteHobby));   // смотреть You Tube
console.log(tomorrowToDoList.find(isMyFavoriteHobby));  // undefined

// метод some() позволяет узнать есть ли в массиве хотябы один элемент, удовлетворяющий условию в коллбэк-функции
// коллбэк-функция вызывается для каждого элемента массива до тех пор, пока не вернет true или пока не закончатся элементы
// результатом (хранимым в константе isCLetter) будет булевое значение 

const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
const isCLetter = letters.some(function (item, index, array) {
  return item === 'c'
});
console.log(isCLetter); // true

// метод reverse() меняет порядок элементов в массиве на обратный

const array = [1, 2, 3, 4];
array.reverse();
console.log(array);
