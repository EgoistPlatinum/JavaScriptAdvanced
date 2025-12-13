'use strict'

/* Сделать функцию, которая принимает строку и текст ошибки и возвращает уже Promise с JSON из тела запроса */

function getData(url, errorMessage, method = 'GET') {
  return fetch(url, {method})
    .then(response => {
      if (!response.ok) {
        throw new Error(`${errorMessage}: ${response.status}`);
      }
      return response.json();
    });
}

getData('https://dummyjson.com/products', 'Can not get data')
  .then(response => {
    const products = response.products;
    return getData(`https://dummyjson.com/products/${products[0].id}`, 'Can not get product');
  })
  .then(product => {
    console.log(product);
  })
  .catch(error => {
    console.log(error);
    const el = document.querySelector('.filter');
    if (el) {
      el.innerHTML = error.message;
    }
  });

//Цель: Упростить выполнение HTTP-запросов и работы с ответами от сервера через создание универсальной функции.
//
// Задача: Рефакторинг кода для создания функции getData, выполняющей HTTP-запрос методом GET и обработку ответа.
//
// Шаги:
//
// Создание функции getData:
// Функция принимает два параметра: URL (адрес запроса) и errorMessage (сообщение об ошибке при неудаче запроса).
// Выполняет HTTP-запрос используя fetch.
// Обрабатывает ответ: конвертирует в JSON, проверяет на наличие ошибок.
// Обработка ответа:
// Проверяет статус ответа (response.ok).
// В случае успеха возвращает преобразованный в JSON ответ.
// При ошибке генерирует исключение с указанным сообщением об ошибке.
// Использование getData для упрощения кода:
// Вызывает getData для выполнения запросов.
// Удаляет дублирование кода при множественных запросах.
// Преимущества подхода:
// Код становится короче и чище.
// Обеспечивается централизованная обработка ошибок и преобразование ответа.
// Расширение функционала getData:
// Возможность добавления других HTTP-методов (POST, PUT, и др.) путем передачи метода как параметра.
// Добавление тела запроса (body) для методов, требующих передачу данных.