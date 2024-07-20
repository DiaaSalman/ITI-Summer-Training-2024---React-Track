document
  .getElementById('generateCircles')
  .addEventListener('click', generateCircles)

document.getElementById('circleColor').addEventListener('change', function () {
  const canvas = document.getElementById('myCanvas')
  const ctx = canvas.getContext('2d')

  ctx.clearRect(0, 0, canvas.width, canvas.height)
})

function generateCircles() {
  const canvas = document.getElementById('myCanvas')
  const ctx = canvas.getContext('2d')
  const numberOfCircles = Math.floor(Math.random() * 20) + 1 // Ensure at least 1 circle
  const color = document.getElementById('circleColor').value

  for (let i = 0; i < numberOfCircles; i++) {
    const x = Math.random() * canvas.width
    const y = Math.random() * canvas.height
    drawCircle(ctx, x, y, color)
  }
}

function drawCircle(ctx, x, y, color) {
  ctx.beginPath()
  ctx.arc(x, y, 30, 0, Math.PI * 2) // arc(x, y, radius, startAngle, endAngle)
  ctx.strokeStyle = color
  ctx.stroke()
  ctx.closePath()
}
