'use strict';

/* Реализовать класс пользователя, со свойствами
  - логин
  - пароль
  Причем пароль при установках должен переворачиваться и в таком виде храниться.
  Пароль и логин после создания изменить нельзя. Так же у класса добавить методы
  - Смена пароля (передаем старый и новый пароль)
  - Сверки пароля
*/

class User {
  #login;
  #reversedPassword; // Храним ПЕРЕВЕРНУТЫЙ пароль

  constructor(login, password) {
    this.#login = login;
    this.#reversedPassword = password.split('').reverse().join('');
  }

  // Приватный метод для "разворачивания" пароля при проверке
  #getOriginalPassword() {
    return this.#reversedPassword.split('').reverse().join('');
  }

  // Приватный метод для установки пароля
  #setPassword(newPassword) {
    this.#reversedPassword = newPassword.split('').reverse().join('');
  }

  get login() {
    return this.#login;
  }

  checkPassword(password) {
    // Сравниваем введенный пароль (перевернув его) с хранимым перевернутым
    return this.#reversedPassword === password.split('').reverse().join('');
  }

  changePassword(oldPassword, newPassword) {
    if (!this.checkPassword(oldPassword)) {
      return false;
    }
    this.#setPassword(newPassword);
    return true;
  }
}

const user = new User('Vladimir', '123456');
console.log(user.checkPassword('123456')); // true
console.log(user.checkPassword('wrong')); // false
user.changePassword('123456', 'newpass');
console.log(user.checkPassword('newpass')); // true