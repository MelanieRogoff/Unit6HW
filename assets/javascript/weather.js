//Declare Variables
const queryURL = "https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=9be0a529a7dd200677c71e4ba94edd63";
let now = moment(); //Starts the interval when page loads
let date = now.format(" (MM/D/YYYY)"); //Format for current month/day/year
let searchHistory = []; //Empty array for search history
const searchVal = $("#searcher").text(); //Value of search button

//Pushing the value of the text input into the search history array
searchHistory.push(searchVal); 

//PERSISTING SEARCH DATA 
$("#searchBtn").click(function () { //When Save button is clicked ... 
  $('input[type="text"]').each(function () { //For each input type that is text ...
      const id = $(this).attr('id'); //Grab this input text's id
      const value = $(this).val(); //Get the value of this and save it into the const value
      localStorage.setItem(id, value); //Save the input text's id (id) and the value of this (value) into localStorage
    });
});

$('input[type="text"]').each(function () { //For each input type that is text ...
  const getting = $(this).attr('id'); //This says that for each input of text, grab this input text's id
  const letsGrab = localStorage.getItem(getting); //Put that id in localStorage to grab the value
  document.getElementById(getting).value = letsGrab; //This says empty value in id (getting) is replaced by what's in letsGrab
});

//Get tomorrow's date:
function tomorrow() {
  const tomorrow = moment().add('days', 1);
  return moment(tomorrow).format(" MM/D/YYYY");
}
//Get the day after tomorrow
function twoDayForescast() {
  const tomorroww = moment().add('days', 2);
  return moment(tomorroww).format(" MM/D/YYYY");
}
//Get the third day after
function threeDayForecast() {
  const tomorrow3 = moment().add('days', 3);
  return moment(tomorrow3).format(" MM/D/YYYY");
}
//Get the fourth day after
function fourDayForecast() {
  const tomorrow4 = moment().add('days', 4);
  return moment(tomorrow4).format(" MM/D/YYYY");
}
//Get the fifth day after
function fiveDayForecast() {
  const tomorrow5 = moment().add('days', 5);
  return moment(tomorrow5).format(" MM/D/YYYY");
}

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


