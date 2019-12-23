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

//AUSTIN 5 Day Weather Forecast
$("#austBtn").on('click', function() {
  $.ajax({
   url: austFive,
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

//CHICAGO 5 Day Weather Forecast
$("#chicBtn").on('click', function() {
  $.ajax({
   url: chicFive,
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

//NY 5 Day Weather Forecast
$("#nyBtn").on('click', function() {
  $.ajax({
   url: nyFive,
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

//ORLANDO 5 Day Weather Forecast
$("#orlandoBtn").on('click', function() {
  $.ajax({
   url: orFive,
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

//SAN FRANCISCO 5 Day Weather Forecast
$("#sfBtn").on('click', function() {
  $.ajax({
   url: sfFive,
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
//DENVER 5 Day Weather Forecast
$("#denBtn").on('click', function() {
  $.ajax({
   url: denFive,
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
//LONDON 5 Day Weather Forecast
$("#ldnBtn").on('click', function() {
  $.ajax({
   url: ldnFive,
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