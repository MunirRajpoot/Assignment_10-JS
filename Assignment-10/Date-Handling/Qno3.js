// 3. Write a JavaScript function to get the number of days in a month

function getDayInMonth(Year, Month) {
    return new Date(Year, Month, 0 ).getDate()
}
 let date= new Date();
 let currentYear= date.getFullYear();
 let currentMonth= date.getMonth()+1;

// if we have to find days in July
 let dayInJuly= getDayInMonth(2023, 3)
 console.log(dayInJuly);
