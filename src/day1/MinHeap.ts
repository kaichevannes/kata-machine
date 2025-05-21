export default class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value: number): void {
    this.data[this.length] = value;

    // bubble up
    let i = this.length;
    while (i > 0) {
      let j = this.parent(i); // parent

      if (this.data[i] >= this.data[j]) {
        break;
      }

      const temp = this.data[i];
      this.data[i] = this.data[j];
      this.data[j] = temp;
      i = j;
    }

    this.length++;
  }

  delete(): number {
    const result = this.data[0];
    // can be undefined but we don't care in this example
    this.data[0] = this.data.pop() as number;

    // bubble down
    let i = 0;
    while (i < this.length) {
      let leftChildIndex = this.leftChild(i);
      let rightChildIndex = this.rightChild(i);

      if (!this.data[leftChildIndex]) {
        break;
      }

      let j;
      if (!this.data[rightChildIndex]) {
        j = leftChildIndex;
      }
      else if (this.data[leftChildIndex] <= this.data[rightChildIndex]) {
        j = leftChildIndex;
      }
      else {
        j = rightChildIndex;
      }

      if (this.data[i] < this.data[j]) {
        break;
      }

      const temp = this.data[i];
      this.data[i] = this.data[j];
      this.data[j] = temp;
      i = j;
    }

    this.length--;
    return result;
  }

  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2)
  }

  private leftChild(idx: number): number {
    return 2 * idx + 1;
  }

  private rightChild(idx: number): number {
    return 2 * idx + 2;
  }
}
