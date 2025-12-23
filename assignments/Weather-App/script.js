const id = "346cb5b68ba7d1ed6fd157f4a3876e27";

async function getWeather() {
  document.getElementById("btn").disabled = true;

  const city = document.getElementById("city").value.trim();

  const { lat, lon } = await geoLocation(city);

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${id}`
  );
  const data = await response.json();

  document.getElementById("weatherData").innerHTML = `<div>
            <p>Temperature: ${(data.main.temp - 273.14).toFixed(2)}℃</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Description: ${data.weather[0].description}</p>
          </div>
          <img
            src="https://openweathermap.org/img/wn/${
              data.weather[0].icon
            }@4x.png"
            alt="weatherIcon"
          /> 
        </div>`;
  document.getElementById("btn").disabled = false;
}

async function geoLocation(city) {
  console.log(city, id);
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${id}`
  );
  const data = await res.json();
  const lat = data[0].lat;
  const lon = data[0].lon;
  console.log(lat, lon);

  return { lat, lon };
}
