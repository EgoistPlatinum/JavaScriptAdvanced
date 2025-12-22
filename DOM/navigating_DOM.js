'use strict'

const wrapper = document.querySelector('.wrapper')

// console.log(wrapper)

const inner = document.querySelector('.inner')

// console.log([...inner.children])
//
// console.log(inner.parentElement)

const button = document.querySelector('.button')

// console.log(button.closest('.wrapper'))

console.log(button.previousElementSibling)
console.log(button.parentElement)

console.log(button.nextElementSibling)
console.log(button.nextSibling)

console.log(button.parentElement.children)

//Доступ к элементам:
// Document Query Selector: Используется для получения элементов по селектору.
// Пример: document.querySelector('.wrapper') для доступа к элементу с классом wrapper.
// Работа с дочерними элементами:
// Child Nodes: Получение списка всех дочерних узлов, включая текстовые узлы.
// Обращение: element.childNodes.
// Children: Получение только дочерних элементов (игнорирует текстовые узлы).
// Обращение: element.children.
// Возвращает HTMLCollection, которая может быть преобразована в массив.
// Доступ к родителям элементов:
// Parent Node / Parent Element: Получение непосредственного родительского элемента.
// Оба возвращают родительский элемент, но parentElement избирательно возвращает только узлы элементов.
// Поиск элемента выше по дереву:
// Closest: Позволяет найти ближайшего родителя по заданному селектору.
// Пример: element.closest('.wrapper') найдет ближайший элемент с классом wrapper, поднимаясь вверх по DOM-дереву.
// Перемещение между соседними элементами:
// PreviousElementSibling / NextElementSibling: Доступ к предыдущему или следующему элементу на том же уровне иерархии.
// PreviousSibling и NextSibling также существуют, но могут возвращать текстовые узлы.
// Получение заданного элемента через родителя:
// Для доступа к определенному элементу, может потребоваться сначала получить родителя (ParentElement), а затем использовать children для доступа к коллекции дочерних элементов.
// Примечания:
// Можно инициировать поиск элементов не только от document, но и от заданного элемента, что изменяет начальную точку поиска.
// QuerySelector и Closest позволяют выполнять поиск вниз и вверх по DOM-дереву соответственно.