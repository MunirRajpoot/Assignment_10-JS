// 18. Write a JavaScript program to calculate age.
let DOB= new Date(2000, 11, 4)
let currDate=new Date()
let age= currDate.getFullYear() - DOB.getFullYear()
console.log(age);
