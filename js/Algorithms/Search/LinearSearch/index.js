/*
* JS uses Linear Search
* */
function LinearSearch(arr=[], search) {
  if(!arr.length || !search) {
    return;
  }
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === search) {
      return i;
    }
  }
  return -1;
}

export default LinearSearch;

/*Complexity
* o(n) - Worst
* o(n) - Average
* o(1) Best
* */
