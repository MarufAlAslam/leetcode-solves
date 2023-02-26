function countPrimes(n) {
  if (n <= 2) {
    return 0;
  }

  let primes = [];
  let i,
    j,
    count = 0;

  for (i = 2; i < n; i++) {
    primes[i] = true;
  }

  for (i = 2; i <= Math.sqrt(n); i++) {
    if (primes[i]) {
      for (j = i + i; j < n; j += i) primes[j] = false;
    }
  }

  for (i = 2; i < n; i++) if (primes[i]) count++;

  return count;
}

console.log(countPrimes(499979));
