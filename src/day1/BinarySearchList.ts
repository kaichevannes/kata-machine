export default function bs_list(haystack: number[], needle: number): boolean {
  let bottom = 0;
  let top = haystack.length;

  while (bottom !== top) {
    let i = bottom + Math.floor((top - bottom) / 2);
    if (haystack[i] === needle) {
      return true;
    } else if (haystack[i] < needle) {
      bottom = i + 1;
    } else {
      top = i;
    }
  }

  return false;
}
