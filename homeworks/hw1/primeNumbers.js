const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;

  return num > 1;
};

// Main output using "isPrime"
for (let i = 1; i <= 1000; i++) {
  if (isPrime(i)) {
    console.log(i + " is a prime number.");
  }
}
