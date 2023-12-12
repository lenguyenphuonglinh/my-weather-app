function namePrompt() {
  let userName = prompt("What's your name?");
  let name = document.querySelector("#name");
  name.innerHTML = userName;
}
window.addEventListener("load", namePrompt);

function displayTemperature(response) {
  let temperatureElement1 = document.querySelector("#currentTemperature1");
  let temperatureElement2 = document.querySelector("#currentTemperature2");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;

  temperatureElement1.innerHTML = `It's currently ${temperature}°C`;
  temperatureElement2.innerHTML = `${temperature}°C`;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-text-input");
  let city = searchInputElement.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=cc84c9820ab27141fa553331t4bbcao5&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

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
