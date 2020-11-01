// Set variable to call date
let currentDate = moment().format('dddd, MMMM Do, YYYY');

// Print date in the paragraph ID currentDay
$("#currentDay").append(currentDate);

// need textarea to show in div container
// need save button to shows next to textarea
// need to color code each textarea

//textarea

let currentHour = moment().format("H");



console.log(currentHour);

for(i = 9; i <= 24; i++) {

    // setting variable inside loop
    let hourBlock = $('<div>');
    let timeSlot = $('<span>');
    let eventSlot = $('<textarea>');
    let btnSave = $('<button>')

    // Setting block
    hourBlock.addClass("time-block");
    hourBlock.attr("hour-block", i);
    $(".container").append(hourBlock);
    
    // Show time
    timeSlot.addClass("hour");
    timeSlot.attr("hour-value", i);
    timeSlot.text(i);
    $(".time-block").append(timeSlot);

    // event description
    eventSlot.addClass("description");
    eventSlot.attr("hour-value", i);
    $(".time-block").append(eventSlot);

    // change class color when time has past, or present or future
    if (i > currentHour) {
        eventSlot.addClass("future");
    } else if (i < currentHour) {
        eventSlot.addClass("past");
    } else {
        eventSlot.addClass("present");
    }
    eventSlot.text("nothing here yet");

};



