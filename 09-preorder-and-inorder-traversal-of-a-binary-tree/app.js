const { BinarySearchTree } = require('./binary-search-tree');


//        10
//    5         13
//2     7   11     16


const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(7);
tree.insert(13);
tree.insert(11);
tree.insert(16);
tree.insert(10);

// console.log(tree);
console.log(tree.dfsPreOrder());
console.log(tree.dfsInOrder());