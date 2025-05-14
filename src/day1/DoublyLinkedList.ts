type Node<T> = {
  value: T,
  next?: Node<T>;
  prev?: Node<T>;
}

export default class DoublyLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  prepend(item: T): void {
    const node = { value: item } as Node<T>;

    this.length++;
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  insertAt(item: T, idx: number): void {
    if (idx > this.length) {
      throw new Error("Whoops!");
    }
    if (idx === this.length) {
      this.append(item);
      return;
    }
    if (idx === 0) {
      this.prepend(item);
      return;
    }

    this.length++;
    const curr = this.getAt(idx) as Node<T>;
    const node = { value: item } as Node<T>;

    node.next = curr;
    node.prev = curr.prev;
    curr.prev = node;
    curr.prev.next = node;
  }

  append(item: T): void {
    const node = { value: item } as Node<T>;

    this.length++;
    if (!this.tail) {
      this.head = this.tail = node;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  remove(item: T): T | undefined {
    let curr = this.head;
    for (let i = 0; curr && i < this.length; ++i) {
      if (curr.value === item) {
        break;
      }
      curr = curr.next;
    }

    if (!curr) {
      return undefined;
    }

    return this.removeNode(curr);
  }

  get(idx: number): T | undefined {
    if (!this.head) {
      return undefined;
    }

    return this.getAt(idx)?.value;
  }

  removeAt(idx: number): T | undefined {
    if (!this.head) {
      return undefined;
    }

    const node = this.getAt(idx) as Node<T>;
    return this.removeNode(node);
  }

  private removeNode(node: Node<T>): T | undefined {
    if (this.length === 0) {
      const result = this.head?.value;
      this.head = this.tail = undefined;
      return result;
    }

    this.length--;

    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }

    if (node === this.head) {
      this.head = node.next;
    }
    if (node === this.tail) {
      this.tail = node.prev;
    }

    node.next = node.prev = undefined;
    return node.value;
  }

  private getAt(idx: number): Node<T> | undefined {
    let curr = this.head as Node<T>;
    for (let i = 0; i < idx && curr.next; ++i) {
      curr = curr.next;
    }
    return curr;
  }
}
