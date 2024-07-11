/*Use a ternary operator to check that a person is eligible to vote or not by checking his age. If the age of the person is less than 18 the "You cannot vote" should be logged else "You can vote" should be logged. */

let age = 18;
let canVote = age < 18 ? "You cannot vote" : "You can vote";
console.log(canVote);

/**
 OUTPUTS
 
 let age = 15 // "You cannot vote"
 let age = 18 // "You can vote"
 let nums = 19 // "You can vote"
 */