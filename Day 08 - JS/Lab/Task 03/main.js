let ErrorMessage = document.querySelector('.message.error')
let SuccessMessage = document.querySelector('.message.success')
let errorButton = document.querySelector('.error-btn')
let successButton = document.querySelector('.success-btn')

errorButton.addEventListener('click', () => {
  SuccessMessage.style.display = 'none'
  ErrorMessage.style.display = 'flex'
})

successButton.addEventListener('click', () => {
  ErrorMessage.style.display = 'none'
  SuccessMessage.style.display = 'flex'
})
