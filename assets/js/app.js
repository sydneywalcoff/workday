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

$()

// edit events already on the calendar 
$(".event").on("click", "p", function() {
    console.log(eventTime);
    let text = $(this).text().trim();
    var textInput = $("<textarea>").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});