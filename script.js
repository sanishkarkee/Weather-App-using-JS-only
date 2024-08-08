const apiKey = '5a83e25ca0f05113226149ff7df8fe8';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather&units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  // For showing Error message
  if (response.status == 404) {
    document.querySelector('.error').computedStyleMap.display = 'block';
    document.querySelector('.weather').computedStyleMap.display = 'none';
  } else {
    var data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(
      data.main.temp + '°c'
    );
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/hr';

    //   Updating image on weather condition
    if (data.weather[0].main == 'clouds') {
      weatherIcon.src = 'images/clouds.png';
    } else if (data.weather[0].main == 'Clear') {
      weatherIcon.src = 'images/clear.png';
    } else if (data.weather[0].main == 'Rain') {
      weatherIcon.src = 'images/rain.png';
    } else if (data.weather[0].main == 'Drizzle') {
      weatherIcon.src = 'images/drizzle.png';
    } else if (data.weather[0].main == 'Mist') {
      weatherIcon.src = 'images/mist.png';
    }

    //   City name enter gare paxi sab content dekhaune
    document.querySelector('.weather').computedStyleMap.display = 'block';
    document.querySelector('.error').computedStyleMap.display = 'none';
  }
}

searchBtn.addEventListener('click', () => {
  const cityName = searchBox.value;
  checkWeather(cityName);
});
