// https://www.techiedelight.com/reverse-linked-list-part-1-iterative-solution/
// https://www.techiedelight.com/reverse-linked-list-part-2-recursive-solution/

// Reverse a linked list iteratively and recursively

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  reverse() {
    var prev = null;
    var current = this.head;
    var next = current.next;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      this.head = prev;
    }
  }

  reverseUtil(current, prev) {
    if (!current.next) {
      this.head = current;
      current.next = prev;
      return;
    }
    var next = current.next;
    current.next = prev;
    this.reverseUtil(next, current);
  }

  recurseReverse() {
    if (!this.head) {
      return;
    }
    this.reverseUtil(this.head, null);
  }
}

let list = new LinkedList();
list.push(5);
list.push(6);
list.push(2);
list.recurseReverse();

console.log(list);