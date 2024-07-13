var bgColorInput = document.querySelector('#bg-color-input')
var textColorInput = document.querySelector('#text-color-input')
var textInput = document.querySelector('textarea')
var btn = document.querySelector('button')
var outputContainer = document.querySelector('.output')
var output = document.querySelector('#output')

btn.addEventListener('click', function () {
  if (
    bgColorInput.value === '' ||
    textColorInput.value === '' ||
    textInput.value === ''
  ) {
    outputContainer.style.display = 'block'
    output.innerHTML = 'Please fill all the fields!'
    output.style.color = 'red'
    return
  }

  outputContainer.style.display = 'block'
  output.style.backgroundColor = bgColorInput.value
  output.style.color = textColorInput.value
  output.innerHTML = textInput.value
})
