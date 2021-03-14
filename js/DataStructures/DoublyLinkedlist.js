class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if(!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length +=1;
    return newNode;
  }

  pop() {
    if(!this.length) {
      return 'list empty';
    }
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return true;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length -= 1;
    return true;
  }
}

export default DoublyLinkedList;
