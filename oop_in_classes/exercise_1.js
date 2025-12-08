'use strict'

/*
  Сделать класс врага со здоровьем и методом получения урона
  Сделать класс меча, который имеет силу и метод нанесения урона
  Сделать класс орка, который в 50% слачаев не получает урон
*/

class Enemy {
  constructor(health) {
    this.health = health;
  }

  takeDamage(damage) {
    this.health = this.health - damage;
    console.log(this.health)
  }
}

class Sword {
  #damage
  constructor(damage) {
    this.#damage = damage;
  }

  strike(enemy) {
    enemy.takeDamage(this.#damage)
  }
}

class Orc extends Enemy {
  constructor(health) {
    super(health)
  }

  takeDamage(damage) {
    if (Math.random() > 0.5) {
      this.health = this.health - damage;
    }
    console.log(this.health)
  }

}

const enemy = new Enemy(10)
const sword = new Sword(2)

sword.strike(enemy)
sword.strike(enemy)
sword.strike(enemy)
sword.strike(enemy)
sword.strike(enemy)