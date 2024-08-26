function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  let sequence = [0, 1];
  while (sequence.length < n) {
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
  }
  return sequence;
}
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
