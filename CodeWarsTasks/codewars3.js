//Task 8kyu
//You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//Note: if there is nothing to sum, the sum is default to 0.

'use strict';

//let arr = [3,7,-11,15,25,-56];
function positiveSum(arr) {
    let n = 0;
for (let i=0;i<arr.length;i++) {
    if (arr.length == 0) {
        return n;
    } else if (arr[i] >= 0) {
        n += arr[i];
    } else {
        i + 1;
    }
}
return n;
}
console.log(positiveSum([5,7,8,-85,5,-12,4]));

//Another pattern 1
/* 
function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}
 */

/* 
Another pattern 2

function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}

*/
//Another pattern 3
/* 
const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);
*/