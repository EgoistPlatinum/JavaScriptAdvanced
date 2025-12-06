'use strict'

/* Реализовать на функциях и прототипах Карзину товаров с методами
  - Добавить товар
  - увеличить число товаров
  - Уменьшить число товаров (удалить, если их 0)
 */
const product = {id: 1, name: 'Bear', count: 1}

const Cart = function () {
  this.products = []
}

Cart.prototype.addProduct = function (product) {
  if (this.products.find(product => product.id === product.id)) {
    return
  }
  this.products.push(product)
}

Cart.prototype.increaseCount = function (id) {
  this.products = this.products.map(product => {
    if (product.id === id) {
      product.count++
      return product
    }
    return product
  })
}

Cart.prototype.decreaseCount = function (id) {
  this.products = this.products.map(product => {
    if (product.id === id) {
      product.count--
      return product
    }
    return product
  }).filter(product => product.count > 0)
}

const cart = new Cart()
cart.addProduct(product)
cart.increaseCount(1)
cart.decreaseCount(1)
cart.decreaseCount(1)
console.log(cart)

// Цель:
//   Написать функцию конструктор и методы для работы с корзиной товаров.
//   Основные пункты и задачи:
//   Определение функции конструктора Cart:
//   Создание корзины (Cart) без принимаемых аргументов.
//   Создание пустого массива товаров (products) в качестве свойства корзины.
//   Добавление метода AddProduct:
//   Функция принимает продукт и добавляет его в массив products, если такого продукта нет (проверка по идентификатору).
// Реализация метода увеличения количества товара (increaseAmount):
// Функция принимает идентификатор продукта и увеличивает его количество на единицу.
//   Реализация метода уменьшения количества товара (decreaseAmount):
// Функция принимает идентификатор продукта и уменьшает его количество на единицу.
//   Продукты с количеством 0 удаляются из корзины.