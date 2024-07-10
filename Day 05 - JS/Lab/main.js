// Task 01 | FizzBuzz
function fizzBuzz(userInput) {
  if (userInput % 3 === 0 && userInput % 5 === 0) {
    document.writeln('<h1>' + userInput + ' --> FizzBuzz</h1>')
  } else if (userInput % 3 === 0) {
    document.writeln('<h1>' + userInput + ' --> Fizz</h1>')
  } else if (userInput % 5 === 0) {
    document.writeln('<h1>' + userInput + ' --> Buzz</h1>')
  } else {
    document.writeln('<h1>' + userInput + ' --> NONE</h1>')
  }
}

var userInput = Number(prompt('Enter a number: '))
fizzBuzz(userInput)

document.writeln('<br> ########################################## <br>')

// Task 02 | Reverse a String
function reverseString(userString) {
  var reversedString = userString.split('').reverse().join('')
  document.writeln('<h1>' + userString + ' --> ' + reversedString + '</h1>')
}

var userString = prompt('Enter a string to reverse: ')
reverseString(userString)

document.writeln('<br> ########################################## <br>')

// Task 03 | Take 5 numbers of users and display Sum, Mul, Div, Sub
function calculator() {
  var operation = ['Sum', 'Mul', 'Div', 'Sub']

  var numbers = []
  for (var i = 0; i < 5; i++) {
    numbers.push(Number(prompt('Enter number ' + (i + 1) + ': ')))
  }

  for (var i = 0; i < operation.length; i++) {
    var result = 0
    switch (operation[i]) {
      case 'Sum':
        result = numbers.reduce((a, b) => a + b)
        break
      case 'Mul':
        result = numbers.reduce((a, b) => a * b)
        break
      case 'Div':
        result = numbers.reduce((a, b) => a / b)
        break
      case 'Sub':
        result = numbers.reduce((a, b) => a - b)
        break
    }
    document.writeln('<h1>' + operation[i] + ' --> ' + result + '</h1>')
  }
}

calculator()

document.writeln('<br> ########################################## <br>')

// Task 04 | Calculate the repeated characters in a string
function repeatedCharacters(userString, char) {
  var counter = 0

  for (var i = 0; i < userString.length; i++) {
    if (userString[i] === char) {
      counter++
    }
  }

  document.writeln(
    '<h1>' +
      char +
      ' is repeated ' +
      counter +
      ' times in ' +
      userString +
      '</h1>',
  )
}

var userString = prompt('Reapeated Characters: Enter a string: ')
var char = prompt('Reapeated Characters: Enter a character: ')
repeatedCharacters(userString, char)

document.writeln('<br> ########################################## <br>')

// Task 05 | Take a string and a char from user and decide the indices of the char in the string
function findIndices(userString, char) {
  var indices = []

  for (var i = 0; i < userString.length; i++) {
    if (userString[i] === char) {
      indices.push(i)
    }
  }

  document.writeln(
    '<h1>' +
      char +
      ' is found at indices ' +
      indices +
      ' in "' +
      userString +
      '"</h1>',
  )
}

var userString = prompt('Character Indices: Enter a string: ')
var char = prompt('Character Indices: Enter a character: ')
findIndices(userString, char)
