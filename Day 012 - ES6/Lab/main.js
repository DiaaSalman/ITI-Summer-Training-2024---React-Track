// Task 01: Swap Using Destructuring
console.log('------------------ Task 01 ------------------')
function swap(a, b) {
  console.log('a before swap: ', a)
  console.log('b before swap: ', b)
  ;[a, b] = [b, a]
  console.log('a after swap: ', a)
  console.log('b after swap: ', b)
}

swap(5, 8)

// Task 02: return max and min using rest operator
console.log('------------------ Task 02 ------------------')

function minMax(...nums) {
  return [Math.min(...nums), Math.max(...nums)]
}

console.log(minMax(1, 2, 3, 4, 5))

// Task 03: Use Array Methods
console.log('------------------ Task 03 ------------------')

let fruits = ['apple', 'strawberry', 'banana', 'orange', 'mango']

// test that every element in the given array is a string
console.log(fruits.every((fruit) => typeof fruit === 'string')) // true

// test that some elements in the given array start with the letter 'a'
console.log(fruits.some((fruit) => fruit[0] === 'a')) // true

// generate new array filtered from the given array with only elements that starts with "b" or "s"
console.log(fruits.filter((fruit) => fruit[0] === 'a' || fruit[0] === 's')) // ["apple", "strawberry"];

// generate new array each element of the new array contains a string declaring that you like the give fruit element
let likedFruites = fruits.map((fruit) => `I like ${fruit}`)
console.log(likedFruites)

// use forEach to display all elements of the new array from previous point
likedFruites.forEach((fruit) => console.log(fruit))
