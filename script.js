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

// Function to start the page up

// Function to change colors of time blocks

// Buttons to save input to local storage