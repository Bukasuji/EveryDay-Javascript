/* map() creates a new array from calling a function for every array element.

map() calls a function once for each element in an array.

map() does not execute the function for empty elements.

map() does not change the original array */

//Example 1 =  Return a new array with the square root of all element values:
const num =[1,2,3,4]
const square = num.map(Math.sqrt)
console.log(square)

//Example 2  Multiply all the values in an array with 10:
const number = [1,2,3,4]
const answer = number.map(multiplyByTen)
function multiplyByTen(item) {
    return item * 10
}
console.log(answer)


