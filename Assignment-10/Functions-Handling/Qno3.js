// 3. Write a js program to find maximum and minimum between two numbers using functions
let num1= 10;
let num2=10;
function findMaxBTWtwo( num1,num2){
    if(num1> num2){
        console.log(num1,'is the maximum' , num2, 'is the minimum');
    } else if( num2> num1){
        console.log(num2,'is the maximum', num1,'is the minimum ');
    } else {console.log('Both numbers are equal');}
}
findMaxBTWtwo(num1, num2)