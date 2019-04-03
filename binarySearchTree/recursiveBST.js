class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let node = new BST(value);
    if (value < this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = node;
      }
    } else if (value >= this.value) {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = node;
      }
    }
  }

  contains(value) {
    if (value < this.value) {
      if (this.left) {
        return this.left.contains(value);
      } else {
        return false;
      }
    } else if (value > this.value) {
      if (this.right) {
        return this.right.contains(value);
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  remove(value, parent = null) {
    // Find the value on either the left or right side of tree
    if (value < this.value && this.left) {
      this.left.remove(value, this);
    } else if (value > this.value && this.right) {
      this.right.remove(value, this);
    } else {
      // We have found our value and now check for edge cases
      if (this.left && this.right) {
        // Case of removing a node with two children requires you replace the target node value with the value of the leftmost node on the right subtree
        this.value = this.right.getMinValue();
        // Then remove the leftmost node on the right subtree to avoid duplicate nodes
        this.right.remove(this.value, this);
      } else if (!parent) {
        // Case of removing root node (no parents)
        if (this.left) {
          // If root has only a left branch, reassign the left child as the root
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right) {
          // If root has only a right branch, reassign the right child as the root
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        } else {
          // If root has no children, assign to null
          this.value = null;
        }
      } else if (parent.left === this) {
        // Case of removing a node with only a left child
        parent.left = this.left !== null ? this.left : this.right;
      } else if (parent.right === this) {
        // Case of removing a node with only a right child
        parent.right = this.left !== null ? this.left : this.right;
      }
    }
  }

  getMinValue() {
    if (this.left === null) {
      return this.value;
    } else {
      return this.left.getMinValue();
    }
  }

  isValid() {
    const isValidHelper = (tree, min = -Infinity, max = Infinity) => {
      if (!tree) return true;
      if (tree.value < min || tree.value > max) {
        return false;
      }
      const leftIsValid = isValidHelper(tree.left, min, tree.value);
      const rightIsValid = isValidHelper(tree.right, tree.value, max);
      return leftIsValid && rightIsValid;
    }
    return isValidHelper(this, -Infinity, Infinity);
  }

  preOrderTraverse(arr = []) {
    // main, left, right
    if (this) {
      arr.push(this.value);
      if (this.left) {
        this.left.preOrderTraverse(arr);
      }
      if (this.right) {
        this.right.preOrderTraverse(arr);
      }
    }
    return arr;
  }

  inOrderTraverse(arr = []) {
    // left, main, right
    if (this) {
      if (this.left) {
        this.left.preOrderTraverse(arr);
      }
      arr.push(this.value);
      if (this.right) {
        this.right.preOrderTraverse(arr);
      }
    }
    return arr;
  }

  postOrderTraverse(arr = []) {
    // left, right, main
    if (this) {
      if (this.left) {
        this.left.postOrderTraverse(arr);
      }
      if (this.right) {
        this.right.postOrderTraverse(arr);
      }
      arr.push(this.value);
    }
    return arr;
  }

  invert() {
    if (this) {
      let temp = this.left;
      this.left = this.right;
      this.right = temp;
      if (this.left) {
        this.left.invert();
      }
      if (this.right) {
        this.right.invert();
      }
    }
  }
}

let testTree = new BST(10);
testTree.insert(5);
testTree.insert(15);
testTree.insert(2);
testTree.insert(5);
testTree.insert(13);
testTree.insert(14);
testTree.insert(22);
console.log(testTree.preOrderTraverse([]));
console.log(testTree.inOrderTraverse([]));
console.log(testTree.postOrderTraverse([]));
testTree.invert();
console.log(testTree.preOrderTraverse([]));
console.log(testTree.inOrderTraverse([]));
console.log(testTree.postOrderTraverse([]));
