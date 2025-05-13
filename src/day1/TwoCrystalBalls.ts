export default function two_crystal_balls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));
  let broken = false;

  let i = 0;
  while (!broken && i < breaks.length) {
    i += jumpAmount;
    broken = breaks[i];
  }

  for (let j = 0; j < i + jumpAmount; j++) {
    if (breaks[j]) {
      return j;
    }
  }

  return -1;
}
