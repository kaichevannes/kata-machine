type Node<T> = {
  value: T,
  next?: Node<T>,
}

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  enqueue(item: T): void {
    this.length += 1;
    if (this.head === undefined || this.tail === undefined) {
      this.head = { value: item, next: undefined };
      this.tail = this.head;
      return;
    }

    const node = { value: item, next: undefined };
    this.tail.next = node;
    this.tail = node;
  }

  deque(): T | undefined {
    if (this.head === undefined) {
      return undefined;
    }

    const val = this.head.value;
    this.head = this.head.next;
    this.length -= 1;
    return val;
  }

  peek(): T | undefined {
    if (this.head === undefined) {
      return undefined;
    }

    return this.head.value;
  }
}
