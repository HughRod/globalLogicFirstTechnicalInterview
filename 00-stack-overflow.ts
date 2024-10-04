function printHelloWorldNTimes(n: number) {
  console.log("Hello world!");

  printHelloWorldNTimes(n - 1);
}

printHelloWorldNTimes(10);
