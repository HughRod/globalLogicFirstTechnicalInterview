function factorial(n) {
  if (n <= 0) {
    return "Please enter a number equal or greater than 1";
  }
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log("Factorial of 0 is " + factorial(0));
console.log("Factorial of 1 is " + factorial(1));
console.log("Factorial of 5 is " + factorial(5));
console.log("Factorial of 10 is " + factorial(10));
