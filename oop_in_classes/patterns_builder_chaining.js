'use strict'

const arr = [1, 2, 3]
arr
  .map(a => a * 2)
  .filter(a => a > 0)
  .find(a => a < 100)


class Wallet {

  balance = 0;

  add(sum) {
    this.balance += sum;
    return this;
  }

  remove(sum) {
    this.balance -= sum;
    return this;
  }
}

const wallet = new Wallet();
const res = wallet.add(100).remove(10);

console.log(res)

class Builder {
  house = {}

  addRoof() {
    this.house.roof = 'Roof';
    return this;
  }

  addWindow() {
    this.house.window = 'Window';
    return this;
  }

  addFloor() {
    this.house.floor = 'Floor';
    return this;
  }

  execute() {
    return this.house
  }
}

const res2 = new Builder().addRoof().addWindow().addFloor().execute()

console.log(res2)

//Чейнинг методов
// Определение: Чейнинг методов (method chaining) – техника программирования, при которой вызовы методов выстраиваются в цепочку, позволяя выполнять множество операций над одним объектом последовательно.
// Пример с массивами:
// Имеется массив [1, 2, 3].
// Применяются методы map(), filter() и др., создавая цепочку обработки данных массива.
// Реализация чейнинга
// Ключевой момент: Возвращение this в методах класса для поддержания цепочки вызовов.
// Пример:
// Имеем класс Wallet с методами для изменения баланса (например, add и remove).
// В каждом методе возвращаем this, что позволяет вызывать методы последовательно (чейнить).
// Pattern Builder
// Определение: Pattern Builder используется для построения сложных объектов, разбивая процесс построения на простые шаги исполнения.
// Использование:
// Создание класса Builder, в котором методы (например, addRoof, addFloor) добавляют характеристики объекту и возвращают this для продолжения цепочки.
// Метод execute (или аналогичный) в конце возвращает собранный объект.
// Примеры применения:
// Построение сложных объектов по шаблону
// В тестировании для создания наборов данных