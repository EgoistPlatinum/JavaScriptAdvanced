'use strict'

class Item {
    value = 0
}

class Coin extends Item {
  value = 10
}

class Crystal extends Item {
  value = 100
}

class Brilliant extends Item {
  value = 500
}

class Inventory {
  #score

  pick(item) {
    this.#score += item.value
  }


  // pick(item) {
  //   if (item instanceof Coin) this.#score += 100
  //   if (item instanceof Crystal) this.#score += 1000
  // }

  // pickCoin() {
  //   ///...
  // }
  //
  // pickCrystal() {
  //   ///...
  // }
}

//Основная идея:
//
// Класс должен быть открыт для расширения, но закрыт для модификации.
// Это означает, что можно добавлять новое поведение без изменения существующего кода.
// Пример:
//
// Неправильная реализация:
// Создаем игровые элементы: treasure, coin extends treasure, crystal extends treasure.
// Пытаемся реализовать инвентарь, который добавляет очки за собранные coin или crystal.
// Реализация с проверкой типа сокровища (instanceof) для добавления очков нарушает принцип, т.к. при добавлении новых элементов (например, brilliant) требуется изменение кода инвентаря.
// Правильное решение:
// Сделаем так, чтобы treasure и все его наследники (coin, crystal, brilliant) имели свойство value.
// В инвентаре изменение количества очков происходит на основании value, не зависит от конкретного типа сокровища.
// Добавление новых типов сокровищ не требует изменения кода инвентаря, только добавление новых классов с определенным value.