/*
    Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spac
*/

var reverseWords = function(s) {
  const arr = s.trim().split(' ').reverse();
  let res = '';
  for(let i = 0; i<arr.length; i++) {
    if(arr[i] && i !== arr.length - 1) {
      res += `${arr[i]} `;
    } else {
      res += `${arr[i]}`
    }
  }
  return res;
};


var reverseWords2 = function(s) {
  return s.trim().split(' ').filter(i => i).reverse().join(' ');
};
