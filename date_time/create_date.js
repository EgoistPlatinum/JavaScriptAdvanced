'use strict'

// Введение
// Даты - сложная тема из-за високосных лет, разной длины месяцев и часовых поясов.
//   Существует множество библиотек для работы с датами, но мы сосредоточимся на основах.
//   Создание объекта Date
// Текущая дата:
//   new Date() создает объект с текущей датой и временем.
//   Пример: let now = new Date();
// Дата из строки:
//   Можно создать дату из строки формата "YYYY-MM-DD" или "DD-MM-YYYY".
//   Пример: new Date("2023-01-01");
// Важно: формат строки может варьироваться и не всегда распознаваться корректно.
//   Дата из чисел:
//   Создание даты из чисел: год, месяц (начиная с 0), день.
//   Пример: new Date(2023, 0, 1); // 1 января 2023
// Месяцы начинаются с 0 (январь) до 11 (декабрь).
//   Можно передавать значения за пределами допустимого (напр., 31 + 20 дней).
// Работа с датами
// Получение компонентов даты: getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes(), getSeconds(), getMilliseconds().
//   Установка компонентов даты: setFullYear(), setMonth(), setDate(), и т.д. позволяют изменить дату.
// Timestamp (Метка времени)
// Timestamp - количество миллисекунд, прошедших с 1 января 1970 года.
//   Создание даты из timestamp: new Date(0); создает дату “Thu Jan 01 1970”.
// Метод Date.now() возвращает текущий timestamp.

const date = new Date()

// console.log('date', date)

console.log(new Date('12-04-2025'))
console.log(new Date('12/04/2025'))
console.log(new Date('2025/12/04'))
console.log(new Date('4 december 2025'))

console.log(new Date(2025, 12, 4)) //Sun Jan 04 2026 00:00:00

console.log(new Date(0)) //Thu Jan 01 1970
console.log(new Date(1 * 24 * 60 * 60 * 1000))
console.log(Date.now())
console.log(new Date(Date.now()))

console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())


console.log(date.setFullYear(2050))
console.log(new Date(date.setFullYear(2050)))