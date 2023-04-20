function hasTargetSum(array, target) {
  arrayCopy = [...array]
  arrayCopy.shift()

  for (const i of array) {
    for (const j of arrayCopy) {
      if (i + j === target) {
        return true
      }
    }
    arrayCopy.shift()
  }

  return false
}

/* 
  O(n²)
*/

/* 
  creat a copy of array, removing first element
  Iterate over elements in original array
    iterate over elements in copy of array
      if current original element plus current copy element equals target
        return true
      else remove first element in copy
  return false
*/

/*
  Returns true if the sum of any two numbers in the input array equals the target number and false if not.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([36, 8, 12, 19, 64], 100));

  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([0, 0, 1], 0));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 4, 5], 4));
}

module.exports = hasTargetSum;
