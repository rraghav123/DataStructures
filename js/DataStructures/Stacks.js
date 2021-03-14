class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const node = new Node(val);
    if(!this.first) {
      this.first = node;
      this.last = node;
    }
    let temp = this.first;
    this.first = node;
    node.next = temp;
    this.size += 1;
    return this.first;
  }

  pop() {
    if(!this.first) return null;
    let removedNode = this.first;
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size -= 1;
    return removedNode.val;
  }
}
