let savedEvents = [];

const saveEvent = () => {
    // save to localStorage
    localStorage.setItem("events", JSON.stringify(savedEvents));
};


const loadEvents = () => {
    savedEvents = JSON.parse(localStorage.getItem("events"));
    console.log(savedEvents);
    if(!savedEvents) {
        console.log("no events saved!")
    }
};

loadEvents();
console.log(savedEvents);

const createEvent = rowId => {
   // create text area
   let textAreaEl = $("<textarea>").val("enter your event");

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

const saveButton = (rowId) => {
    // grab event text from `.event col` textarea
    let event = $("#" + rowId + " textarea");
    let eventText = event.val();

    // turn into `p` element
    let savedEventEl = $("<p>").text(eventText);
    
    let updatedEvent = event.replaceWith(savedEventEl)
    let updatedVal = updatedEvent.val();
    if (updatedVal) {
        eventObjHandler(updatedEvent, rowId);
        savedEvents.push(event);
        console.log(savedEvents);
        saveEvent();
    }
};

const eventObjHandler = (updatedVal,rowId) => {
    let event = {
        eventEl: updatedVal,
        eventTime: rowId
    }
    console.log(event)
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


$(".saveBtn").on("click", function() {
    let rowId = $(this).siblings()[1].getAttribute("id");
    saveButton(rowId)
});