import { displayHome } from "./home.js";

export function displayCity(cityName, unit, weatherData,searchLocation) {
    const body = document.querySelector("body");
    const citypage = document.createElement("div");
    citypage.classList.add(
      "flex",
      "grow",
      "items-center",
      "justify-center",
      "max-w-2xl"
    );

    let systemSign = {
        temp: unit == "metric" ? "°C" : "°F",
        speed: unit == "metric" ? "km/h" : "mph",
        humidity: "%",
        distance: unit == "metric" ? "km" : "mi"
    };

    function toNormalTime(time) {
        if (time[0] == "0") {
            return time.slice(1,5)
        } else {
            return time.slice(0,5)
        }
    }

    function progressPositon(start,end) {
        let startParts = start.split(":")
        let endParts = end.split(":")

        let startPosition = Number(startParts[0])*3600 + Number(startParts[1])*60 + Number(startParts[2])
        let endPosition = Number(endParts[0])*3600+Number(endParts[1])*60+Number(endParts[2])
        let scale = endPosition - startPosition
        let currentDate = new Date()
        let formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: weatherData.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
          });
        currentDate = formatter.format(currentDate).split(":")
        let currentDatePosition = Number(currentDate[0])*3600+Number(currentDate[1])*60+Number(currentDate[2])
        let point = currentDatePosition - startPosition
        
        return Math.round(point/scale *100)
    }

    function generateAlerts(alerts) {
        let alertsHTML = ""
        alerts.forEach((alert) => {
            alertsHTML += `<li>${alert.headline}</li>`
        })
        if (alertsHTML == "") {
            alertsHTML = "Luckily no alerts!"
        }
        return alertsHTML
    }

    citypage.innerHTML = `
    <div class ="text-butter flex flex-col grow gap-4">
        <button class="cursor-pointer self-start" id="backButton">← Back</button>
        <div class="flex justify-between items-center grow">
            <div class="flex flex-col gap-8">
                <div class="flex flex-col gap-2">
                    <h1 class="text-6xl capitalize font-bold">${cityName}</h1>
                    <p>${weatherData[0].conditions}</p>
                </div>
                <div>
                    <p class="text-4xl font-bold">${weatherData[0].temp}${systemSign["temp"]}</p>
                </div>
            </div>
            <div>
                <img class="w-72" src="https://cdn.meteocons.com/3.0.0-next.10/svg/fill/${weatherData[0].icon}.svg" />
            </div>
        </div>
        <div class="flex flex-col gap-4">
            <div class="bg-butter rounded text-espresso px-8 py-6 flex flex-col gap-6">
                <p class="uppercase font-bold text-xl">7-day forecast</p>
                <div class="flex justify-between flex-wrap gap-3">
                    <div class="font-bold">${weatherData[0].temp}${systemSign["temp"]}</div>
                    <div>${weatherData[1].temp}${systemSign["temp"]}</div>
                    <div>${weatherData[2].temp}${systemSign["temp"]}</div>
                    <div>${weatherData[3].temp}${systemSign["temp"]}</div>
                    <div>${weatherData[4].temp}${systemSign["temp"]}</div>
                    <div>${weatherData[5].temp}${systemSign["temp"]}</div>
                    <div>${weatherData[6].temp}${systemSign["temp"]}</div>
                </div>
            </div>
            <div class="bg-butter rounded text-espresso px-8 py-6 flex flex-col gap-8">
                <p class="uppercase font-bold text-xl">Air conditions</p>
                <div class="flex flex-col gap-6">
                    <div class="flex justify-between">
                        <div class="flex flex-col gap-2">
                            <p class="font-bold">Wind speed</p>
                            <p>${weatherData[0].windspeed} ${systemSign["speed"]}</p>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p class="font-bold">Humidity</p>
                            <p>${weatherData[0].humidity}${systemSign["humidity"]}</p>
                        </div>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex flex-col gap-2">
                            <p class="font-bold">UV Index</p>
                            <p>${weatherData[0].uvindex}</p>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p class="font-bold">Visibility</p>
                            <p>${weatherData[0].visibility} ${systemSign["distance"]}</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex flex-col gap-2">
                        <div class="flex justify-between">
                            <p class="font-bold">Sunrise ${toNormalTime(weatherData[0].sunrise)}</p>
                            <p class="font-bold">Sunset ${toNormalTime(weatherData[0].sunset)}</p>
                        </div>
                        <progress class="w-full border-3 border-espresso [&::-webkit-progress-bar]:bg-butter
                    [&::-webkit-progress-value]:bg-espresso
                    [&::-moz-progress-bar]:bg-espresso"
                    value="${progressPositon(weatherData[0].sunrise,weatherData[0].sunset)}" max="100"></progress>
                    <div>
                </div>
            </div>
            </div>
        </div>
        <div class="bg-butter rounded text-espresso px-8 py-6 flex flex-col gap-4">
                <p class="uppercase font-bold text-xl">Alerts</p>
                <ul class="flex flex-col gap-2">${generateAlerts(weatherData.alerts)}</ul>
        </div>
    </div>
    `

    body.innerHTML="";
    body.appendChild(citypage)

    let backButton = document.querySelector("#backButton")
    backButton.addEventListener("click", () => {
        displayHome(searchLocation)
    })
}