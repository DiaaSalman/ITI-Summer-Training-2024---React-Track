function add() {
  try {
    var sum = 0
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] !== 'number') {
        throw 'Function accepted number only'
      }
      sum += arguments[i]
    }
    console.log('sum = ' + sum)
  } catch (error) {
    console.log(error)
  }
}

add(1, 2)
add(2, 3, 4, 5)
add(2, 'a')
