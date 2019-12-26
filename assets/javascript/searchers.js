


//INPUT AJAX CALL
$("#searchBtn").on('click', function(event) {
event.preventDefault();
const inputs = $("#searcher").val();
//URL Construction
const newQuery = "https://api.openweathermap.org/data/2.5/weather?q=" + inputs + "&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
//Call the AJAX
    $.ajax({
     url: newQuery,
    method: "GET" //this gets the url of phxUV
  }).then(function(response) { //response returns the full object of the url
      emptyCards();
      displayCards();
      function displayCards() {
        $("#mainstate").append(response.name);
        $("#mainstate").append(date);
        $("#mainstate").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
        $("#mainpara").append("Temperature: " + response.main.temp +" °F"); 
        $("#mainpara").append("<p>" + "Humidity: " + response.main.humidity + "%"); 
        $("#mainpara").append("<p>" + "Wind Speed: " + response.wind.speed + "MPH"); 
      }
  //ENTER 5 DAY FORECASTS HERE
    const input2 = $("#searcher").val();
    //URL Construction 
    const query2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + input2 + "&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
    //Call the AJAX
    console.log(query2);
     $.ajax({
         url: query2,
         method: "GET"
    }).then(function(response) {
        //NEED TO SOMEHOW CODE A REFRESH BEFORE THIS
        emptyCards();
        displayCards();
        moreDisplays();
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
 });
 }); 
  });


  