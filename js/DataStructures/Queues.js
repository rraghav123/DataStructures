class Node {
  constructor(val) {
    this.val = val;
    this.next = next
  }
}

class Queues {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(ele) {
    const newNode = new Node(ele);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode
      this.last = newNode;
    }
    this.size += 1;
    return this.size;
  }

  dequeue() {
    if(!this.first) {
      return null;
    }
    if(this.first === this.last) {
      this.last = null;
    }
    let val = this.first.val;
    this.first = this.first.next;
    this.size -= 1;
    return val;
  }
}

