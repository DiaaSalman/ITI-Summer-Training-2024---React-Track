async function getAllUsers() {
  try {
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await res.json()
    display(data)
  } catch (error) {
    console.log(error)
  }
}

function display(data) {
  let tBody = document.querySelector('tbody')
  let rows = data
    .map(
      (item) => `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.address.city}</td>
                    <td>${item.phone}</td>
                    <td><a href=${item.website}>${item.website}</a></td>
                </tr>
                `,
    )
    .join('')

  tBody.innerHTML = rows
}

document.querySelector('button').addEventListener('click', getAllUsers)
