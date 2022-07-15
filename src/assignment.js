// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================

/**
Challenge - 1
Calculate and return the sum of the numbers in an array.
If you did Challenge - 1, remove the comment in the line just after this function
@param {Array} arrayOfNumbers the array of numbers to sum
@returns number the sum of the numbers
 */

function sumOfNumbers(arrayOfNumbers) {
  let answer = 0;

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    answer += arrayOfNumbers[i]
  }
  console.log(answer);
  return answer
}
assignment.sumOfNumbers = sumOfNumbers;
//sumOfNumbers(arrayOfNumbers);

/**
Challenge - 2
Count all even numbers within an array of numbers.
If you did Challenge - 2, remove the comment in the line just after this function
@param {Array} arrayOfNumbers the array containing even or non-even numbers
@returns number the count of even numbers
 */


function countEvenNumbers(arrayOfNumbers) {

  let count = 0;

  arrayOfNumbers.forEach(function(arrayIndex){

    if (arrayIndex % 2 === 0){

      count = count + 1;
    }
  });

  return count;
    
}
assignment.countEvenNumbers = countEvenNumbers;
//countEvenNumbers(arrayOfNumbers);
// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================
