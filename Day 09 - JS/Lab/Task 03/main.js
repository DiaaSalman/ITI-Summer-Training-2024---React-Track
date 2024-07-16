function reverseArguments() {
  var arr = []

  for (var i = 0; i < arguments.length; i++) {
    arr.push(arguments[i])
  }

  return arr.reverse()
}

console.log(reverseArguments(1, 2, 3, 4))

/*****************************************************/

function reverseParameters(...params) {
  try {
    let reversedArray = params.reverse()
    return reversedArray
  } catch (error) {
    console.log(error.message)
  }
}

console.log(reverseParameters(1, 2, 3, 4))
console.log(reverseParameters('a', 'b', 'c'))
