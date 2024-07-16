var nextButton = document.querySelector('.next-btn')
var prevButton = document.querySelector('.prev-btn')
var image = document.querySelector('img')
var autoPlay = document.querySelector('.play')
var stopAutoPlay = document.querySelector('.stop')

var imageNumber = 1

function nextImage() {
  if (imageNumber < 5) {
    imageNumber++
  } else {
    imageNumber = 1
  }
  image.src = `images/${imageNumber}.jpg`
  console.log(imageNumber)
}

function prevImage() {
  if (imageNumber > 1) {
    imageNumber--
  } else {
    imageNumber = 5
  }
  image.src = `images/${imageNumber}.jpg`
  console.log(imageNumber)
}

autoPlay.addEventListener('click', function () {
  interval = setInterval(nextImage, 1500)
})

stopAutoPlay.addEventListener('click', function () {
  clearInterval(interval)
})

nextButton.addEventListener('click', nextImage)
prevButton.addEventListener('click', prevImage)
