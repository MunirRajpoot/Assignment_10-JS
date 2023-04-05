// 20. Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun).
let date= new Date(2015, 10, 3)
let dayOnDate= date.getDay()

do{ console.log("Sun");}while( dayOnDate=0)
do{ console.log("Mon");}while( dayOnDate=1)
do{ console.log("Tue");}while( dayOnDate=2)
do{ console.log("Wed");}while( dayOnDate=3)
do{ console.log("Thu");}while( dayOnDate=4)
do{ console.log("Fri");}while( dayOnDate=5)
do{ console.log("Sat");}while( dayOnDate=6)