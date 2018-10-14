//toggle the text area gray and strike through when clicked
$("ul").on("click", "li", function () {//add a listener to the parent 'ul' so that newly created 'li's will also have the event listeners.
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (event) {//add a listener to the parent 'ul' so that newly created span inside 'li's will also have the event listeners.
    $(this).parent().fadeOut(1000, function () {//fade out in 1 sec and then calls remove
        $(this).remove();
    });
    event.stopPropagation();//prevents even bubling of triggering the parent element event (in this case - li).
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {//check if enter key is pressed.
        var todoText = $(this).val();//get the entered text
        $("ul").append("<li><span>X </span>" + todoText + "</li>");
    }
});

