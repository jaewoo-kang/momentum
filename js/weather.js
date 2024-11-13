const API_KEY = "6fa1d8edd5cbe26fac93c8a8244aff3d";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =
     `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; // call API 

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:nth-child(2)");
        const temp = document.querySelector("#weather span:last-child");
        const name = data.name;
        city.innerText = name;
        weather.innerText = data.weather[0].main;
        temp.innerText = `${data.main.temp}˚C`;})

    }

function onGeoError(){
    alert("Can't find you!");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);