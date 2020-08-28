// Set today's date
// Taken from https://momentjs.com/
var today = moment().format("MMM Do YYYY, h:mm");
var seconds = moment().format("ss a")
console.log(today);
console.log(seconds);

// Display today's date on html page
$("#currentDay").html(today + ":" + seconds);

// Define variables for every hour