/*
* Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
* */

/*
*   Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
* */

var groupAnagrams = function(strs) {
  const obj = {}
  for(str of strs) {
    let sortedStr = str.split('').sort().join('');
    if(obj[sortedStr]) {
      obj[sortedStr].push(str)
    } else {
      obj[sortedStr] = [str]
    }
  }
  return Object.values(obj).sort((a,b) => a.length - b.length)
};
