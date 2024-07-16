function success(position) {
  console.log(position.coords.latitude)
  console.log(position.coords.longitude)
  initMap(position.coords.latitude, position.coords.longitude)
}
function error(err) {
  console.log(err.message)
}

navigator.geolocation.getCurrentPosition(success, error)

function initMap(lat, lng) {
  const myLatLng = { lat: lat, lng: lng }
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng,
  })

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: 'Hello World!',
  })
}

window.initMap = initMap
