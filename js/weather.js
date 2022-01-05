const API_KEY = "8b09092551c9ffa1cf54d5e4169e4a98";

function onGeoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather span:first-child");
      const city = document.querySelector(".weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}deg / `;
      city.innerText = data.name;
    });
}
function onGeoErro() {
  alert("Can't find you :(");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErro);
