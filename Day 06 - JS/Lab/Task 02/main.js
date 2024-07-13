var numberOne = document.querySelector('#number1')
var numberTwo = document.querySelector('#number2')
var addBtn = document.querySelector('#add')
var mulBtn = document.querySelector('#mul')
var outputContainer = document.querySelector('.output')
var addOutput = document.querySelector('#add-output')
var mulOutput = document.querySelector('#mul-output')

addBtn.addEventListener('click', function () {
  outputContainer.style.display = 'block'
  var sum = parseInt(numberOne.value) + parseInt(numberTwo.value)
  addOutput.innerHTML = 'Summation: ' + sum
})

mulBtn.addEventListener('click', function () {
  outputContainer.style.display = 'block'
  var mul = parseInt(numberOne.value) * parseInt(numberTwo.value)
  mulOutput.innerHTML = 'Product: ' + mul
})
