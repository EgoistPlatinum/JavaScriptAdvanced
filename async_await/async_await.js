"use strict";

async function getProducts() {
  // fetch('https://dummyjson.com/products')
  //   .then(respons => respons.json())
  //   .then(products => console.log(products))
  const productsResponse = await fetch('https://dummyjson.com/products')
  const {products} = await productsResponse.json()
  console.log(products)

  const productResponse = await fetch(`https://dummyjson.com/products/${products[0].id}`)
  const product = await productResponse.json()
  console.log(product)

}

// getProducts()

console.log('End')

//Основы:
//
// Пройдено использование промисов через .then() и .catch()
// Преход к более современному методу работы с промисами: async/await
// async/await предпочтительнее из-за удобства и линейности написания кода
// Пример использования .then() и .catch():
//
// Создание функции getProduct для получения продуктов с использованием fetch()
// Обработка ответа с .then(), без использования .catch() пока
// Замечание об асинхронности запроса, не блокирующем основной поток
// Переписываем на async/await:
//
// Превращаем функцию в асинхронную с ключевым словом async
// Для каждой асинхронной операции используем await для ожидания результата, не блокируя поток
// Вся функция теперь по умолчанию возвращает промис
// Преимущества async/await:
//
// Код выглядит более линейно и понятно, похож на синхронный код
// Упрощает работу с последовательными асинхронными операциями
// Автоматически возвращает промис из асинхронной функции
// Работа с несколькими запросами:
//
// Демонстрация линейного выполнения нескольких асинхронных запросов с await
// Возможность деструктурировать ответы прямо на месте
// Обработка ошибок:
//
// Ввод в использование try/catch для обработки ошибок в асинхронных функциях
// Показан пример неправильного URL, вызывающего ошибку

async function getProducts1() {

  try {
    const productsResponse = await fetch('https://dummyjson.com/products')

    if (!productsResponse.ok) {
      throw new Error('Something went wrong')
    }

    const {products} = await productsResponse.json()
    console.log(products)

    const productResponse = await fetch(`https://dummyjson.com/products/${products[0].id}`)
    const product = await productResponse.json()
    console.log(product)
  } catch (error) {
    console.log(error => console.log(error))
  } finally {
    console.log('Finally')
  }
}

getProducts1()

//Основная Идея: Обработка исключений при асинхронном программировании важна для отлавливания ошибок на разных этапах выполнения асинхронного кода. В JavaScript это удобно делать с использованием конструкции try-catch в сочетании с async/await.
//
// Структура Лекции:
//
// Введение в Проблему:
// При использовании async/await для асинхронных операций можно столкнуться с ошибками.
// Традиционная обработка через .catch() может усложнить код.
// Решение с Try-Catch:
// В синтаксис async/await встроено использование блоков try-catch для обработки исключений.
// try {...} пытается выполнить код внутри блока. При ошибке управление передаётся в блок catch {...}, где ошибка может быть обработана.
// Примеры:
// Демонстрация с имитацией ошибки показывает, как try-catch ловит исключения на разных этапах.
// Обработка неверных ответов сервера и статусов HTTP (например, 404) через выбрасывание исключений внутри try и последующую их обработку в catch.
// Финализация с Finally:
// Блок finally используется для выполнения кода после try и catch, вне зависимости от того, была ли ошибка.
// Пример его использования и полезность в контексте асинхронных операций.
// Распространённость Try-Catch:
// Try-catch применим не только к асинхронным операциям, но и к синхронному коду.
// Примеры с обработкой ошибок при работе с JSON и константами.