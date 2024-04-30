import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlgorithmsService {
  constructor() {}

  fibonnacci(n: number) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

  trinagular(n: number) {
    return (n * (n + 1)) / 2;
  }

  primeNumbers(n: number) {
    let i = 2;
    let primos = [];

    while (primos.length < n) {
      if (this.prime(i)) primos.push(i);
      i++;
    }
    return primos.pop();
  }

  prime(num: number) {
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }
}
