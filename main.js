/******************
 * YOUR CODE HERE *
******************/

const numbers = [-5, 101, 0, 32.5]
const doubleAll = []
for(let i = 0; i < numbers.length; i++){
  doubleAll.push(numbers[i] * 2)
}

const greetings = ['hello', 'there', 'you absolute fiend']
const yelledGreetings = []
for(let i = 0; i < greetings.length; i++){
  yelledGreetings.push(greetings[i] + '!')
}

yelledGreetings

const values = [-1, -3, 1000]
const absoluteValues = []
for(let i = 0; i < values.length; i++){
  absoluteValues.push(Math.abs(values[i]))
}

absoluteValues

const words = ['colin', 'mesuara', 'genghis', 'pak', 'ginny', 'michael', 'tenzin']
const upperCaseFirstLetters = []
for(let i = 0; i < words.length; i++){
  upperCaseFirstLetters.push(words[i].charAt(0).toUpperCase()+ words[i].slice(1))
}


upperCaseFirstLetters




/*******************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
*******************************************/

if (typeof doubleAll === 'undefined') {
  doubleAll = undefined;
}

if (typeof yelledGreetings === 'undefined') {
  yelledGreetings = undefined;
}

if (typeof absoluteValues === 'undefined') {
  absoluteValues = undefined;
}

if (typeof upperCaseFirstLetters === 'undefined') {
  upperCaseFirstLetters = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleOdd === 'undefined') {
  doubleOdd = undefined;
}

if (typeof add1ToLeft === 'undefined') {
  add1ToLeft = undefined;
}


module.exports = {
  doubleAll,
  yelledGreetings,
  absoluteValues,
  upperCaseFirstLetters,
  changeToInitials,
  doubleOdd,
  add1ToLeft,
}
