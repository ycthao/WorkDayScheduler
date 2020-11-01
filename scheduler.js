// Set variable to call date
let currentDate = moment().format('dddd, MMMM Do, YYYY');

// Print date in the paragraph ID currentDay
$("#currentDay").append(currentDate);

// need textarea to show in div container
// need save button to shows next to textarea
// need to color code each textarea

//textarea

let currentHour = moment().format("hA");



console.log(currentHour);

for(i = 9; i <= 17; i++) {

    // setting variable inside loop
    let hourBlock = $('<div>');
    let timeSlot = $('<div>');

    // Setting block
    hourBlock.addClass("time-block");
    hourBlock.attr("hour-block", i);
    $(".container").append(hourBlock);
    
    // Show time

    timeSlot.addClass("hour");
    timeSlot.attr("hour-value", i);
    timeSlot.text(i);
    $(".time-block").append(timeSlot);
};



