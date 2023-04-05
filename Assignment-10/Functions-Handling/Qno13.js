// 13. Write a js program to find sum of all natural numbers between 1 to n using function.

function findSumOfNatNum (n){
    let temp=0
  for( let i= 1; i <= n; i++){
   temp= temp+i
}return temp
}
console.log(findSumOfNatNum(5));
