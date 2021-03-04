const event9 = $("#9");
const event10 = $("#10");
const event11 = $("#11");
const event12 = $("#12");
const event13 = $("#13");
const event14 = $("#14");
const event15 = $("#15");
const event16 = $("#16");
const event17 = $("#17");


let events = [];

const createEvent = function() {
    

    // grab inputted value of text area
    

    // append text area to event col
    // $("#"+ rowId)
};

// createEvent();

// event col click functionality
$(".event").on("click", function() {
    // check if textarea already present
    let length = $(this).html().length
    console.log(length)
    if(length == 0) {
        // create text area
        let textAreaEl = $("<textarea>").val("enter your event");

        // save input value
        let text = textAreaEl.val().trim();
        console.log(text);

        // highlight text box
        textAreaEl.trigger("focus");

        // get id of event
        let rowId = $(this).attr("id");

        // append text area to selected event col 
        $("#" + rowId).append(textAreaEl);
    } else {
        console.log("not empty")
    }
});

// save button functionality
$(".row").on("click", ".saveBtn", function() {
    // grab event text
    console.log(this)
    let text =$(".event").attr("id");
    console.log(text);

    // create p element to save event
    let eventP = $("<p>").val
});
