/**
 * @param {number[]} numss
 * @param {number} target
 */

function twoSum(numss, target) {
  for (let i = 0; i < numss.length; i++) {
    for (let j = 0; j < numss.length; j++) {
      if (i !== j && numss[i] + numss[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
