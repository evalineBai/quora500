class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let node = new BST(value);
    let currentNode = this;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = node;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = node;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }

  contains(value) {
    let currentNode = this;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          return false;
        }
      } else if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          return false;
        }
      } else {
        return true;
      }
    }
  }

  remove(value, parentNode = null) {
    let currentNode = this;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        if (currentNode.left && currentNode.right) {
          currentNode.value = currentNode.right.getMinValue();
          currentNode.right.remove(currentNode.value, currentNode);
        } else if (!parentNode) {
          if (currentNode.left) {
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right) {
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else {
            currentNode.value = null;
          }
        } else if (currentNode === parentNode.left) {
          parentNode.left = currentNode.left ? currentNode.left : currentNode.right;
        } else if (currentNode === parentNode.right) {
          parentNode.right = currentNode.left ? currentNode.left : currentNode.right;
        }
        break;
      }
    }
    return this;
  }

  getMinValue() {
    let currentNode = this;
    if (!currentNode.left) {
      return currentNode.value;
    } else {
      currentNode = currentNode.left;
    }
  }

  isValid() {
    const nodeStack = [];
    nodeStack.push({
      node: this,
      min: -Infinity,
      max: Infinity
    });
    while (nodeStack.length) {
      const { node, min, max } = nodeStack.pop();
      if (node.value < min || node.value >= max) {
        return false;
      }
      if (node.left) {
        nodeStack.push({
          node: node.left,
          min,
          max: node.value
        });
      }
      if (node.right) {
        nodeStack.push({
          node: node.right,
          min: node.value,
          max
        });
      }
    }
    return true;
  }

  invert() {
    const queue = [];
    queue.push(this);
    while (queue.length) {
      let currentNode = queue.shift();
      let temp = currentNode.left;
      currentNode.left = currentNode.right;
      currentNode.right = temp;
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }
}