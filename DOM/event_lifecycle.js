'use strict'

document.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOMContentLoaded')
  console.log(e)
})

window.addEventListener('load', (e) => {
  console.log('load')
  console.log(e)
})

// window.addEventListener('beforeunload', (e) => {
//   console.log('beforeunload')
//   console.log(e)
//   e.preventDefault()
//   e.returnValue = 'Are you sure?'
// })

//Основные моменты:
//
// События загрузки документа:
// DOMContentLoaded:
// Срабатывает, когда DOM-дерево полностью построено, не дожидаясь окончания загрузки стилей, изображений и фреймов.
// Использование: document.addEventListener('DOMContentLoaded', function() { console.log("DOM fully loaded and parsed"); });
// load:
// Срабатывает, когда полностью загружен весь документ, включая все зависимые ресурсы (стили, изображения).
// Использование: window.addEventListener('load', function() { console.log("Page fully loaded"); });
// События выгрузки документа:
// beforeunload:
// Срабатывает перед началом выгрузки страницы. Позволяет задать вопрос пользователю, действительно ли он хочет покинуть страницу.
// Используется для предотвращения потери несохранённых данных.
// Ограничения: Нельзя кастомизировать текст системного диалогового окна.
// Пример:```javascript window.addEventListener('beforeunload', function (e) { e.preventDefault(); e.returnValue = ''; });