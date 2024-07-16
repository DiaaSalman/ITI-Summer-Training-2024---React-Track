function twoNums(num1, num2) {
  if (arguments.length != 1) {
    throw new Error('This function accepts only 2 arguments')
  }

  console.log(num1, num2)
}

try {
  twoNums(1, 2)
  twoNums(1)
} catch (error) {
  console.log(error.message)
}
