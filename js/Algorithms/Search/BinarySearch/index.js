/*
* This function accepts a sorted array and a value

* Create a left pointer at the start of the array, and a right pointer at the end of the array
* While the left pointer comes before the rightPointer:
*     Create a pointer in the middle
*     If you find the value you want, return the index
*     If the value is too large, more the right pointer down
* If you never find the value, return -1
* */

function getMiddle({ right, left }) {
  return Math.floor((left + right) / 2);
}

function BinarySearch(arr, search) {
  if(!arr.length || !search) {
    return
  }
  let left = 0;
  let right = arr.length - 1;
  let middle = getMiddle({ left, right });
  while(left <= right) {
    if(arr[middle] === search) {
      return middle;
    } else if(arr[middle] < search) {
      left = middle + 1;
    } else {
      right -= 1;
    }
    middle = getMiddle({ left, right });
  }
  return -1;
}

function RecursivelyBinarySearch(arr, search, first_idx) {
  let left = 0;
  let right = arr.length - 1;
  let middle = getMiddle({left,right});
  if (right >= left) {
    if (arr[middle] === search) {
      return middle + first_idx;
    } else if (arr[middle] < search) {
      return RecursivelyBinarySearch(arr.slice(middle + 1, arr.length), search, middle + first_idx + 1);
    } else {
      return RecursivelyBinarySearch(arr.slice(0, middle), search, first_idx)
    }
  }
  return -1;
}

// BinarySearch([1,5,7,9,10,20], 20)
// 10 4 4 5

export default RecursivelyBinarySearch;
