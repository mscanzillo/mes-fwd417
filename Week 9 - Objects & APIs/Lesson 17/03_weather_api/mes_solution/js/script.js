
// ToDo
// When the user submits the search form, make an API request to open weather api's search endpoint
// https://api.openweathermap.org/data/2.5/weather?q=CITY&APPID=KEY
// Icon URL - refer to docs on how to use
// https://openweathermap.org/img/wn/####@2x.png  - replace #### with icon code
// Display the results in the #weather-results div
// Each new search should erase the previous results

const myApiKey = "9f7276bb2f4c0f0bfc6be34c6211ddc0";

function convertKtoC(tempKelvin) {
  tempCelsius = tempKelvin - 273.15;
  return Math.round(tempCelsius);
}

async function handleWeatherRequest(e) {
  function convertKtoC(tempK) {
    tempF = 1.8*(tempK - 273.15)+32;
    return Math.round(tempF);
  }

  e.preventDefault();

  // get user input value from textbox
  const city = document.querySelector('input[name="city"]').value;
  
  // build the url address with YOUR personal API key and the users input city
  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${myApiKey}`;
  
  // make an API call using fetch() and capture the response in a variable
  // convert the response to a readable json format with .json()
  const response = await fetch(requestUrl);
  const weatherData = await response.json();
  
  // print your data to the console to see its format, dont forget to delete later
  console.log(weatherData);
  
  // Write a separate function to convert the temps from the default units (Kelvin) to a more readable F or C
  const weatherHTML = `<li>The temperature in ${city} is currently ${convertKtoC(weatherData.main.temp)}° F </li>
  <li>Feels Like: ${convertKtoC(weatherData.main.feels_like)}° F </li>
  <li>Humidity: ${weatherData.main.humidity}</li>
  <li>Pressure: ${weatherData.main.pressure}</li>
  <li>High: ${convertKtoC(weatherData.main.temp_max)}° F</li>
  <li>Low: ${convertKtoC(weatherData.main.temp_min)}° F</li>`;
  
  // build the icon src
  // create icon img tag
  // add icon url as src
  const iconImg = `<img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt="${weatherData.weather[0].description}">`;
  
  // clear out previous icon img
  // append icon img to dom

  document.querySelector("#weather-icon").innerHTML = iconImg;
  
  // print all results to dom
  document.querySelector("#weather-results").innerHTML = weatherHTML;

  
  
}

// Attach an event listener to the submit button
document.getElementById("weather-search").addEventListener("submit", handleWeatherRequest);