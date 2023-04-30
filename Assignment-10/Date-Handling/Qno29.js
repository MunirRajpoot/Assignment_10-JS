// 29. Write a JavaScript function to get a two digit representation of a year.   

// Examples : 79 or 04

// Test Data :

dt = new Date(1989, 10, 1);

console.log(sort_year(dt));
"89"

let date= new Date(2002,11,11)

function yearInDate(date){
    let year= date.getFullYear()
    let yearToStr= year.toString()
    console.log(yearToStr.slice(2,4))
 }
yearInDate(date)