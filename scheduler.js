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

    // Adding class
    hourBlock.addClass("row");
    hourBlock.addClass("time-block");
    timeSlot.addClass("hour");
    eventSlot.addClass("description");
    btnSave.addClass("saveBtn");
    
    // outside div
    hourBlock.attr("hour-block", i);


    // display time
    timeSlot.attr("hour-value", i);
    timeSlot.text(i);

    // Save button text
    btnSave.text("Save");


    // change color when time has past, or present or future
    if (i > currentHour) {
        eventSlot.addClass("future");
    } else if (i < currentHour) {
        eventSlot.addClass("past");
    } else {
        eventSlot.addClass("present");
    }


    eventSlot.attr("hour-value", i);
    eventSlot.text("nothing here yet");


    $(".container").append(hourBlock);
    $(".time-block").append(timeSlot);
    $(".time-block").append(eventSlot);
    $(".time-block").append(btnSave);







    



};



