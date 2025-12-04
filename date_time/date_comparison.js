'use strict'

// Основные Понятия
// Timestamp: числовое представление времени, основное понятие при сравнении дат.
//   Сравнение дат: способы и методы для определения отношений между двумя датами.
//   Преобразование Даты в Timestamp
// Чтобы упростить сравнение дат, первым делом их нужно конвертировать в timestamp.
//   Преобразование производится методом getTime().
//   Сравнение Дат
// Прямое сравнение (> , <):
// Можно сравнивать даты напрямую, так как JavaScript автоматически конвертирует даты в timestamp для сравнения.
//   Проверка на равенство (== , ===):
// При прямом сравнении даже одинаковые даты не будут равны из-за различия в ссылках объектов.
//   Для корректного сравнения на равенство используются timestamp, полученные методом getTime().
//   Рекомендации и Советы
// Для сравнения на равенство всегда преобразовывайте даты к timestamp с помощью getTime().
//   Упрощение кода с использованием приведения к числу (Number или +), но рекомендуется явное использование Number для прозрачности.

const firstDate = new Date(2024, 11, 11)

const secondDate = new Date(2024, 11, 12)

console.log(firstDate < secondDate)
console.log(firstDate == secondDate)
console.log(firstDate === secondDate)

console.log(firstDate.getTime() === secondDate.getTime())
console.log(Number(firstDate) === Number(secondDate))
console.log(+firstDate === +secondDate)

/*
  Сделать функцию, которая принимает пользователя, и
  проверяет, есть ли у него сегодня день рождения или нет
*/

const user = {
  name: 'Vladimir',
  birthDate: '12/23/2020'
}

function isBirthday(user) {
  const birthday = new Date(user.birthDate)
  const today = new Date()

  if (birthday.getMonth() !== today.getMonth()) {
    return false
  }

  return birthday.getDate() === today.getDate();
  
}