'use strict'

const Book = function (title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.buy = function () {
  console.log('Buy')
}

const AudioBook = function (title, author, lenMinutes) {
  Book.call(this, title, author);
  this.lenMinutes = lenMinutes;
}

AudioBook.prototype = Object.create(Book.prototype)
AudioBook.prototype.constructor = AudioBook

AudioBook.prototype.log = function () {
  console.log(`${this.title} - ${this.lenMinutes} minutes`)
}

const book = new AudioBook('Lord of the Rings', 'Tolkien', 20 * 60)

console.log(book)
book.log()
book.buy()

console.log(book instanceof AudioBook)
console.log(book instanceof Book)

// Цели лекции:
//
//   Понять механизм наследования в JavaScript.
//   Узнать о прототипном наследовании без использования классов ES6.
//   Основные понятия:
//
//   Object.Create и PrototypeChain: основы для реализации наследования.
//   Constructor Functions: использование для создания объектов перед введением классов ES6.
//   Контекст использования наследования:
//
//   Пример с книгами (обычными, аудиокнигами и электронными книгами).
// Цель: избегать дублирование кода и облегчить работу с общим функционалом.
//   Шаги реализации наследования:
//
//   Создание базового класса (книга):
// Использование конструктора для определения свойств (например, название и автор).
// Добавление метода через прототип (например, метод покупки).
// Реализация наследования (аудиокнига):
// Копирование и расширение базового класса (добавление нового свойства, например, длительность).
// Избегание дублирования с помощью вызова базового конструктора через call.
//   Связывание прототипов с Object.create для доступа к методам базового класса.
//   Корректировка конструктора для точного отображения типа создаваемого объекта.
//   Важные моменты:
//
//   Важность правильного порядка операций при установке прототипа и добавлении методов.
//   Использование instanceof для проверки принадлежности объекта к определенному классу или его предку.