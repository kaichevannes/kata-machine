export default class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.length = 0;
    this.data = [];
  }

  insert(value: number): void {
    this.data[this.length] = value;

    // bubble up
    let i = this.length;
    while (i > 0) {
      let j = Math.floor((i - 1) / 2); // parent

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
      let leftChildIndex = 2 * i + 1; // child
      let rightChildIndex = 2 * i + 2;

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
}
