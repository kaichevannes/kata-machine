function qs(arr: number[]): number[] {
  if (arr.length === 0) {
    return [];
  }

  const pivot = arr[0];

  if (arr.length === 1) {
    return [pivot];
  }

  const before: number[] = [];
  const after: number[] = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      before.push(arr[i]);
    } else {
      after.push(arr[i]);
    }
  }

  return qs(before).concat([pivot]).concat(qs(after));
}

export default function quick_sort(arr: number[]): void {
  const sorted = qs(arr);

  for (let i = 0; i < arr.length; ++i) {
    arr[i] = sorted[i];
  }
}
