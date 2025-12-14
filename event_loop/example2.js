'use strict'

/* Сделать функцию myFetch, которая выполняет внутри XMLHttpRequest*/

function myFetch(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send()

    xhr.addEventListener('load', function () {
      if (this.status > 400) {
        reject(new Error(this.status))
      }
      resolve(this.response)
    })

    xhr.addEventListener('error', function () {
      reject(new Error(this.status))
    })

    xhr.addEventListener('timeout', function () {
      reject(new Error('Timeout'))
    }
    )
  })
}

myFetch('https://dummyjson.com/products').then(data => console.log(data)).catch(error => console.log(error))
