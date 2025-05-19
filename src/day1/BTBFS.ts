export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  let nodes = [head];

  while (nodes.length > 0) {
    const node = nodes.shift() as BinaryNode<number>;

    if (node.value === needle) {
      return true;
    }

    if (node.left) {
      nodes.unshift(node.left);
    }
    if (node.right) {
      nodes.unshift(node.right);
    }
  }

  return false;
}
