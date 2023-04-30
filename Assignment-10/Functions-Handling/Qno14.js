// 14. Write a js program to find sum of all even or odd numbers in given range using function.
function findEvenOdd(startNum, endNum){
    let evenNum=0
    let oddNum=0
    for ( let i= startNum; i<= endNum; i++){
        if(i % 2 ==0)
      {evenNum= evenNum + i} 
      else {oddNum= oddNum + i;}
    }
    return {'Sum of odd Number is':oddNum, 'Sum of even Number is': evenNum}
}
console.log(findEvenOdd(1,10));