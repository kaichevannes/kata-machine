export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  let queue = [head];

  while (queue.length) {
    const curr = queue.shift() as BinaryNode<number>;

    if (curr.value === needle) {
      return true;
    }

    if (curr.left) {
      queue.unshift(curr.left);
    }
    if (curr.right) {
      queue.unshift(curr.right);
    }
  }

  return false;
}
