'use strict'

function generate(event) {

  // console.log(event.target.getBoundingClientRect())

  console.log(window.scrollX)
  console.log(window.scrollY)
  console.log(document.documentElement.clientWidth)
  console.log(document.documentElement.clientHeight)

  const el = document.querySelector('.down')

  const rect = el.getBoundingClientRect()
  console.log(el.getBoundingClientRect())


  window.scrollTo({
    left: window.scrollX + rect.left,
    top: window.scrollY + rect.top,
    behavior: 'smooth'
  })
}

//ДОМ-Дерево: Объясняется структура веб-страницы, где элементы взаимодействуют как родители и дети.
// Viewport: Область, видимая пользователю, её размеры можно контролировать через CSS.
// Работа с элементами:
// Добавление Элементов: Создание 20 дивов с числами и оформление их стилями для наглядности.
// Позиционирование и Отступы:
// Понимание расположения пользователя с помощью свойств window.pageOffsetX и window.pageOffsetY.
// Размеры viewport пользователя устанавливаются через свойства clientWidth и clientHeight.
// Идентификация Элементов:
// Возможность определить местоположение и размеры любого элемента на странице через метод getBoundingClientRect.