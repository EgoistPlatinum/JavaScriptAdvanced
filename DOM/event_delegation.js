'use strict'

const wrapper = document.querySelector('.wrapper')


for (let i = 0; i < 1000; i++) {
  const el = document.createElement('div')
  el.innerHTML = `User id ${i}`
  wrapper.appendChild(el)

  el.setAttribute('data-id', i)

  // el.addEventListener('click', function (event) {
  //   console.log(`Deleted user ${i}`)
  // })

}

wrapper.addEventListener('click', function (event) {
  console.log(event.target.getAttribute('data-id'))
  const i = event.target.getAttribute('data-id')
  console.log(`Deleted user ${i}`)
})


//Создание Списка Пользователей:
//
// Создание элемента-обертки (wrapper).
// Генерация списка из 100 пользователей с помощью цикла for и метода document.createElement.
// Добавление стилей для обертки, чтобы пользователи отображались вертикально и текст был белым.
// Проблема: При добавлении обработчика события к каждому элементу списка возрастает нагрузка на память из-за большого количества функций.
//
// Решение: Делегирование Событий:
//
// Объяснение принципа всплытия событий и как это помогает в делегировании.
// Добавление одного обработчика событий клика на wrapper вместо каждого элемента списка.
// Использование event.target для определения, какой пользователь был кликнут.
// Присвоение каждому элементу уникального атрибута data-id для идентификации.
// Использование Делегирования Событий:
//
// При клике на пользователя, его data-id извлекается и используется для удаления пользователя или других действий.