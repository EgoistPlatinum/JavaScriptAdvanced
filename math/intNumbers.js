'use strict'

// Цель лекции: Научиться использовать Internationalization API для красивого отображения чисел, валют и других единиц в зависимости от локализации.
//
//   Основная проблема:
//   В разных странах числа, валюта, и другие единицы могут отображаться по-разному. Например, разделители тысяч и дробей, символы валют и так далее.
//   Решение:
// Internationalization API (Intl) – это браузерный API, который позволяет форматировать числа, даты и времена в соответствии с локалью пользователя.
//   Работа с Intl для отображения чисел:
//   Определение локали и опций:
//   Локаль: Язык и регион пользователя определяются через строчный код (например, ru-RU для России).
// Опции: Позволяют настроить стиль отображения (валюту, единицы измерения, проценты и т.д.).
// Форматирование валют:
// Используется Intl.NumberFormat с указанием локали и опций, включая тип currency и конкретную валюту (например, RUB для рублей).
// Примеры использования:
//   Вывод суммы в рублях с символом рубля и разделителями.
//   Адаптация формата под разные регионы (например, отличие формата долларов США от рублей в России).
// Изменение вывода для арабских цифр и других локалей.
//   Дополнительные возможности:
//   Форматирование десятичных и целых чисел, процентов.
//   Вывод единиц измерения (например, градусы Цельсия).
// Опция useGrouping для управления группировкой чисел по разрядам.
//   Настройка и использование:
// Создание объекта Intl.NumberFormat с нужными параметрами для локали и опций.
//   Применение метода .format() к числу для получения отформатированной строки.


const optionsRub = {
  style: 'currency',
  currency: 'RUB',
}

const optionsDollar = {
  style: 'currency',
  currency: 'USD',
}

const options = {
  style: 'decimal',
}

const options5 = {
  style: 'unit',
  unit: 'celsius',
}

console.log(new Intl.NumberFormat('ru-RU', optionsRub).format(23000))
console.log(new Intl.NumberFormat('en-EN', optionsDollar).format(23000))

console.log(new Intl.NumberFormat('ru-RU', options).format(23000))

console.log(new Intl.NumberFormat('ru-RU', options5).format(25))

/*
  Напиши функцию, которая принимает 3 параметра:
  - Сумма
  - Валюта исходная
  - Валюта для конвертации
  И возвращает строку уже с конвертируемой суммы с постфиксом
  валюты. Если не смог, то null
*/

const convert = (sum, fromCurrency, toCurrency) => {

  const allCurrencies = [
    {name: 'RUB', multiplier: 1 / 80},
    {name: 'USD', multiplier: 1},
    {name: 'EUR', multiplier: 1.1}
  ]

  const initial = allCurrencies.find(item => item.name === fromCurrency)
  if (!initial) return null

  const final = allCurrencies.find(item => item.name === toCurrency)
  if (!final) return null

  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: toCurrency
  }).format(sum * initial.multiplier / final.multiplier)
}

console.log(convert(10000, 'RUB', 'USD'))
console.log(convert(10000, 'RUB', 'EUR'))
console.log(convert(10000, 'USD', 'EUR'))