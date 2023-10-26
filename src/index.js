let now = new Date();
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let currentDay = days[now.getDay()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${currentDay} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#date");
dateElement.innerHTML = formatDate(now);


function signUp(event) {
  event.preventDefault();
  let enterCity = document.querySelector("#enterCity");
  let city = document.querySelector("#city");
  city.innerHTML = enterCity.value;
  let apiKey = "c9f0a7a50c89ccf6ca3b542737bca2d2";
let api = `https://api.openweathermap.org/data/2.5/weather?q=${enterCity.value}&units=metric&appid=${apiKey}`;
axios.get(api).then(temp);
}

function temp(response) {
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#description").innerHTML =response.data.weather[0].main;
    document.querySelector("#humidity").innerHTML = `Humidity is ${response.data.main.humidity}%`;
}



let form = document.querySelector("form");
form.addEventListener("submit", signUp);











