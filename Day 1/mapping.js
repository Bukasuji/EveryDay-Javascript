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
const answer0 = number.map(multiplyByTen)
function multiplyByTen(item) {
    return item * 10
}
console.log(answer0)

/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code he

const answer = nums.map(squared)
function squared(items){
    return items*items
}

console.log(answer)

/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here

const answer2 = names.map(capitalFirst)
function capitalFirst(items){
    return (items.charAt(0).toUpperCase() + items.substr(1).toLowerCase())
}
console.log(answer2)

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here
const answer3 = pokemon.map(addTag)
function addTag(items){
    return ("<p>" + items + "</p>")
}
console.log(answer3)





