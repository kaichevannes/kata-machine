export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
  let prev = new Array(graph.length).fill(-1);
  let seen = new Array(graph.length).fill(false);

  seen[source] = true;
  let Q = [source];

  while (Q.length) {
    const curr = Q.shift() as number;

    if (curr === needle) {
      break;
    }

    const adjs = graph[curr]
    for (let i = 0; i < adjs.length; ++i) {
      if (adjs[i] === 0 || seen[i]) {
        continue;
      }

      seen[i] = true;
      prev[i] = curr;
      Q.unshift(i);
    }
  }

  if (prev[needle] === -1) {
    return null;
  }

  let path = [needle];
  let curr = needle;
  while (prev[curr] !== -1) {
    path.unshift(prev[curr]);
    curr = prev[curr];
  }
  return path;
}
