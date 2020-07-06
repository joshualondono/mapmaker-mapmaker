/******************
 * YOUR CODE HERE *
******************/

const doubleAll = function(nums){
  const result = []
  
  for(let i = 0; i < nums.length; i++){
    result.push(nums[i] * 2)
  }
  
  return result
  
}

doubleAll([1, 2, 3, 4])

const yelledGreetings = function(nums){
  const result = []
  
  for(let i = 0; i < nums.length; i++){
    
    result.push(nums[i] + '?')
    
  }
  
  return result 
}

yelledGreetings(['hello', 'there', 'you absolute fiend'])



const absoluteValues = function(nums){
  const result = []
  
  for(let i = 0; i < nums.length; i++){
    
    result.push(Math.abs(nums[i]))
 
  }
  return result
}

absoluteValues([-1, -3, -10800])


const upperCaseFirstLetters = function(nums){
  const result = []
  
  for(let i = 0; i < nums.length; i++){
    
    result.push(nums[i][0].toUpperCase() + nums[i].slice(1).toLowerCase())
    
  }
  
  return result 
}

upperCaseFirstLetters(['heLLo', 'there', 'you absolute fiend'])

const changeToInitials = function(nums){
  const result = []
  
  for(let i = 0; i < nums.length; i++){
    
    const spaceIndex = nums[i].indexOf(' ') + 1
    
    result.push(nums[i][0] + nums[i][spaceIndex])
    
  }
  
  return result 
}


changeToInitials(['John Smith', 'Phil Rivera', 'Tom Cruise'])

const doubleOdd = function(nums){
  const result = []
  
  for(let i = 0; i < nums.length; i++){
    
    if(nums[i] % 2 !== 0){
      
      result.push(nums[i] * 2)
      
    } else {
      result.push(nums[i])
    }
    
  }
  
  return result 
}

doubleOdd([-1, -3, -10800, 2, 7, 9, 8])

const add1ToLeft = function(nums){
  const result = []
  
  for(let i = 0; i < nums.length; i++){
    
    result.push(nums[i] + [1])
    
  }
  
  return result 
}

add1ToLeft([-1, -3, -10800, 2, 7, 9, 8])




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
