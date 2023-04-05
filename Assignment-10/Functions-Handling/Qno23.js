// 23. Write a js program to find sum of elements of array using function.

let array= [1,2,3,4,5]
function findSumOfArr( array){
    let sum=0
    for( let i=0; i<= array.length; i++){
        sum=sum+i
    } return sum
}
console.log(findSumOfArr(array));

let num= 1234;
let sum= 0;
function findSumOfDigits( num){
  while( num > 0){
    let rem= num % 10
    sum= sum + rem
    num= parseInt(num/10)
  }return sum
}
console.log( findSumOfDigits(num));
