const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;

  return num > 1;
};

function findPrime(...numbers) {
  console.log("Output:");

  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) console.log(numbers[i] + " is a prime number");
    else console.log(numbers[i] + " is NOT a prime number");
  }
}

// Test run:
findPrime(2, 5, 8, 21, 13);
findPrime(3, 5);

// Check console for output.
