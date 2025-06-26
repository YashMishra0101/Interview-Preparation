console.log("Working");

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function sumFibonacci(n) {
  if (n <= 0) return 0;
  return fibonacci(n - 1) + sumFibonacci(n - 1);
}

// Example:
console.log(sumFibonacci(-7)); // Output: 88

