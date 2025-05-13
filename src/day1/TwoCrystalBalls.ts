export default function two_crystal_balls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = 0;
  while (!breaks[i] && i < breaks.length) {
    i += jumpAmount;
  }

  for (let j = i - jumpAmount; j < i; j++) {
    console.log(j)
    if (breaks[j]) {
      return j;
    }
  }

  return -1;
}
