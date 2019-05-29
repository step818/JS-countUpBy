export function Counter(finalNum, countBy) {
  for(let i=0; i<=finalNum; i+countBy) {
    i += countBy;
    console.log(i);
  }
  return i;
}
