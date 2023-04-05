// 7. Write a JavaScript function to test whether a date is a weekend

let givenDate= new Date(03/26/2023)
let dayOnTheDate= givenDate.getDay();
if (day= 0) {
   console.log("This is weekend");
} else {console.log("This is not a weekend");}
 

function isWeekend(date) {
   let dayOnDate= date.getDay()
   if (dayOnDate=0) {
      console.log("This is weekend");
   } else{console.log("This is not weekend");}
}
console.log(isWeekend('Nov 15, 2014'));
