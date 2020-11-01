// Setting a variable to get current date and time
let currentDate = new Date();

// Setting arrays for days and months to print instead of having numbers
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let currentMonth = months[currentDate.getMonth()];
let currentDay = days[currentDate.getDay()];

console.log(currentDay + ", " + currentMonth + " " + currentDate.getDate());

// console.log(months[currentDate.getMonth()]);
// console.log(days[currentDate.getDay()]);

// id name where to display date: currentDay
//$("#currentDay").append("");

// console.log(currentDate.getFullYear());
// console.log(currentDate.getMonth());
// console.log(currentDate.getDay());
// console.log(Date.now());
