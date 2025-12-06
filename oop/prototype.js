'use strict'

const Book = function (title, author) {
  this.title = title
  this.author = author

  this.isRead = false
}

Book.prototype.read = function () {
  this.isRead = true
}

Book.prototype.cover = 'Paper'

const lordOfTheRings = new Book('Lord of the Rings', 'Tolkien')
lordOfTheRings.read()
console.log(lordOfTheRings)
console.log(lordOfTheRings.cover)
console.log(lordOfTheRings.hasOwnProperty('cover'))
console.log(lordOfTheRings.hasOwnProperty('author'))

console.log(lordOfTheRings.__proto__)
console.log(lordOfTheRings.__proto__ === Book.prototype)
console.log(Book.prototype.isPrototypeOf(lordOfTheRings))
console.log(Book.prototype.isPrototypeOf(Book))

// Введение
// В данной лекции мы изучаем работу с прототипами в JavaScript, а именно: как дополнять функции-конструкторы и объекты дополнительными свойствами из прототипа и как управлять наследованием методов и свойств.
//
//   Создание функции-конструктора
// Создаем функцию-конструктор Book, которая принимает два параметра: title и author.
//   Присваиваем this.author и this.title значения, переданные в функцию: this.author = author; и this.title = title;.
// Создаем экземпляр книги через new Book("Lord of the Rings", "Tolkien").
//   Добавление методов и свойств
// Показан способ добавить свойство isRead и метод read() непосредственно в функции-конструктор. Однако этот подход неэффективен, поскольку каждый экземпляр будет содержать копии методов.
//   Вместо этого рекомендуется использовать прототипы.
//   Работа с прототипами
// Дополняем прототип Book.prototype новыми свойствами и методами. Например, добавляем метод read, который изменяет свойство isRead.
//   Показано, как методы и свойства, добавленные в прототип, доступны экземплярам, но не видны напрямую при перечислении свойств объекта.
//   Специфика прототипов
// Важное различие между свойствами/методами объекта и его прототипа.
//   Использование метода hasOwnProperty для проверки, является ли свойство или метод собственным у объекта.
//   Расширение встроенных объектов
// Рассмотрена возможность дополнения прототипов встроенных объектов, например, добавление новых методов к массивам. Но такая практика считается нежелательной, так как может вести к недокументированному и неочевидному поведению.