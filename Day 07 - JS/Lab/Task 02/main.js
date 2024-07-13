var nextButton = document.querySelector('.next-btn')
var prevButton = document.querySelector('.prev-btn')
var image = document.querySelector('img')

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

nextButton.addEventListener('click', nextImage)
prevButton.addEventListener('click', prevImage)
