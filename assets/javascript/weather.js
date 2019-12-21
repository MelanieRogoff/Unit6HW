//Declare Variables
let searchHistory = []; //Empty array for search history
const queryURL = "https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=9be0a529a7dd200677c71e4ba94edd63";
const phxURL = "https://api.openweathermap.org/data/2.5/weather?q=Phoenix&APPID=9be0a529a7dd200677c71e4ba94edd63";
const austURL = "https://api.openweathermap.org/data/2.5/weather?q=Austin&APPID=9be0a529a7dd200677c71e4ba94edd63";
const chicURL = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=9be0a529a7dd200677c71e4ba94edd63";
const nyURL = "https://api.openweathermap.org/data/2.5/weather?zip=10004&APPID=9be0a529a7dd200677c71e4ba94edd63";
const orlURL = "https://api.openweathermap.org/data/2.5/weather?q=Orlando&APPID=9be0a529a7dd200677c71e4ba94edd63";
const sfURL = "https://api.openweathermap.org/data/2.5/weather?zip=94102&APPID=9be0a529a7dd200677c71e4ba94edd63";
const denURL = "https://api.openweathermap.org/data/2.5/weather?zip=80202&APPID=9be0a529a7dd200677c71e4ba94edd63";
const ldnURL = "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=9be0a529a7dd200677c71e4ba94edd63";

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
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
      });
    });


    //When clicking the Austin button ...
$("#austBtn").on('click', function() {
  //Call the AJAX API for Austin
      $.ajax({
       url: austURL,
      method: "GET"
  }).then(function(response) {
        //Display city name/date/icon
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");

      });
    });

        //When clicking the Chicago button ...
$("#chicBtn").on('click', function() {
  //Call the AJAX API for Chicago
      $.ajax({
       url: chicURL,
      method: "GET"
  }).then(function(response) {
        //Display city name/date/icon
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
      });
    });

//When clicking the NY button ...
$("#nyBtn").on('click', function() {
  //Call the AJAX API for NY
      $.ajax({
       url: nyURL,
      method: "GET"
  }).then(function(response) {
        //Display city name/date/icon
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
      });
    });


//When clicking the Orlando button ...
$("#orlandoBtn").on('click', function() {
  //Call the AJAX API for Orlando
      $.ajax({
       url: orlURL,
      method: "GET"
  }).then(function(response) {
        //Display city name/date/icon
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
      });
    });


//When clicking the SF button ...
$("#sfBtn").on('click', function() {
  //Call the AJAX API for SF
      $.ajax({
       url: sfURL,
      method: "GET"
  }).then(function(response) {
        //Display city name/date/icon
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
      });
    });



//When clicking the Denver button ...
$("#denBtn").on('click', function() {
  //Call the AJAX API for Denver
      $.ajax({
       url: denURL,
      method: "GET"
  }).then(function(response) {
        //Display city name/date/icon
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
      });
    });

    //When clicking the LDN button ...
$("#ldnBtn").on('click', function() {
  //Call the AJAX API for LDN
      $.ajax({
       url: ldnURL,
      method: "GET"
  }).then(function(response) {
        //Display city name/date/icon
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
      });
    });