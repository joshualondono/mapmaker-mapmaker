/******************
 * YOUR CODE HERE *
******************/

function doubleAll(nums){
  const result = []
  
  for(let i = 0; i < nums.length; i++){
    result.push(nums[i] * 2)
  }
  
  return result
  
}

function yelledGreetings(nums){
  const result = []
  
  for(let i = 0; i < nums.length; i++){
    
    result.push(nums[i] + '?')
    
  }
  
  return result 
}

function absoluteValues(nums){
  const result = []
  
  for(let i = 0; i < nums.length; i++){
    
    result.push(Math.abs(nums[i]))
 
  }
  return result
}

function upperCaseFirstLetters(nums){
  const result = []
  
  for(let i = 0; i < nums.length; i++){
    
    result.push(nums[i][0].toUpperCase() + nums[i].slice(1).toLowerCase())
    
  }
  
  return result 
}


function changeToInitials(nums){
  const result = []
  
  for(let i = 0; i < nums.length; i++){
    
    const spaceIndex = nums[i].indexOf(' ') + 1
    
    result.push(nums[i][0] + nums[i][spaceIndex])
    
  }
  
  return result 
}



function doubleOdd(nums){
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


function add1ToLeft(nums){
  const result = []
  
  for(let i = 0; i < nums.length; i++){
    
    result.push(nums[i] + [1])
    
  }
  
  return result 
}

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
