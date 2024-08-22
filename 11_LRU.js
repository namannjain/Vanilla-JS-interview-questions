class Node{
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache{
  constructor(capacity=5) {
    this.capacity = capacity;
    this.head = new Node(-1, -1);
    this.tail = new Node(-1, -1);
    this.map = new Map();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }

    const node = this.map.get(key);
    this.removeNode(node);
    this.addNode(node);
    return node.val;
  }

  put(key, val) {
    //if already present
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.removeNode(node);
      node.val = val;
      this.addNode(node);
      return;
    }

    if (this.map.size === this.capacity) {
      this.removeNode(this.tail.prev);
    }
    const newNode = new Node(key, val);
    this.addNode(newNode);
    this.map.set(key, newNode);
  }

  removeNode(node) {
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }

  addNode(node) {
    const temp = this.head.next;
    node.next = temp;
    temp.prev = node;
    node.prev = this.head;
    this.head.next = node;
  }
}