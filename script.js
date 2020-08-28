// Set today's date
// Taken from https://momentjs.com/
var today = moment().format("MMM Do YYYY, h:mm");
var seconds = moment().format("ss a")
console.log(today);
console.log(seconds);

// Display today's date on html page
var invervalSeconds = setInterval(function() {
    $("#currentDay").html(today + ":" + seconds);
});


// Define variables for every hour
var hours = moment().hours();
var yourInput;
var yourHours;

var nine = $("#9am");

// Function to start the page up
function startPage() {
    var startNine = JSON.parse(localStorage.getItem("09:00am"))
    nine.val(startNine);
}

// Function to change colors of time blocks. Current hour is red, past hour is gray, and future hour is green
function background() {
      
    $(".form").each(function() {
        var time = parseInt($(this).attr("id"));
        hours = parseInt(hours);
        if (hours > time) {
            $(this).addClass("past");
        } else if (hours < time) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
  }

  $(document).ready(function() {
    // startPage();
    background();

    // Buttons to save input to local storage
    $(".saveBtn").on("click", function() {
        yourInput = $(this).siblings(".form").val().trim();
        console.log(yourInput);
        yourHours = $(this).siblings(".input").text().trim();
        localStorage.setItem(yourHours, JSON.stringify(yourInput));
    });
  });



