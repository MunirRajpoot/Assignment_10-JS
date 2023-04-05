// 12. Write a js program to print all even or odd numbers in given range using function.

function findEvenOdd(startNum, endNum){
    for ( let i= startNum; i<= endNum; i++){
        if(i % 2 ==0)
      {console.log(i, 'are even numbers')} 
      else { console.log(i,' are odd numbers');}
    }
}
findEvenOdd(1,10)