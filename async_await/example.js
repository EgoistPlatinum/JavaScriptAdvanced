'use strict'

/* Получить геолокацию пользователя через Geolocation.getCurrentPosition() (WEB API)
  и по координатам определить город, отправив запрос:
  https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=00&longitude=00
*/

function getMyCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        resolve({lat: coords.latitude, lng: coords.longitude})
      },
      (err) => reject(err)
    )
  })
}

async function getCity() {
  try {
    const {lat, lng} = await getMyCoordinates()

    console.log({lat, lng})

    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
    if(!response.ok) {
      throw new Error(response.status)
    }

    const data = await response.json()

    console.log(data.city)

  } catch (e) {
    console.error(e)
  }
}

getCity()