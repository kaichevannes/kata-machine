export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
  let prev = new Array(graph[0].length).fill(-1);
  let seen = new Array(graph[0].length).fill(false);
  seen[source] = true;
  let Q = [source];

  outer:
  while (Q.length) {
    const curr = Q.shift() as number;

    for (let maybeNode = 0; maybeNode < graph[curr].length; ++maybeNode) {
      if (graph[curr][maybeNode] === 0 || seen[maybeNode]) {
        continue;
      }
      const connectedNode = maybeNode;

      prev[connectedNode] = curr;
      Q.unshift(connectedNode);

      if (connectedNode === needle) {
        break outer;
      }
    }
    seen[curr] = true;
  }

  if (prev[needle] === -1) {
    return null;
  }

  let path = [needle];
  let curr = needle;
  do {
    path.unshift(prev[curr]);
    curr = prev[curr];
  }
  while (prev[curr] !== -1)
  return path;
}
