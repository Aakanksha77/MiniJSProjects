// 9e6fa5e815ea1669be3ffecc032a810d

const apiKey = "9e6fa5e815ea1669be3ffecc032a810d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=mumbai";

async function checkWeather (){
    const response  = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json()
    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
}

checkWeather();
