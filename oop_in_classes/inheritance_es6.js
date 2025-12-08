'use strict'

// const Book = function (title, author) {
//   this.title = title;
//   this.author = author;
// }
//
// Book.prototype.buy = function () {
//   console.log('Buy')
// }
//
// const AudioBook = function (title, author, lenMinutes) {
//   Book.call(this, title, author);
//   this.lenMinutes = lenMinutes;
// }
//
// AudioBook.prototype = Object.create(Book.prototype)
// AudioBook.prototype.constructor = AudioBook
//
// AudioBook.prototype.log = function () {
//   console.log(`${this.title} - ${this.lenMinutes} minutes`)
// }
//
// const book = new AudioBook('Lord of the Rings', 'Tolkien', 20 * 60)

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  buy() {
    console.log('Buy')
  }

}

class AudioBook extends Book {
  constructor(title, author, lenMinutes) {
    super(title, author);
    this.lenMinutes = lenMinutes;
  }

  log() {
    console.log(`${this.title} - ${this.lenMinutes} minutes`)
  }
}

const book = new AudioBook('Lord of the Rings', 'Tolkien', 20 * 60)

book.log()
book.buy()

//Основные пункты:
//
// Исходная цель: Переписать код с использованием ES6 классов для демонстрации их преимуществ перед старым синтаксисом.
// Шаг 1: Создание класса Book
// Создадим класс Book с конструктором, принимающим title и author.
// Добавим метод buy, который будет доступен у всех экземпляров класса.
// Шаг 2: Создание класса AudioBook
// Класс AudioBook наследует класс Book с использованием ключевого слова extends.
// В конструкторе класса AudioBook добавлен дополнительный параметр lengthInMinutes.
// Первой операцией в конструкторе является вызов super(title, author), который активирует конструктор родительского класса Book.
// Метод log добавлен для вывода информации в консоль.
// Обзор и сравнение:
// Показано, что создание классов с использованием ES6 значительно упрощает синтаксис, улучшая читаемость и удобство работы.
// В коде ES6 нет необходимости в ручной настройке прототипов и конструкторов, как это было в предыдущих версиях.