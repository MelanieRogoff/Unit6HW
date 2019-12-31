




 function twoCall() {
    //5 DAY FORECASTS AJAX CALL BELOW
      const input2 = $("#searcher").val();
      const query2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + input2 + "&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
      //Call the AJAX
              $.ajax({
                  url: query2,
                  method: "GET"
              }).then(function(response) {
                  emptyCards();
                  displayCards(); //Displays main card
                  moreDisplays(); //Displays 5 Day Forecast
                      function moreDisplays() {
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
                      }
              })
          }   

