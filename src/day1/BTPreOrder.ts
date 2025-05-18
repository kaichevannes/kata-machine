function walk(node: BinaryNode<number> | null): number[] {
  if (!node) {
    return []
  }

  return [node.value].concat(walk(node.left)).concat(walk(node.right));
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
  return walk(head);
}
