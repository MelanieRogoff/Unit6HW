//Declare Variables
let searchHistory = []; //Empty array for search history
const queryURL = "https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=9be0a529a7dd200677c71e4ba94edd63";
const phxURL = "https://api.openweathermap.org/data/2.5/weather?q=Phoenix&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const austURL = "https://api.openweathermap.org/data/2.5/weather?q=Austin&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const chicURL = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const nyURL = "https://api.openweathermap.org/data/2.5/weather?zip=10004&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const orlURL = "https://api.openweathermap.org/data/2.5/weather?q=Orlando&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const sfURL = "https://api.openweathermap.org/data/2.5/weather?zip=94102&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const denURL = "https://api.openweathermap.org/data/2.5/weather?zip=80202&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const ldnURL = "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const phxUV = "https://api.openweathermap.org/data/2.5/uvi?&appid=9be0a529a7dd200677c71e4ba94edd63&lat=33&lon=112";
const austUV = "https://api.openweathermap.org/data/2.5/uvi?&appid=9be0a529a7dd200677c71e4ba94edd63&lat=30&lon=97";
const chicUV = "https://api.openweathermap.org/data/2.5/uvi?&appid=9be0a529a7dd200677c71e4ba94edd63&lat=41&lon=87";
const nyUV = "https://api.openweathermap.org/data/2.5/uvi?&appid=9be0a529a7dd200677c71e4ba94edd63&lat=40&lon=74";
const orUV = "https://api.openweathermap.org/data/2.5/uvi?&appid=9be0a529a7dd200677c71e4ba94edd63&lat=28&lon=81";
const sfUV = "https://api.openweathermap.org/data/2.5/uvi?&appid=9be0a529a7dd200677c71e4ba94edd63&lat=37&lon=122";
const denUV = "https://api.openweathermap.org/data/2.5/uvi?&appid=9be0a529a7dd200677c71e4ba94edd63&lat=39&lon=104";
const ldnUV = "https://api.openweathermap.org/data/2.5/uvi?&appid=9be0a529a7dd200677c71e4ba94edd63&lat=51&lon=0.12";
const searchVal = $("#searcher").val(); //Value of search button
let now = moment(); //Starts the interval when page loads
let date = now.format(" (MM/D/YYYY)"); //Format for current month/day/year

//Pushing the value of the text input into the search history array
searchHistory.push(searchVal); 

//PHOENIX Button
$("#phxBtn").on('click', function() {
      $.ajax({
       url: phxURL,
      method: "GET"
  }).then(function(response) {
        //Display city name/date/icon
        $("#mainstate").empty();
        $("#mainpara").empty();
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
        $("#mainpara").append("Temperature: " + response.main.temp); 
        $("#mainpara").append("<p>" + "Humidity: " + response.main.humidity + "%"); 
        $("#mainpara").append("<p>" + "Wind Speed: " + response.wind.speed + "MPH"); 
        $("#mainpara").append("<p>" + "UV Index: " + "<button type='button' class='btn btn-danger'>" + phxUV +"</button>"); //Currently only shows the actual link - look into changing this
      });
    });

//AUSTIN button
$("#austBtn").on('click', function() {
      $.ajax({
       url: austURL,
      method: "GET"
  }).then(function(response) {
        //Display city name/date/icon
        $("#mainstate").empty();
        $("#mainpara").empty();
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
        $("#mainpara").append("Temperature: " + response.main.temp); 
        $("#mainpara").append("<p>" + "Humidity: " + response.main.humidity + "%"); 
        $("#mainpara").append("<p>" + "Wind Speed: " + response.wind.speed + "MPH"); 
        $("#mainpara").append("<p>" + "UV Index: " + "<button type='button' class='btn btn-danger'>" + austUV +"</button>"); //Currently only shows the actual link - look into changing this
      });
    });

//CHICAGO Button
$("#chicBtn").on('click', function() {
      $.ajax({
       url: chicURL,
      method: "GET"
  }).then(function(response) {
        //Display city name/date/icon
        $("#mainstate").empty();
        $("#mainpara").empty();
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
        $("#mainpara").append("Temperature: " + response.main.temp); 
        $("#mainpara").append("<p>" + "Humidity: " + response.main.humidity + "%"); 
        $("#mainpara").append("<p>" + "Wind Speed: " + response.wind.speed + "MPH"); 
        $("#mainpara").append("<p>" + "UV Index: " + "<button type='button' class='btn btn-danger'>" + chicUV +"</button>"); //Currently only shows the actual link - look into changing this
      });
    });

//NY Button
$("#nyBtn").on('click', function() {
      $.ajax({
       url: nyURL,
      method: "GET"
  }).then(function(response) {
        //Display city name/date/icon
        $("#mainstate").empty();
        $("#mainpara").empty();
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
        $("#mainpara").append("Temperature: " + response.main.temp); 
        $("#mainpara").append("<p>" + "Humidity: " + response.main.humidity + "%"); 
        $("#mainpara").append("<p>" + "Wind Speed: " + response.wind.speed + "MPH"); 
        $("#mainpara").append("<p>" + "UV Index: " + "<button type='button' class='btn btn-danger'>" + nyUV +"</button>"); //Currently only shows the actual link - look into changing this
      });
    });

//ORLANDO Button
$("#orlandoBtn").on('click', function() {
      $.ajax({
       url: orlURL,
      method: "GET"
  }).then(function(response) {
        //Display city name/date/icon
        $("#mainstate").empty();
        $("#mainpara").empty();
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
        $("#mainpara").append("Temperature: " + response.main.temp); 
        $("#mainpara").append("<p>" + "Humidity: " + response.main.humidity + "%"); 
        $("#mainpara").append("<p>" + "Wind Speed: " + response.wind.speed + "MPH"); 
        $("#mainpara").append("<p>" + "UV Index: " + "<button type='button' class='btn btn-danger'>" + orUV +"</button>"); //Currently only shows the actual link - look into changing this
     });
    });

//SAN FRANCISCO Button
$("#sfBtn").on('click', function() {
      $.ajax({
       url: sfURL,
      method: "GET"
  }).then(function(response) {
        $("#mainstate").empty();
        $("#mainpara").empty();
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
        $("#mainpara").append("Temperature: " + response.main.temp); 
        $("#mainpara").append("<p>" + "Humidity: " + response.main.humidity + "%"); 
        $("#mainpara").append("<p>" + "Wind Speed: " + response.wind.speed + "MPH"); 
        $("#mainpara").append("<p>" + "UV Index: " + "<button type='button' class='btn btn-danger'>" + sfUV +"</button>"); //Currently only shows the actual link - look into changing this
      });
    });

//DENVER Button
$("#denBtn").on('click', function() {
      $.ajax({
       url: denURL,
      method: "GET"
  }).then(function(response) {
        //Display city name/date/icon
        $("#mainstate").empty();
        $("#mainpara").empty();
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
        $("#mainpara").append("Temperature: " + response.main.temp); 
        $("#mainpara").append("<p>" + "Humidity: " + response.main.humidity + "%"); 
        $("#mainpara").append("<p>" + "Wind Speed: " + response.wind.speed + "MPH"); 
        $("#mainpara").append("<p>" + "UV Index: " + "<button type='button' class='btn btn-danger'>" + denUV +"</button>"); //Currently only shows the actual link - look into changing this
      });
    });

//LONDON Button
$("#ldnBtn").on('click', function() {
      $.ajax({
       url: ldnURL,
      method: "GET"
  }).then(function(response) {
        //Display city name/date/icon
        $("#mainstate").empty();
        $("#mainpara").empty();
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
        $("#mainpara").append("Temperature: " + response.main.temp); 
        $("#mainpara").append("<p>" + "Humidity: " + response.main.humidity + "%"); 
        $("#mainpara").append("<p>" + "Wind Speed: " + response.wind.speed + "MPH"); 
        $("#mainpara").append("<p>" + "UV Index: " + "<button type='button' class='btn btn-danger'>" + ldnUV +"</button>"); //Currently only shows the actual link - look into changing this
     });
    });