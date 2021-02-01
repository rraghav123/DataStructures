class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  isIndexNotValid(index) {
    if(index > this.length || index < 0) {
      return `index should be between 0 and ${this.length + 1}`
    }
    return false;
  }
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = newNode
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // remove node from last
    if(!this.head) return null;
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if(!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    // Remove node from start
    if(!this.head) return null;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length -= 1;
    if(!this.length) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }

  unShift(val) {
    // add node at the beginning
    const newNode= new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    const currentHead = this.head;
    this.head = newNode;
    newNode.next = currentHead;
    this.length += 1;
    return newNode;
  }

  traverse() {
    let current = this.head;
    while(current) {
      console.log(current.val);
      current = current.next;
    }
  }

  get(index) {
    const isIndexNotValid = this.isIndexNotValid;
    if(isIndexNotValid) {
      return isIndexNotValid;
    }
    if(index === 0) {
      return this.head;
    } else if(index === this.length) {
      return this.tail;
    }
    let count = 0;
    let node = this.head;
    while(count !== index) {
      node = node.next;
      count+=1;
    }
    return node;
  }

  set(index, newVal) {
    const isIndexNotValid = this.isIndexNotValid;
    if(isIndexNotValid) {
      return isIndexNotValid;
    }
    if(index === 0) {
      this.head.val = newVal;
      return this.head;
    } else if(index === this.length) {
      this.tail.val = newVal;
      return this.tail;
    }
    let count = 0;
    let node = this.head
    while(count !== index) {
      node = node.next;
      count += 1;
    }
    node.val = newVal;
    return node;
  }

  insert(index ,val) {
    const isIndexNotValid = this.isIndexNotValid;
    if(isIndexNotValid) {
      return isIndexNotValid;
    }
    if(index === 0) {
      this.unShift(val);
      return this.head;
    } else if(index === this.length) {
      this.push(val);
      return this.tail;
    }
    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    length += 1
    return prev.next;
  }

  remove(index) {
    if(index > this.length || index < 0) {
      return `index should be between 0 and ${this.length + 1}`
    }
    if(index === 0) {
      return this.shift()
    } else if(index === this.length) {
      return this.pop();
    }
    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this.length -= 1;
    return removed;
  }

  print() {
    const arr = [];
    let node = this.head;
    while(node) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  }

  reverse() {
    if(!this.head) return null;
    let node = this.head;
    [this.head, this.tail] = [this.tail, this.head];
    let prev = null;
    let next;
    for(let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}


var list = new SinglyLinkedList();

list.push(10);
list.push(23);
list.push(33);
list.push(44);


// var first = new Node('Hi')
// first.next = new Node('Hi there');
