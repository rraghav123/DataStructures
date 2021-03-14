/*
    Given an input string , reverse the string word by word.

    Example:
        Input:  ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
        Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
    Note:

    A word is defined as a sequence of non-space characters.
    The input string does not contain leading or trailing spaces.
    The words are always separated by a single space.
    Follow up: Could you do it in-place without allocating extra space?
*/

let  arr = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]

function reverseArr(arr, start,end) {
  let ptr1 = start;
  let ptr2 = end;
  while(ptr1 < ptr2) {
    [arr[ptr1], arr[ptr2]] = [arr[ptr2], arr[ptr1]];
    ptr1 += 1;
    ptr2 -=1;
  }
}

var reverseWords = function(s) {
  const arrLength = s.length;
  reverseArr(s, 0, arrLength - 1)
  let start = 0;
  let end = 0;
  while(start < arrLength) {
    while(end < arrLength && s[end] !== ' ') {
      end++;
    }
    reverseArr(s, start, end - 1);
    start = end + 1;
    end++;
  }
};

reverseWords(arr);
