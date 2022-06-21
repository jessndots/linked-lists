/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } 
    if (this.tail != null) {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length = this.length + 1;
    return undefined;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    }
    if (this.head != null) {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length = this.length + 1;
    return undefined
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length -1)
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0)
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length) {
      throw new Error('Invalid index.');
    }
    if (idx < 0) {
      throw new Error('Invalid index.');
    }
    if (idx == 0) {
      return this.head.val
    }
    let currentNode = this.head;
    for (let i=1; i<=idx; i++) {
      currentNode = currentNode.next
    }
    return currentNode.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length) {
      throw error;
    }
    if (idx < 0) {
      throw error;
    }
    if (idx == 0) {
      this.head.val = val
    }
    let currentNode = this.head;
    for (let i=1; i<=idx; i++) {
      currentNode = currentNode.next
    }
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length) {
      throw new Error('Invalid index.');
    }
    if (idx < 0) {
      throw new Error('Invalid Index');
    }
    
    let newNode = new Node(val)
    if (this.length == 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.tail = newNode;
    } else if (idx == this.length) {
      this.push(val)
    } else {
      let previous = this.head;
      let currentNode = this.head;
      for (let i=1; i<=idx; i++) {
        previous = currentNode;
        currentNode = currentNode.next;
      }
      newNode.next = previous.next;
      previous.next = newNode;
    }
    this.length = this.length +1

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length) {
      throw new Error('Invalid index.');
    }
    if (idx < 0) {
      throw new Error('Invalid Index');
    }
    let removed;
    let previous = this.head;
    let current = this.head;

    if (this.length == 1) {
      removed = this.head;
      this.head = null;
      this.tail = null;
    } else if (idx == 0) {
      removed = this.head;
      this.head = this.head.next;
    } else {
      for (let i=1; i<= idx; i++) {
        previous = current;
        current = current.next;
      }
      removed = current;
      previous.next = current.next;
      if (idx == this.length -1) {
        this.tail = previous;
      }
    }
    this.length = this.length - 1;
    return removed.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length == 0) {
      return 0
    } else if (this.length == 1) {
      return this.head.val
    }
    let total = 0;
    let current = this.head;
    for (let i=0; i<this.length; i++) {
      total = total + current.val;
      if (current.next) {
        current = current.next
      }
    }
    return total / this.length
  }
}

module.exports = LinkedList;
