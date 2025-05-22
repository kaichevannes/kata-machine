export default function dijkstra_list(source: number, sink: number, arr: WeightedAdjacencyList): number[] {
  const seen = new Array(arr.length).fill(false);
  const dist = new Array(arr.length).fill(Infinity);
  dist[source] = 0;
  const path = new Array(arr.length).fill(-1);

  const Q: number[] = [source];

  while (Q.length) {
    const curr = Q.shift() as number;
    if (seen[curr]) {
      continue;
    }

    seen[curr] = true;

    for (let edge of arr[curr]) {
      const adjNode = edge.to;
      if (adjNode === 0) {
        continue;
      }

      if (dist[curr] + edge.weight < dist[adjNode]) {
        path[adjNode] = curr;
        dist[adjNode] = dist[curr] + edge.weight;
      }

      Q.push(adjNode);
    }
  }

  const route = [sink];
  let curr = sink;
  while (path[curr] !== -1) {
    route.unshift(path[curr]);
    curr = path[curr];
  }
  return route;
}
