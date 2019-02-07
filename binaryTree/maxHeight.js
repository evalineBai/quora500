// https://www.techiedelight.com/calculate-height-binary-tree-iterative-recursive/
// Calculate height of binary tree
// Write an efficient algorithm to compute the height of a binary tree.
// The height or depth of a tree is number or edges or nodes on longest path form root to leaf.
// Height of empty tree is 0 and height of tree with one node is 1.

class Node {
	constructor(val) {
		this.value = val;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		const newNode = new Node(val);
		if (!this.root) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}

	insertNode(node, newNode) {
		if (newNode.value < node.value) {
			if (!node.left) {
				node.left = newNode;
			} else {
				this.insertNode(node.left, newNode);
			}
		} else if (newNode.value > node.value) {
			if (!node.right) {
				node.right = newNode;
			} else {
				this.insertNode(node.right, newNode);
			}
		}
	}
  
  // Recursive Approach
  findMaxHeight(root = this.root) {
		if (!root) {
			return 0;
		}
		if (!root.left && !root.right) {
			return 1;
		}
		return Math.max(this.findMaxHeight(root.left), this.findMaxHeight(root.right)) + 1;
  }

  // Iterative Approach
  // findMaxHeightIteratively(root = this.root) {

  // }

}

const Tree = new BinaryTree();
Tree.insert(3);
Tree.insert(9);
Tree.insert(20);
Tree.insert(2);
Tree.insert(7);

console.log(Tree.findMaxHeight());
// console.log(Tree.findMaxHeightIteratively());













