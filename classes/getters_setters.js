'use strict'

const task = {
  title: 'Learn JavaScript',
  dueTo: new Date('2026/01/01'),

  // isOverdue() {
  //   return this.dueTo < new Date();
  // }

  get isOverdue() {
    return this.dueTo < new Date();
  },

  set isOverdue(isOver) {
    if (!isOver) {
      this.dueTo = new Date();
    }
  },
}

// console.log(task.isOverdue())
console.log(task.isOverdue)

task.isOverdue = true
console.log('task', task)


class Task {
  constructor(title, dueTo) {
    this.title = title;
    this.dueTo = dueTo;
  }

  get isOverdue() {
    return this.dueTo < new Date();
  }

  set dueDate(date) {
    if (date < new Date()) {
      return;
    }

    this.dueTo = date;

  }

}

const task2 = new Task('Learn JavaScript Advanced', new Date('2026/06/01'))

console.log('task2' , task2.dueDate = new Date('2026/07/01'))
console.log('task2' , task2)

// Общее понятие:
//   Геттеры и сеттеры - способы получения и установки значений свойств объектов и классов, позволяющие управлять внутренним состоянием.
//   Используются для валидации данных и выполнения бизнес-логики при обращении к свойствам.
//   В контексте объектов:
//   Пример: объект "задача" с свойствами title и dueDate.
//   Геттер позволяет получить значение, обращаясь к свойству как к обычному свойству.
//   Пример: проверка просрочена ли задача (isOverdue).
//   Сеттер позволяет установить значение, также обращаясь к свойству, но при этом передавать значение.
//   Пример: установка даты “просрочено”.
//
// Проблемы и валидация:
//   Геттеры и сеттеры могут привести к бесконечной рекурсии при неправильном обращении к свойствам.
//   Решение: использование приватных свойств или свойств с нижним подчеркиванием для внутреннего состояния.
//   Валидация данных при установке: пример с проверкой дат на будущее.