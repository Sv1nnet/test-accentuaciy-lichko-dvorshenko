function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

class DoubleLinkedList {
  constructor() {
    this._length = 0;
    this._head = null;
    this._tail = null;
    this._currentNode = null;
  }

  add(value) {
    const node = new Node(value);
    const currentNode = this._head;

    this._currentNode = node;
    this._length += 1;

    if (!currentNode) {
      this._head = node;
      this._tail = node;

      return node;
    }

    this._tail.next = node;
    node.prev = this._tail;
    this._tail = node;

    return node;
  }

  getLength() {
    return this._length;
  }

  getCurrent() {
    return this._currentNode;
  }

  getNext() {
    const message = {
      failure: {
        endOfList: 'Failure: end of the list.',
        emptyList: 'Failure: the list is empty',
      },
    };
    const { currentNode } = this;

    // If the list is empty
    if (this._head === null) {
      throw new Error(message.failure.emptyList);
    }

    // If currentNode has no next node then it's the end of the list
    if (currentNode.next === null) {
      throw new Error(message.failure.endOfList);
    }

    this._currentNode = currentNode.next;

    return this._currentNode;
  }

  getPrev() {
    const message = {
      failure: {
        startOfList: 'Failure: you are currenty on the start of the list.',
        emptyList: 'Failure: the list is empty',
      },
    };
    const { currentNode } = this;

    // If list is empty
    if (this._head === null) {
      throw new Error(message.failure.emptyList);
    }

    // If node is first
    if (currentNode.prev === null) {
      throw new Error(message.failure.startOfList);
    }

    this._currentNode = currentNode.prev;

    return this._currentNode;
  }

  getFirst() {
    if (this._head === null) {
      throw new Error('Failure: the list is empty');
    }

    this._currentNode = this._head;
    return this._head;
  }

  getLast() {
    if (this._tail === null) {
      throw new Error('Failure: the list is empty');
    }

    this._currentNode = this._tail;
    return this._tail;
  }

  searchNodeAt(position) {
    const length = this._length;
    const message = {
      failure: {
        nonExistentNode: 'Failure: non-existent node in this list.',
      },
    };

    let currentNode = this._head;
    let count = 1;

    // Wrong position
    if (length === 0 || position < 1 || position > length) {
      throw new Error(message.failure);
    }

    // Correct position
    while (count < position) {
      currentNode = currentNode.next;
      count += 1;
    }

    this._currentNode = currentNode;

    return currentNode;
  }

  remove(position) {
    const length = this._length;
    const message = {
      failure: {
        nonExistentNode: 'Failure: non-existent node in this list.',
      },
    };

    let currentNode = this._head;
    let nodeToDelete = null;
    let deletedNode = null;
    let count = 1;

    // Worng position
    if (position < 0 || position > length) {
      throw new Error(message.failure.nonExistentNode);
    }

    // Remove first node
    if (position === 1) {
      this._head = currentNode.next;
      this._head.prev = null;
      deletedNode = currentNode;
      currentNode = null;
      this._length -= 1;

      return deletedNode;
    }

    // Remove not first node
    while (count < position) {
      currentNode = currentNode.next;
      count += 1;
    }

    nodeToDelete = currentNode;
    nodeToDelete.prev.next = nodeToDelete.next;
    nodeToDelete.next.prev = nodeToDelete.prev;

    currentNode = nodeToDelete.prev;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    if (this._currentNode === deletedNode) {
      this._currentNode = currentNode;
    }
    this._length -= 1;

    return deletedNode;
  }
}

export default DoubleLinkedList;
