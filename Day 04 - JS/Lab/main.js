// Task 01 | Repeat your name
var name = prompt('Enter Your Name', 'Guest')

for (var i = 1; i <= 6; i++) {
  document.writeln('<h' + i + '> Hello, ' + name + '</h' + i + '>')
}

/**************************************/

// Task 02 | Even or Odd
var num = Number(prompt('Enter a Number (Even or Odd)'))

if (num % 2 == 0) {
  document.writeln(
    'The Number You Enter ' + num + ' is <strong>Even</strong> <br /> <br />',
  )
} else {
  document.writeln(
    'The Number You Enter ' + num + ' is <strong>Odd</strong>  <br /> <br />',
  )
}

/**************************************/

// Task 03 | Positive or Negative
var number = Number(prompt('Enter a Number (Positive or Negative)'))

if (number > 0) {
  document.writeln(
    'The Number You Enter' +
      number +
      ' is <strong>Positive</strong>  <br /> <br />',
  )
} else if (number < 0) {
  document.writeln(
    'The Number You Enter' +
      number +
      ' is <strong>Negative</strong> <br /> <br />',
  )
} else {
  document.writeln(
    'The Number You Enter' +
      number +
      ' is <strong>Zero (0)</strong> <br /> <br />',
  )
}

/**************************************/

// Task 04 | Summation
var sum = 0

while (sum <= 100) {
  var num = Number(prompt('Enter a Number To Sum'))

  if (num == 0) break

  sum += num
}

document.writeln('The Summation is ' + '<strong>' + sum + '</strong>')
