/** Use a nested ternary operator to check that a number is positive, negative or zero. You have to print "positive" if the number is positive and similarly for negativa and zero also.*/

let nums = 2;
let result = nums > 0 ? "positive" :  nums < 0 ? "negative" : "zero";
console.log(result);

/**
 OUTPUTS
 
 let nums = 2 // positive
 let nums = 0 // zero
 let nums = -3 // negative
 */