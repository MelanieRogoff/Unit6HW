//Declare Variables
const queryURL = "https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=9be0a529a7dd200677c71e4ba94edd63";
const phxURL = "https://api.openweathermap.org/data/2.5/weather?q=Phoenix&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const phxUV = "https://api.openweathermap.org/data/2.5/uvi?&appid=9be0a529a7dd200677c71e4ba94edd63&lat=33&lon=112";
const phxFive = "https://api.openweathermap.org/data/2.5/forecast?zip=85001&appid=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const austURL = "https://api.openweathermap.org/data/2.5/weather?q=Austin&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const austUV = "https://api.openweathermap.org/data/2.5/uvi?&appid=9be0a529a7dd200677c71e4ba94edd63&lat=30&lon=97";
const austFive = "https://api.openweathermap.org/data/2.5/forecast?zip=73301&appid=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const chicURL = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const chicUV = "https://api.openweathermap.org/data/2.5/uvi?&appid=9be0a529a7dd200677c71e4ba94edd63&lat=41&lon=87";
const chicFive = "https://api.openweathermap.org/data/2.5/forecast?zip=60601&appid=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const nyURL = "https://api.openweathermap.org/data/2.5/weather?zip=10004&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const nyUV = "https://api.openweathermap.org/data/2.5/uvi?&appid=9be0a529a7dd200677c71e4ba94edd63&lat=40&lon=74";
const nyFive = "https://api.openweathermap.org/data/2.5/forecast?zip=10001&appid=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const orlURL = "https://api.openweathermap.org/data/2.5/weather?q=Orlando&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const orUV = "https://api.openweathermap.org/data/2.5/uvi?&appid=9be0a529a7dd200677c71e4ba94edd63&lat=28&lon=81";
const orFive = "https://api.openweathermap.org/data/2.5/forecast?zip=32789&appid=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const sfURL = "https://api.openweathermap.org/data/2.5/weather?zip=94102&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const sfUV = "https://api.openweathermap.org/data/2.5/uvi?&appid=9be0a529a7dd200677c71e4ba94edd63&lat=37&lon=122";
const sfFive = "https://api.openweathermap.org/data/2.5/forecast?zip=94016&appid=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const denURL = "https://api.openweathermap.org/data/2.5/weather?zip=80202&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const denUV = "https://api.openweathermap.org/data/2.5/uvi?&appid=9be0a529a7dd200677c71e4ba94edd63&lat=39&lon=104";
const denFive = "https://api.openweathermap.org/data/2.5/forecast?zip=80014&appid=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const ldnURL = "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=9be0a529a7dd200677c71e4ba94edd63&units=imperial";
const ldnUV = "https://api.openweathermap.org/data/2.5/uvi?&appid=9be0a529a7dd200677c71e4ba94edd63&lat=51&lon=0.12";
const ldnFive = "https://api.openweathermap.org/data/2.5/uvi?&appid=9be0a529a7dd200677c71e4ba94edd63&lat=51&lon=0.12&units=imperial";
let now = moment(); //Starts the interval when page loads
let date = now.format(" (MM/D/YYYY)"); //Format for current month/day/year
let searchHistory = []; //Empty array for search history
const searchVal = $("#searcher").val(); //Value of search button
//Pushing the value of the text input into the search history array
searchHistory.push(searchVal); 

