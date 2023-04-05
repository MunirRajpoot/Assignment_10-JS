// 27. Write a JavaScript function to get a short textual representation of a month, three letters (Jan through Dec).   

let dt = new Date(2015,2, 1); 
// let dtt1=dt.getMonth() 
// console.log(dtt1);
function monthName(date){
    let numOfMonth= date.getMonth()
    if ( numOfMonth=1){console.log("Jan");} else if ( numOfMonth=2){
        console.log("Feb");
    }
    }
    // return numOfMonth
console.log(monthName(dt));