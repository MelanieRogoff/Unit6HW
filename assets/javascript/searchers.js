$(document).ready(function() { //On page load...
    navigator.geolocation.getCurrentPosition(function(position) {
        alert("Current location: " + Math.round(position.coords.latitude * 100)/100 + ", " + Math.round(position.coords.longitude * 100)/100 + "." + " Please enter a city in the search box and click on the magnifying glass for more weather information.");
      });
    const gets = localStorage.getItem('inputs'); //Get 'inputs' FIRST so it displays on page load
    $("#searchBtn").click(function () { //When Save button is clicked ... 
        event.preventDefault();
        const citySearched = $("#searcher").val()//Get the value of the search input
       const capitals = citySearched.charAt(0).toUpperCase() + citySearched.slice(1);
        const cityArray = []; //Make empty array
        cityArray.push(capitals); //Push value of textbox into cityArray
        localStorage.setItem('newSearch', cityArray); //Save that info into localStorage

        if ($("#searcher").val() == '') { //This checks to see if #searcher val is empty string (no input)
            return alert("Please input a city in the Search bar, and click on the magnifying glass.");
         }
            localStorage.setItem('mainstate', $("#mainstate").text()); //Save input text into localStorage
            localStorage.setItem('mainpara', $("#mainpara").text()); //Same as above
            localStorage.setItem('fivecards', $("#oneDay").text()); //Same as above
            localStorage.setItem('fivecards2', $("#twoDay").text()); //Same as above
            localStorage.setItem('fivecards3', $("#threeDay").text()); //Same as above
            localStorage.setItem('fivecards4', $("#fourDay").text()); //Same as above
            localStorage.setItem('fivecards5', $("#fiveDay").text()); //Same as above
            firstCall(); //Call the firstCall function
            buttonMaker();
        }); //Search button function ends here

    firstCall(gets); //Calling this in document ready so it'll work upon page load
})
  
function firstCall(city) {
    const inputs = $("#searcher").val(); //Get the value of the search input
    localStorage.setItem('inputs', inputs); //Save most recent city searched to localStorage
    if (city) { //Check RIGHT HERE if city (parameter) is existing, and if so...
        let inputs = city; //Make whatever inputs (searcher.val) is in that instance equal city
    } //Doing this right here so that we can save the most recent city searched
    const newQuery = "https://api.openweathermap.org/data/2.5/weather?q=" + inputs + "&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
        $.ajax({
            url: newQuery,
            method: "GET" 
      }).then(function(response) { //response returns the full object of the url
            emptyCards();
            $("#mainstate").append(response.name); //Not doing this as a function because it's different every time
            $("#mainstate").append(date);
            $("#mainstate").append("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Weather Icon'>");
            $("#mainpara").append("Temperature: " + response.main.temp +" °F"); 
            $("#mainpara").append("<p>" + "Humidity: " + response.main.humidity + "%"); 
            $("#mainpara").append("<p>" + "Wind Speed: " + response.wind.speed + "MPH"); 
            twoCall(response); //Need to pass the response parameter W/IN twoCall here to ensure it works, AND call here because it's nested
            thirdCall(response); //Need to pass the response parameter W/IN thirdCall here to ensure it works, AND call here because it's nested
    })}

function twoCall(response) { //Have response in the parameter because we need specifics
//5 DAY FORECASTS AJAX CALL BELOW
    const input2 = $("#searcher").val();
    const query2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + input2 + "&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
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

buttonMaker();
    function buttonMaker() {
        const cityArray = [];
        const citySearched = $("#searcher").val(); 
        const capitals = citySearched.charAt(0).toUpperCase() + citySearched.substr(1);
        cityArray.push(capitals);
      for (let i = 0; i < cityArray.length; i++) {
        localStorage.setItem('newSearch', citySearched); //Save most recent city searched to localStorage
        const cityBtn = $("<button>");
        cityBtn.addClass("btn btn-secondary");
        cityBtn.text(cityArray[i]);
        $("#btns").append(cityBtn);

      }
    }
   