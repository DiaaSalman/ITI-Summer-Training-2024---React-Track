let button = document.querySelector('button')
let table = document.querySelector('table')
let thead = document.querySelector('thead')
let tbody = document.querySelector('tbody')

let url = 'https://jsonplaceholder.typicode.com/users'
let xhr = new XMLHttpRequest()
xhr.open('GET', url, true)
xhr.send()

button.onclick = function () {
  if (xhr.status == 200) {
    let data = JSON.parse(xhr.responseText)

    let tr = document.createElement('tr')
    let th1 = document.createElement('th')
    let th2 = document.createElement('th')
    let th3 = document.createElement('th')
    let th4 = document.createElement('th')
    let th5 = document.createElement('th')
    let th6 = document.createElement('th')

    th1.textContent = 'ID'
    th2.textContent = 'Name'
    th4.textContent = 'Email'
    th3.textContent = 'Address'
    th5.textContent = 'Phone'
    th6.textContent = 'Website'

    tr.appendChild(th1)
    tr.appendChild(th2)
    tr.appendChild(th3)
    tr.appendChild(th4)
    tr.appendChild(th5)
    tr.appendChild(th6)

    thead.appendChild(tr)
    table.appendChild(thead)
    data.forEach(function (user) {
      let tr = document.createElement('tr')
      let td1 = document.createElement('td')
      let td2 = document.createElement('td')
      let td3 = document.createElement('td')
      let td4 = document.createElement('td')
      let td5 = document.createElement('td')
      let td6 = document.createElement('td')

      td1.textContent = user.id
      td2.textContent = user.name
      td4.textContent = user.email
      td3.textContent = user.address.city
      td5.textContent = user.phone
      td6.textContent = user.website

      tr.appendChild(td1)
      tr.appendChild(td2)
      tr.appendChild(td3)
      tr.appendChild(td4)
      tr.appendChild(td5)
      tr.appendChild(td6)
      tbody.appendChild(tr)
    })
    // table.appendChild(tbody)
    // document.body.appendChild(table)
  }
}
