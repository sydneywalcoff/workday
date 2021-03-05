const createEvent = rowId => {
   // create text area
   let textAreaEl = $("<textarea>").val("enter your event");

   // save input value
   let text = textAreaEl.val().trim();
   console.log(text);

   // highlight text box
   textAreaEl.trigger("focus");

   // append text area to selected event col 
   $("#" + rowId).append(textAreaEl);
};

const editEvent = rowId => {
    let eventEl = $("#"+rowId).children();
    let eventText = eventEl.text();
    let newEventEl = $("<textarea>").text(eventText);
    eventEl.replaceWith(newEventEl);
    newEventEl.trigger("focus");
};

const saveButton = () => {
    // grab event text from `.event col` textarea

    // turn into `p` element

};

// event col click functionality
$(".event").on("click", function() {
    // check if textarea already present
    let length = $(this).html().length;
    let rowId = $(this).attr("id");
    if(length == 0) {
        createEvent(rowId);
    } 
    else {
       editEvent(rowId);
    } 
});
