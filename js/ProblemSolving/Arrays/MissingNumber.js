
/*
    Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

    Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
*/

var missingNumber = function(nums) {
  nums.sort((a,b) => a - b)
  if(nums[0] !== 0) {
    return 0;
  }
  let missingNum = nums[0];
  for(let i  = 0 ;i< nums.length; i++) {
    if(missingNum === nums[i]) {
      missingNum += 1;
    } else {
      break;
    }
  }
  return missingNum;
};

function missingNum2(arr) {
  const num = arr.length;
  const expectedSum = num * (num + 1) / 2;
  const actualSum = arr.reduce((acc, val) => acc + val, 0);
  return expectedSum - actualSum;
}

var arr = [7,6,5,4,3,2, 0]

var res = missingNumber(arr)
