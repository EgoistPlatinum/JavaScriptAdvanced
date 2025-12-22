'use strict'

function generate(event) {
  console.log('Event 1')

}

const button = document.querySelector('.button')

button.addEventListener('mouseover', generate)

button.addEventListener('click', (event) => {
  console.log('event 2')
  button.removeEventListener('click', generate)
})

//Основные Темы:
//
// Подписка на события
// Обработка событий
// Отписка от событий
// Понятие всплытия событий
// Подписка и Обработка Событий:
//
// Встроенные обработчики в HTML, например, onclick, являются простым способом добавления событий, но они "засоряют" разметку.
// Рекомендуется использование addEventListener для подписки на события. Это позволяет добавлять несколько обработчиков на одно и то же событие и упрощает управление обработчиками.
// Пример добавления обработчика событий:```javascript const button = document.querySelector('.button'); button.addEventListener('click', function(event) { console.log(event); });
// Отписка от Событий:
//
// Важно удалять обработчики событий, которые больше не нужны, с помощью removeEventListener для избежания утечек памяти.
// Для удаления события необходимо передать в removeEventListener ту же функцию, что и при подписке.
// Виды Событий:
//
// Множество событий доступны в JavaScript, включая события мыши (click, mouseover), клавиатуры (keydown), форм (submit) и многие другие.
// Пример события мыши:```javascript button.addEventListener('mouseover', handlerFunction);
// Понятие Всплытия Событий:
//
// Всплытие – это механизм распространения события, когда оно сначала обрабатывается на самом вложенном элементе, а затем постепенно передаётся наружу к родительским элементам.