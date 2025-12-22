'use strict'

// console.log(document.head)

const el = document.querySelector('.wrapper')
const elList = document.querySelectorAll('meta')

console.log('1', el)
console.log('2', elList)


const el3 = document.getElementsByClassName('wrapper')

console.log('3', el3)

const el4 = document.getElementsByTagName("div")

console.log('4', el4)

const button = document.createElement('button')

button.textContent = 'Click me'

el.append(button)
// el.prepend(button)
// el.after(button)
// el.before(button)

function generate() {

  console.log(el.parentNode)

  el.remove()
}

//1. Взаимодействие с документом:
// Получение корневого элемента документа document.
// Условия доступа к documentElement, head, и body.
// 2. Выбор элементов:
// Использование querySelector и querySelectorAll для выбора одного или нескольких элементов соответственно.
// Примеры выбора элементов по ID (getElementById), классу (getElementByClassName), и тегу (getElementByTagName).
// 3. Взаимодействие с элементами:
// Работа с классами элементов через classList (добавление, удаление, проверка наличия, замена классов).
// Изменение атрибутов с помощью методов типа setAttribute и toggleAttribute.
// Управление содержимым элемента через свойства innerHTML и innerText.
// Управление скроллингом.
// 4. Создание и добавление элементов:
// Метод createElement для создания новых элементов.
// Добавление элементов с помощью append, prepend, before, и after.
// 5. Удаление элементов:
// Использование remove для удаления элементов.