// node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// binary search tree
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert a value
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // find a value
  // return node
  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let isFound = false;
    while (current && !isFound) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else isFound = true;
    }
    // return undefined if node is not found
    if (!isFound) return undefined;
    return current;
  }

  // contains
  // return true if value contains otherwise false
  contains(value) {
    if (this.root === null) return false;
    let current = this.root;
    let isFound = false;
    while (current && !isFound) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else isFound = true;
    }
    // return false if node is not found
    if (!isFound) return false;
    return isFound;
  }

  // depth first search -- preorder
  dfsPreOrder() {
    let data = [];
    // start from root
    const current = this.root;
    function traverse(node) {
      // add data to array if left most node traversed
      data.push(node.value);
      if (node.left)
        // if node has left node do traverse again with left node
        traverse(node.left);
      if (node.right)
        // if node has left node do traverse again with right node
        traverse(node.right);
    }
    traverse(current);
    return data;
  }

  // depth first search -- inorder
  dfsInOrder() {
    let data = [];
    // start from root node
    let current = this.root;
    function traverse(node) {
      if (node.left)
        // if node has left node do traverse again with left node
        traverse(node.left);
      // add data to array if left most node traversed
      data.push(node.value);
      if (node.right)
        // if node has left node do traverse again with right node
        traverse(node.right);
    }
    // traverse starts with root node
    traverse(current);
    return data;
  }

  // Breadth first search
  breadthFirstSearch() {
    // store visited node values
    let data = [];
    // store not visited node values
    let queue = [];
    // initial node is root node
    let node = this.root;
    // add root node to the queue
    queue.push(this.root);
    while (queue.length) {
      // set node to removed value
      node = queue.shift();
      // add unshifted node to data []
      data.push(node.value);
      if (node.left)
        // if node has a left node add to the queue
        queue.push(node.left);
      if (node.right)
        // if node has a right node add to the queue
        queue.push(node.right);
    }
    // return node values
    return data;
  }

  // get leaf nodes of a binary tree
  getLeafNodes() {
    let leafNodes = [];
    // start from root
    const current = this.root;
    function traverse(node) {
      currentLevel++;
      if (node.left === null && node.right === null) leafNodes.push(node.value);

      // add data to array if left most node traversed
      if (node.left)
        // if node has left node do traverse again with left node
        traverse(node.left);
      if (node.right)
        // if node has left node do traverse again with right node
        traverse(node.right);
    }
    traverse(current);
    return leafNodes;
  }
}

module.exports = { BinarySearchTree };
