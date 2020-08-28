// Set today's date
// Taken from https://momentjs.com/
var day = moment().format("dddd");
var today = moment().format("MMMM Do YYYY");
// var seconds = moment().format("ss a")
console.log(today);

// Display today's date on html page
var invervalSeconds = setInterval(function() {
    $("#currentDay").html(day + " " + today + " " + moment().format("hh:mm:ssa"));
});


// Define variables for every hour
var hour = moment().hours();
var yourInput;
var yourHours;

var nine = $("#9am");
var ten = $("#10am");
var eleven = $("#11am");
var twelve = $("#12pm");
var one = $("#13pm");
var two = $("#14pm");
var three = $("#15pm");
var four = $("#16pm");
var five = $("#17pm");

// Function to start the page up
function startPage() {

    var startNine = JSON.parse(localStorage.getItem("09:00am"))
    nine.val(startNine);
    
    var startTen = JSON.parse(localStorage.getItem("10:00am"))
    ten.val(startTen);
    
    var startEleven = JSON.parse(localStorage.getItem("11:00am"))
    eleven.val(startEleven);
    
    var startTwelve = JSON.parse(localStorage.getItem("12:00pm"))
    twelve.val(startTwelve);
    
    var startOne = JSON.parse(localStorage.getItem("01:00pm"))
    one.val(startOne);

    var startTwo = JSON.parse(localStorage.getItem("02:00pm"))
    two.val(startTwo);

    var startThree = JSON.parse(localStorage.getItem("03:00pm"))
    three.val(startThree);

    var startFour = JSON.parse(localStorage.getItem("04:00pm"))
    four.val(startFour);

    var startFive = JSON.parse(localStorage.getItem("05:00pm"))
    five.val(startFive);

}

// Function to change colors of time blocks. Current hour is red, past hour is gray, and future hour is green
function background() {
      
    $(".form").each(function() {
        var time = parseInt($(this).attr("id"));
        console.log(this);
        hour = parseInt(hour);
        if (hour > time) {
            $(this).addClass("past");
        } else if (hour < time) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
  }

  $(document).ready(function() {
    startPage();
    background();

    // Buttons to save input to local storage
    $(".saveBtn").on("click", function() {
        yourInput = $(this).siblings(".form").val().trim();
        console.log(yourInput);
        console.log("Save button pressed");
        yourHours = $(this).siblings(".input").text().trim();
        localStorage.setItem(yourHours, JSON.stringify(yourInput));
    });

    // Button to erase input from local storage
    $("#clearAll").on("click", function() {
        localStorage.clear();
        startPage();
        console.log("Clear button pressed");
    });
  });



