var username = document.getElementById('name')
var age = document.getElementById('age')
var button = document.getElementById('button')
var nameError = document.querySelector('.name-error')
var ageError = document.querySelector('.age-error')
var tableBody = document.querySelector('tbody')

var id = 1

button.addEventListener('click', function (e) {
  e.preventDefault()

  // Validate the name field
  if (username.value.trim() === '') {
    nameError.textContent = 'Name is required'
  } else if (username.value.length < 3) {
    nameError.textContent = 'Name must be at least 3 characters'
  } else {
    nameError.textContent = ''
  }

  // Validate the age field
  if (age.value.trim() === '') {
    ageError.textContent = 'Age is required'
  } else {
    ageError.textContent = ''
  }

  // If there are no errors, add the data to the table

  if (nameError.textContent === '' && ageError.textContent === '') {
    var tr = document.createElement('tr')
    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')
    var td4 = document.createElement('td')

    td1.textContent = id
    td2.textContent = username.value
    td3.textContent = age.value
    td4.innerHTML = '<button class="delete">Delete</button>'

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)

    tableBody.appendChild(tr)
    id++

    document.querySelector('.delete').addEventListener('click', function (e) {
      e.target.parentElement.parentElement.remove()
    })

    // Clear the input fields
    username.value = ''
    age.value = ''
  }
})
