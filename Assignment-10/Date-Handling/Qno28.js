// 28. Write a JavaScript function to get a full numeric representation of a year (4 digits).

let dt = new Date(2015, 10, 1) 
function fullYear(date){
    console.log(date.getFullYear());
}
fullYear(dt)
