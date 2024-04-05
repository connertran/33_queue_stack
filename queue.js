/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  print() {
    let current = this.first;

    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newVal = new Node(val);
    if (!this.first) {
      this.first = newVal;
      this.last = newVal;
    } else {
      this.last.next = newVal;
      this.last = newVal;
    }
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.first === null) {
      throw new Error("The queue is empty");
    } else {
      if (this.first.val === this.last.val) {
        // if the linked list has only one item
        const deleted = this.first.val;
        this.first = null;
        this.last = null;
        this.size--;
        return deleted;
      } else {
        // if the linked list has more than one element
        const deleted = this.first.val;
        this.first = this.first.next;
        this.size--;
        return deleted;
      }
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
