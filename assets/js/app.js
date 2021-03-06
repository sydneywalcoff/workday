let savedEvents = [];
let events = {};

const createEvent = (eventVal, rowId) => {
   let text = eventVal;
   console.log(text);
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

const saveEvent = () => {
    // save to localStorage
    localStorage.setItem("events", JSON.stringify(savedEvents));
};


const loadEvents = () => {
    savedEvents = JSON.parse(localStorage.getItem("events"));
    console.log(savedEvents);
    if(!savedEvents) {
        savedEvents = [];
        // console.log(savedEvents)
    }
    $.each(savedEvents, function(index) {
        let eventText =savedEvents[index].eventVal;
        let rowId = savedEvents[index].rowId;
        let eventEl = $("<p>").text(eventText);
        
        $(".event#"+ rowId).append(eventEl);
    });
};



const saveButton = rowId => {
    // grab event text from `.event col` textarea
    let eventEl = $("#" + rowId + " textarea");
    let eventText = eventEl.val();

    // turn into `p` element
    let savedEventEl = $("<p>").text(eventText);
    
    let updatedEvent = eventEl.replaceWith(savedEventEl)
    let updatedVal = updatedEvent.val();
    console.log(updatedVal);
    if (updatedVal) {
        eventObjHandler(updatedVal, rowId);
        savedEvents.push(events);
        console.log(savedEvents);
        saveEvent();
    }
};

const eventObjHandler = (updatedVal,rowId) => {
    events = {
        eventVal: updatedVal,
        rowId: rowId
    }
};

console.log(events);

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
    saveButton(rowId);
});

loadEvents();