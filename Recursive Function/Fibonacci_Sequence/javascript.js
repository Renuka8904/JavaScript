function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function printFibonacciSeries(count) {
  const series = [];
  for (let i = 0; i < count; i++) {
    series.push(fibonacci(i));
  }
  console.log(series.join(", "));
}

printFibonacciSeries(10);
// Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34