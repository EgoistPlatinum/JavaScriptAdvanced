'use strict'

/* Сделать генератор 3х идей от скуки
   https://bored-api.appbrewery.com/random
   с отображением на странице
*/

const wrapper = document.querySelector('.wrapper')

async function getActivity() {
  const response = await fetch('https://bored-api.appbrewery.com/random')
  return response.json()
}

async function generate() {
  try {
    wrapper.innerHTML = ''
    const data = await Promise.all([getActivity(), getActivity(), getActivity()])
    console.log(data)

    for (const el of data) {
      const element = document.createElement('div')
      element.innerHTML = `${el.activity}`
      wrapper.appendChild(element)
    }

  } catch (e) {
    console.error(e)
  }


}