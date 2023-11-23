const  key = "94e5ba41218100229183e105084b536e"

function populateScreen(data){
    console.log(data)
    document.querySelector(".city-text").innerHTML = "Tempo em " + data.name

    document.querySelector(".temp").innerHTML = Math.floor (data.main.temp) + "°C"

    document.querySelector(".text-prevision").innerHTML = data.weather[0].description

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"

    document.querySelector(".img-prevision").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

}

function clickButton() {

    const city = document.querySelector(".input-city").value

    searchCity(city)
}

async function searchCity(city){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`)
    .then(response => response.json())

    populateScreen(data)
}

