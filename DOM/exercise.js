'use strict'

/*
 Динамически создать N элементов с текстом и поле для поиска.
 При вводе в поле, выделять элементы, которые содержат текст
*/

const wrapper = document.querySelector('.wrapper')

for (let i = 0; i < 100; i++) {
  const el = document.createElement('div')
  el.innerHTML = `User id ${i}`
  wrapper.appendChild(el)
}

function search(event) {
  const inputValue = event.target.value

  console.log(inputValue)

  for (const el of [...wrapper.children]) {
    if(el.innerHTML.includes(inputValue)) {
      el.classList.add('yellow')
    }
    el.classList.remove('yellow')
  }

}