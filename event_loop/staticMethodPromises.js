'use strict'

const promise = new Promise((resolve) => {
  console.log('Constructor')
  setTimeout(() => {
    resolve('Timer')
  }, 1000)
})

promise.then((data) => console.log(data))

Promise.reject(new Error('Error')).catch((err) => console.log(err))
Promise.resolve('Instant').then((data) => console.log(data))

//Основы
// Promise: Объект, представляющий завершение или неудачу асинхронной операции.
// Статические методы: Методы, доступные на самом классе, а не на экземплярах класса.
// Упрощение создания Promise
// Resolve
// Используется для мгновенного возврата успешно завершенного Promise.
// Пример использования: Promise.resolve('Success'). После этого можно использовать .then() для обработки результата.
// Reject
// Применяется для мгновенного возврата отклоненного Promise.
// Пример: Promise.reject(new Error('Error')). Используется .catch() для обработки ошибки.
// Практический пример
// Сравнение асинхронного и мгновенного Promise:
// Создание асинхронного Promise через конструктор и использование setTimeout.
// Мгновенное создание Promise с Promise.resolve.
// Наблюдение за порядком выполнения: сначала синхронный код, затем мгновенный resolve, а потом асинхронный.
// Влияние синхронных операций:
// Демонстрация влияния длительных синхронных операций на выполнение Promise.
// Пояснение, что содержимое Promise выполняется синхронно до асинхронной части (setTimeout).
// Error Handling:
// Объяснение аналогичного использования Promise.reject и handling ошибок через .catch().