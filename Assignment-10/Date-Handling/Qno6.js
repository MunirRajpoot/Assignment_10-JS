// 6. Write a JavaScript function to add specified minutes to a Date object.

let date = new Date()
console.log(date.getMilliseconds());
let minutes= 30
function addMinutes (date, minutes) {
  let sumOfMinutes= date + minutes
  return sumOfMinutes
}
console.log(addMinutes( date,minutes).toString());
