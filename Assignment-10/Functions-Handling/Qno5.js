// 5. Write a js program to check whether a number is prime, Armstrong or perfect number using functions.

let num= 69;
 function isPrime(n) {
    if( n <=2)
      return 'This is not prime Number'

    for (let i = 2; i < n; i++ ){
        if (n % i == 0) {
            return 'This is not prime Number'
        }
    } 
    return 'This is prime Number'
 }

console.log(isPrime(num));