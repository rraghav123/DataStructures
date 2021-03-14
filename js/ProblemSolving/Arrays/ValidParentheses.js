var parmsHash = {
  '}': '{',
  ')': '(',
  ']': '[',
}

class Stack {
  constructor() {
    this.stack = []
    this.length = 0;
  }
  push(ele) {
    this.stack.push(ele);
    this.length += 1;
  }
  pop() {
    const paran = this.stack.pop();
    this.length -= 1;
    return paran;
  }
  getLength() {
    return this.length;
  }
  getStack() {
    return this.stack;
  }
}
var isValid = function(s) {
  if(!s.length) return true;
  const stack = new Stack();
  for(let i = 0; i < s.length; i++) {
    if(parmsHash[s[i]]) {
      const topElement = stack.getLength() ? stack.pop() : '#';
      if(topElement !== parmsHash[s[i]]) {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  return !stack.getStack().length;;
};

isValid("(}")

