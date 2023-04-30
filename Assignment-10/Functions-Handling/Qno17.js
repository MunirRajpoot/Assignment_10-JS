// 17. Write a js program to find sum of digits of a given number using function.
let num=1234
function SumOfDigitInNum(num){
        let numToStr= num.toString()
        let strToArr= []
        for( let i= 0; i<numToStr.length; i++){
            strToArr.push(parseInt(numToStr[i]))
        }
        let sum=0
        for(let i=0; i<strToArr.length;i++){
            sum= sum + strToArr[i]
        }
        return sum
    }
   
    console.log(SumOfDigitInNum(num));