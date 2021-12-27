function isPerfect(num) {
  let divisors = 0;

  for (let i = 1; i < num; i++) {
    if (num % i == 0) divisors += i;
  }

  if (num == divisors) return true;
  else return false;
}
// Main output using "isPerfect"
for (let i = 1; i <= 1000; i++) {
  if (isPerfect(i)) {
    console.log(i + " is a perfect number.");
  }
}

// 6,28,496
