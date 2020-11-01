// // Setting a variable to get current date and time
// let currentDate = new Date();

// // Setting arrays for days and months to print instead of having numbers
// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// // setting variable to get the current date and month out of the array
// let currentMonth = months[currentDate.getMonth()];
// let currentDay = days[currentDate.getDay()];

// // printing current date to paragraph tagg with ID name currentDay
// $("#currentDay").append(currentDay + ", " + currentMonth + " " + currentDate.getDate() + ", " + currentDate.getFullYear());

let currentDate = moment().format('dddd, MMMM Do, YYYY');

$("#currentDay").append(currentDate);

console.log(moment().format('dddd, MMMM Do, YYYY'));