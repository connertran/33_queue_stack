/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newVal = new Node(val);
    if (!this.first) {
      this.first = newVal;
      this.last = newVal;
      this.size++;
    } else {
      newVal.next = this.first;
      this.first.prev = newVal;
      this.first = newVal;
      this.size++;
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.first) {
      throw new Error("The stack is empty");
    } else {
      let deleted;
      if (this.size === 1) {
        deleted = this.first;
        this.first = null;
        this.last = null;
        this.size--;
      } else {
        deleted = this.first;
        this.first = this.first.next;
        this.first.prev = null;
        this.size--;
      }
      return deleted.val;
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
