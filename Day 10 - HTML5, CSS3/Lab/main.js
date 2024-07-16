const colorInput = document.querySelector('#color')
const body = document.querySelector('body')

const savedColor = localStorage.getItem('color')
if (savedColor) {
  body.style.backgroundColor = savedColor
  colorInput.value = savedColor
}

colorInput.addEventListener('change', () => {
  const selectedColor = colorInput.value
  body.style.backgroundColor = selectedColor

  localStorage.setItem('color', selectedColor)
})
