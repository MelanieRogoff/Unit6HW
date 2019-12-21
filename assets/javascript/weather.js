//Declare Variables
let searchHistory = []; //Empty array for search history
const queryURL = "https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=9be0a529a7dd200677c71e4ba94edd63";
const phxURL = "https://api.openweathermap.org/data/2.5/weather?q=Phoenix&APPID=9be0a529a7dd200677c71e4ba94edd63";
const searchVal = $("#searcher").val();
let now = moment(); //Starts the interval when page loads
let date = now.format(" (MM/D/YYYY)"); //Format for current month/day/year

//Pushing the value of the text input into the search history array
searchHistory.push(searchVal); 


//Button Clickers: 

//When clicking the Phoenix button ...
$("#phxBtn").on('click', function() {
  //Call the AJAX API for Phoenix
      $.ajax({
       url: phxURL,
      method: "GET"
  }).then(function(response) {
        //Display city name/date/icon
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append(response.weather[0].icon); //Displays text but not icon..
        
      });
    });