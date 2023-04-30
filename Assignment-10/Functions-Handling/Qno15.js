// 15. Write a js program to find reverse of any number using function.
function reverseNum(num){
    let numToStr= num.toString()
    let strToArr= []
    for( let i= 0; i<numToStr.length; i++){
        strToArr.push(numToStr[i])
    }
    let arr=strToArr.reverse();
    console.log(arr.join(""));
}
//let num=123456789
reverseNum(123456789)