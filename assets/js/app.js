let savedEvents = [];
let events = {};

const createEvent = (rowId) => {
   let text = $("#"+rowId).text();
   console.log(text);
    // create text area
   let textAreaEl = $("<textarea>");
   textAreaEl.val("enter your event");

   // highlight text box
   textAreaEl.focus();

   // append text area to selected event col 
   $("#" + rowId).append(textAreaEl);

};

const editEvent = rowId => {
    let eventEl = $("#"+rowId).children();
    let eventText = eventEl.text();
    let newEventEl = $("<textarea>").text(eventText);
    eventEl.replaceWith(newEventEl);
    newEventEl.focus();
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
        console.log(savedEvents)
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
        
        // checking if matching value in array before pushing
        for(i=0; i < savedEvents.length; i++) {
            if(savedEvents[i].rowId === rowId) {
                console.log("replace");
                savedEvents.splice(i, 1);
                
            } 
        }
       
    }
    console.log(events)
    savedEvents.push(events);
    console.log(savedEvents);
    saveEvent();
};

const eventObjHandler = (updatedVal,rowId) => {
    events = {
        eventVal: updatedVal,
        rowId: rowId
    }
};

// event col click functionality
$(".event").on("click", function() {
    // check if textarea already present
    let length = $(this).html().length;
    let rowId = $(this).attr("id");
    if(length == 0) {
        console.log("you are creating a new event");
        createEvent(rowId);
    } 
    else {
        console.log("you are editing an existing event");
       editEvent(rowId);
    } 
});


$(".saveBtn").on("click", function() {
    let rowId = $(this).siblings()[1].getAttribute("id");
    saveButton(rowId);
});

loadEvents();