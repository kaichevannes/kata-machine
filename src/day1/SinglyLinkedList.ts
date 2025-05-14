type Node<T> = {
  value: T,
  next?: Node<T>
}

export default class SinglyLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  prepend(item: T): void {
    this.length++;
    const node = { value: item, next: this.head };
    this.head = node;

    if (!this.tail) {
      this.tail = this.head;
    }
  }

  insertAt(item: T, idx: number): void {
    this.length++;
    const node = { value: item, next: undefined } as Node<T>;

    let curr = this.head;
    for (let i = 0; i < idx - 1 && curr; i++) {
      curr = curr.next;
    }

    if (!curr) {
      return;
    }

    const next = curr.next as Node<T>;
    curr.next = node;
    node.next = next.next;
  }

  append(item: T): void {
    this.length++;
    const node = { value: item };

    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  remove(item: T): T | undefined {
    let curr = this.head;

    if (!curr) {
      return undefined;
    }

    if (curr.value === item) {
      this.length--;
      this.head = curr.next;
      return item;
    }

    while (curr.next && curr.next.value !== item) {
      curr = curr.next;
    }

    if (!curr) {
      return undefined;
    }

    this.length--;
    const value = curr.next?.value;
    curr.next = curr.next?.next;;

    return value;
  }

  get(idx: number): T | undefined {
    let curr = this.head;
    for (let i = 0; i < idx && curr; i++) {
      curr = curr.next;
    }

    return curr?.value;
  }

  removeAt(idx: number): T | undefined {
    if (idx === 0) {
      if (!this.head) {
        return undefined
      }

      this.length = Math.max(0, this.length - 1);
      const value = this.head.value;

      if (!this.head.next) {
        this.head = undefined;
      } else {
        this.head = this.head.next;
      }

      return value;
    }

    let curr = this.head;
    for (let i = 0; i < idx - 1 && curr; i++) {
      curr = curr.next;
    }

    if (!curr) {
      return;
    }

    this.length--;

    const value = curr.next?.value;
    curr.next = curr.next?.next;;

    return value;
  }
}
