class Node {
  constructor(item) {
    this.value = item;
    this.next = null;
  }
}

class CustomList {
  constructor() {
    this.head = null;
  }

  append(item) {
    if (this.head === null) {
      this.head = new Node(item);
      return;
    }

    let t = this.head;
    while (t.next !== null) {
      t = t.next;
    }
    t.next = new Node(item);
  }

  appendToIndex(index, item) {
    if (index === 0) {
      const node = new Node(item);
      node.next = this.head;
      this.head = node;
      return;
    }
    let count = 0;
    let t = this.head;

    while (count < index - 1 && t !== null) {
      t = t.next;
      count += 1;
    }

    if (t === null) {
      throw new Error("Index out of bounds");
    }

    const node = new Node(item);
    node.next = t.next;
    t.next = node;
  }

  pushToTail(item) {
    this.append(item);
  }

  removeLast() {
    if (this.head === null) {
      throw new Error("List is empty");
    }

    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let t = this.head;
    let prev = null;

    while (t.next !== null) {
      prev = t;
      t = t.next;
    }

    prev.next = null;
  }

  remove(index) {
    if (index === 0) {
      if (this.head === null) {
        throw new Error("List is empty");
      }
      this.head = this.head.next;
      return;
    }

    let count = 0;
    let t = this.head;
    let prev = null;

    while (count < index && t !== null) {
      prev = t;
      t = t.next;
      count += 1;
    }

    if (t === null) {
      throw new Error("Index out of bounds");
    }

    prev.next = t.next;
  }

  get(index) {
    let count = 0;
    let t = this.head;

    while (count < index && t !== null) {
      t = t.next;
      count += 1;
    }

    if (t === null) {
      throw new Error("Index out of bounds");
    }

    return t.value;
  }
}
const myList = new CustomList();

myList.append(5);
myList.append(10);
myList.append(15);

console.log(myList.get(0));
console.log(myList.get(1));
console.log(myList.get(2));

myList.pushToTail(20);

console.log(myList.get(3));

myList.removeLast();

console.log(myList.get(2));
