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
const phxFive = "https://api.openweathermap.org/data/2.5/forecast?zip=85001&appid=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
let now = moment(); //Starts the interval when page loads
let date = now.format(" (MM/D/YYYY)"); //Format for current month/day/year
//Get tomorrow's date:
function tomorrow() {
  const today = moment();
  const tomorrow = today.add('days', 1);
  return moment(tomorrow).format(" MM/D/YYYY");
}
//Get the day after tomorrow
function twoDayForescast() {
  const todayy = moment();
  const tomorroww = todayy.add('days', 2);
  return moment(tomorroww).format(" MM/D/YYYY");
}

//Get the third day after
function threeDayForecast() {
  const today3 = moment();
  const tomorrow3 = today3.add('days', 3);
  return moment(tomorrow3).format(" MM/D/YYYY");
}

//Get the fourth day after
function fourDayForecast() {
  const today4 = moment();
  const tomorrow4 = today4.add('days', 4);
  return moment(tomorrow4).format(" MM/D/YYYY");
}

//Get the fifth day after
function fiveDayForecast() {
  const today5 = moment();
  const tomorrow5 = today5.add('days', 5);
  return moment(tomorrow5).format(" MM/D/YYYY");
}

//Pushing the value of the text input into the search history array
searchHistory.push(searchVal); 

//PHOENIX Button
$("#phxBtn").on('click', function() {
      $.ajax({
       url: phxURL,
      method: "GET"
  }).then(function(response) {
        emptyCards(); //Essentially a page refresh
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
        $("#mainpara").append("Temperature: " + response.main.temp +" °F"); 
        $("#mainpara").append("<p>" + "Humidity: " + response.main.humidity + "%"); 
        $("#mainpara").append("<p>" + "Wind Speed: " + response.wind.speed + "MPH"); 
        $("#mainpara").append("<p>" + "UV Index: " + "<button type='button' class='btn btn-danger'>" + phxUV +"</button>"); //Currently only shows the actual link - look into changing this
      });
    });

//PHOENIX 5 Day Weather Forecast
$("#phxBtn").on('click', function() {
  $.ajax({
   url: phxFive,
  method: "GET"
}).then(function(response) {
    $("#oneDay").append(tomorrow());
   $("#oneDay").append("<p>" + "<img src='http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png' alt='Weather Icon'>"  + "</p>");
    $("#oneDay").append("Temp: " + response.list[0].main.temp +" °F");
    $("#oneDay").append("<p>" + "Humidity: " + response.list[0].main.humidity + "%"); 
    $("#twoDay").append(twoDayForescast());
    $("#twoDay").append("<p>" + "<img src='http://openweathermap.org/img/w/" + response.list[1].weather[0].icon + ".png' alt='Weather Icon'>" + "</p>");
    $("#twoDay").append("Temp: " + response.list[1].main.temp +" °F");
    $("#twoDay").append("<p>" + "Humidity: " + response.list[1].main.humidity + "%"); 
    $("#threeDay").append(threeDayForecast());
    $("#threeDay").append("<p>" + "<img src='http://openweathermap.org/img/w/" + response.list[2].weather[0].icon + ".png' alt='Weather Icon'>" + "</p>");
    $("#threeDay").append("Temp: " + response.list[2].main.temp +" °F");
    $("#threeDay").append("<p>" + "Humidity: " + response.list[2].main.humidity + "%"); 
    $("#fourDay").append(fourDayForecast());
    $("#fourDay").append("<p>" + "<img src='http://openweathermap.org/img/w/" + response.list[3].weather[0].icon + ".png' alt='Weather Icon'>" + "</p>");
    $("#fourDay").append("Temp: " + response.list[3].main.temp +" °F");
    $("#fourDay").append("<p>" + "Humidity: " + response.list[3].main.humidity + "%"); 
    $("#fiveDay").append(fiveDayForecast());
    $("#fiveDay").append("<p>" + "<img src='http://openweathermap.org/img/w/" + response.list[4].weather[0].icon + ".png' alt='Weather Icon'>" + "</p>");
    $("#fiveDay").append("Temp: " + response.list[4].main.temp +" °F");
    $("#fiveDay").append("<p>" + "Humidity: " + response.list[4].main.humidity + "%"); 
  });
});

//AUSTIN button
$("#austBtn").on('click', function() {
      $.ajax({
       url: austURL,
      method: "GET"
  }).then(function(response) {
        emptyCards();
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
        $("#mainpara").append("Temperature: " + response.main.temp +" °F"); 
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
        emptyCards();
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
        $("#mainpara").append("Temperature: " + response.main.temp +" °F"); 
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
        emptyCards();
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
        $("#mainpara").append("Temperature: " + response.main.temp +" °F"); 
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
        emptyCards();
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
        $("#mainpara").append("Temperature: " + response.main.temp +" °F"); 
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
        emptyCards();
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
        $("#mainpara").append("Temperature: " + response.main.temp +" °F"); 
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
        emptyCards();
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
        $("#mainpara").append("Temperature: " + response.main.temp +" °F"); 
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
        emptyCards();
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
        $("#mainpara").append("Temperature: " + response.main.temp +" °F"); 
        $("#mainpara").append("<p>" + "Humidity: " + response.main.humidity + "%"); 
        $("#mainpara").append("<p>" + "Wind Speed: " + response.wind.speed + "MPH"); 
        $("#mainpara").append("<p>" + "UV Index: " + "<button type='button' class='btn btn-danger'>" + ldnUV +"</button>"); //Currently only shows the actual link - look into changing this
     });
    });

function emptyCards() {
  $("#mainstate").empty(); //Main Title Emptying
  $("#mainpara").empty(); //Main paragraph Emptying
  $("#oneDay").empty(); //5-Day Forecast Card Emptying
  $("#onePic").empty(); //5-Day Forecast Card Emptying
  $("#oneTemp").empty(); //5-Day Forecast Card Emptying
  $("#twoDay").empty(); //5-Day Forecast Card Emptying
  $("#twoPic").empty(); //5-Day Forecast Card Emptying
  $("#twoTemp").empty(); //5-Day Forecast Card Emptying
  $("#threeDay").empty(); //5-Day Forecast Card Emptying
  $("#threePic").empty(); //5-Day Forecast Card Emptying
  $("#threeTemp").empty(); //5-Day Forecast Card Emptying
  $("#fourDay").empty(); //5-Day Forecast Card Emptying
  $("#fourPic").empty(); //5-Day Forecast Card Emptying
  $("#fourTemp").empty(); //5-Day Forecast Card Emptying
  $("#fiveDay").empty(); //5-Day Forecast Card Emptying
  $("#fivePic").empty(); //5-Day Forecast Card Emptying
  $("#fiveTemp").empty(); //5-Day Forecast Card Emptying
}