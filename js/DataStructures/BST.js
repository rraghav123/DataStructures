class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    // O(logn)
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let curr = this.root;
    while (true) {
      if(curr.value === val) {
        return this;
      }
      if (curr.value > val) {
        if (curr.left === null) {
          curr.left = newNode;
          return this;
        }
        curr = curr.left;
      } else {
        if(curr.right === null) {
          curr.right = newNode;
          return this;
        }
        curr = curr.right;
      }
    }
  }

  find(value) {
    // O(logn)
    if(!this.root) {
      return false;
    }
    let current = this.root;
    let found = false;
    while(current && !found) {
      if(value < current.value) {
        current = current.left;
      } else if(value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return found ? current : found;
  }

  bfs() {
    let node = null;
    var data = [];
    let queue = [];
    queue.push(this.root);
    while(queue.length) {
      node = queue.shift();
      data.push(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);

    }
    return data;
  }

  dfsPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if(node.left) {
        traverse(node.left);
      } if(node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return data
  }

  dfsPostOrder() {
    let data = [];
    function traverse(node) {
      if(node.left) {
        traverse(node.left);
        data.push(node.left.value);
      } if(node.right) {
        traverse(node.right);
        data.push(node.right.value);
      }
    }
    traverse(this.root);
    data.push(this.root.value);
    return data
  }

  dfsInOrder() {
    let data = []
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);


//         10
//     6         15
//   3   8           20
