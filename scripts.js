function formValidation() {
    var firstName = document.getElementById("first").value;
    var lastName = document.getElementById("last").value;
    var email = document.getElementById("email").value;

    if (firstName == ""|| lastName =="" || email == "") {
        alert("Please fill out all required fields");
        return false;
    }
}



function descriptionToggle(id) {
var descElement = document.getElementById(id) ;

    if (descElement.style.display == "none") {
        descElement.style.display = "block";
    } else {
        descElement.style.display = "block ";
        descElement.style.display = "none";
    }
}



var quote = document.getElementById("quote");

function onMouseOver(){
quote.style.backgroundColor = "blue";
}

function onMouseOut() {
    quote.style.backgroundColor = "";
    quote.style.fontStyle = "italic";
}

if (quote) {
    quote.addEventListener("mouseover", onMouseOver);
    quote.addEventListener("mouseout", onMouseOut) ;
}



function addDate (){
    var footer = document.getElementById("myFooter");
    if (footer) {
        var date = Date();
        var message = document.createTextNode("Page loaded on: " + date);
        var paragraph = document.createElement("p");
        paragraph.appendChild(message);
        footer.appendChild(paragraph);
    }
}

window.onload = addDate;
