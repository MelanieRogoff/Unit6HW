$(document).ready(function() { 
    navigator.geolocation.getCurrentPosition(function(position) {
        alert("Current location: " + Math.round(position.coords.latitude * 100)/100 + ", " + Math.round(position.coords.longitude * 100)/100 + "." + " Please enter a city in the search box and click on the magnifying glass for more weather information.");
      });
    $("#searchBtn").click(function () { //When Save button is clicked ... 
        event.preventDefault();
            if ($("#searcher").val() == '') {  //Checking for empty string, if empty return alert
            return alert("Please input a city in the Search bar, and click on the magnifying glass.");
         }
         firstCall(); 
        }); //Search button function ends here
        const cityArray = JSON.parse(localStorage.getItem('newSearch')) || []; //This parses newSearch and says that if there's nothing there, make it an empty array
        firstCall(cityArray[cityArray.length - 1]); //Call this outside click function so that it grabs last city searched on refresh and displays
        buttonMaker(cityArray);
})
function firstCall(city) { //Have city in the parameter because we need specifics
    let inputs = $("#searcher").val(); 
    if (city) { 
        inputs = city; 
    } //Doing this right here so that we can save the most recent city searched
    emptyCards(); 
    const newQuery = "https://api.openweathermap.org/data/2.5/weather?q=" + inputs + "&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
    $.ajax({
        url: newQuery,
        method: "GET",
    }).then(function(response) { //response returns the full object of the url
        const capitals = inputs.charAt(0).toUpperCase() + inputs.slice(1);
        const cityArray = JSON.parse(localStorage.getItem('newSearch')) || [];
        if (!cityArray.includes(capitals)) {  //If statement ensures cities are only saved once
            cityArray.push(capitals); 
            localStorage.setItem('newSearch', JSON.stringify(cityArray)); 
            savers(); 
            buttonMaker(cityArray); 
        }
            $("#mainstate").append(response.name); //Not doing this as a function because it's different every time
            $("#mainstate").append(date);
            $("#mainstate").append("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
            $("#mainpara").append("Temperature: " + response.main.temp +" °F"); 
            $("#mainpara").append("<p>" + "Humidity: " + response.main.humidity + "%"); 
            $("#mainpara").append("<p>" + "Wind Speed: " + response.wind.speed + "MPH"); 
            twoCall(response); //Need to pass the response parameter W/IN twoCall here to ensure it works, AND call here because it's nested
            thirdCall(response); //Need to pass the response parameter W/IN thirdCall here to ensure it works, AND call here because it's nested
 })
 
 .catch(function (error) { //If there's an error w/promise, THIS catches error & does the below code instead of promise 
       //CATCH CAN ONLY BE ON A PROMISE OR A TRY CATCH BLOCK  
        $("#mainstate").append("Error: " + inputs + " doesn't exist. Please search for a valid city.");
        $("#mainstate").append("<p>" + "<img id='tryagain' src='assets/images/try.jpg'>" + "</p>");
})
function savers() {
    localStorage.setItem('mainstate', $("#mainstate").text()); 
    localStorage.setItem('mainpara', $("#mainpara").text()); 
    localStorage.setItem('fivecards', $("#oneDay").text()); 
    localStorage.setItem('fivecards2', $("#twoDay").text()); 
    localStorage.setItem('fivecards3', $("#threeDay").text());
    localStorage.setItem('fivecards4', $("#fourDay").text()); 
    localStorage.setItem('fivecards5', $("#fiveDay").text()); 
    }}
function twoCall(city) {  //Have city in the parameter because we need specifics
    //5 DAY FORECASTS AJAX CALL BELOW
    const query2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city.name + "&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
        $.ajax({
            url: query2,
            method: "GET"
        }).then(function(response) {
            moreDisplays(); //Displays 5 Day Forecast
                function moreDisplays() { //Don't put this function outside, it's only being called here
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
function thirdCall(response) { //Have to have specific parameter of response for when we call it with response later 
    //UV INDEX GRABBER BELOW
    const anyUV = "https://api.openweathermap.org/data/2.5/uvi?&appid=9be0a529a7dd200677c71e4ba94edd63&lat="+ response.coord.lat + "&lon=" + response.coord.lon;
        $.ajax({
            url: anyUV,
            method: "GET"
        }).then(function(response) {
            uvDisplays();
                function uvDisplays() {
                    $("#mainpara").append("<p>" + "UV Index: " + "<button type='button' class='btn btn-danger'>" + response.value +"</button>"); 
                }
            })
}
//Create new localStorage item that saves each city searched into an array, and make button creator function

    function buttonMaker(cityArray) {
    $("#btns").empty(); 
    for (let i = 0; i < cityArray.length; i++) {
        const cityBtn = $("<button>");
        cityBtn.addClass("btn btn-secondary");
        cityBtn.text(cityArray[i]);
        $("#btns").append(cityBtn);
  }
}
$('#btns').on('click', 'button', function(e){
    e.preventDefault();
    firstCall($(this).text())
})