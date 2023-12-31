function namePrompt() {
  let userName = prompt("What's your name?");
  let name = document.querySelector("#name");
  name.innerHTML = userName;
}
window.addEventListener("load", namePrompt);

function displayWeather(response) {
  let temperatureElement1 = document.querySelector("#currentTemperature1");
  let temperatureElement2 = document.querySelector("#currentTemperature2");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  let descriptionElement = document.querySelector(".description");
  let humidityElement = document.querySelector(".humidity");
  let humidity = response.data.temperature.humidity;
  let windElement = document.querySelector(".wind");
  let wind = Math.round(response.data.wind.speed);
  let iconElement = document.querySelector(".icon1");

  temperatureElement1.innerHTML = `It's currently ${temperature}°C`;
  temperatureElement2.innerHTML = `${temperature}°C`;
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${humidity}%`;
  windElement.innerHTML = `${wind}km/h`;
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="icon1" />`;
}

function searchCity(city) {
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=cc84c9820ab27141fa553331t4bbcao5&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchSubmit);

searchCity("Hanoi");

function updateDateTime(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let currentDateELement = document.querySelector("#datetime");
let currentDate = new Date();
currentDateELement.innerHTML = updateDateTime(currentDate);

var currentHour = new Date().getHours();
var greetingElement = document.getElementById("greeting");

if (currentHour >= 4 && currentHour < 12) {
  greetingElement.textContent = "Good morning";
} else if (currentHour >= 12 && currentHour < 18) {
  greetingElement.textContent = "Good afternoon";
} else {
  greetingElement.textContent = "Good evening";
}
