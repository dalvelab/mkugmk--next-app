export function compareArrays<T>(a: Array<T>, b: Array<T>) {
  if (a.length > b.length) {
    return a;
  } else {
    return b;
  }
}
