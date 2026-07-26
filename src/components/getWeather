async function fetchWeather(location,unit = "metric") {
        try {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=FACV4SB4UY2QJTKA3CTBP7CP5&include=days,alerts`);
            if (!response.ok) {
                throw new Error(`API error: ${response.status} ${response.statusText}`)
            }
            
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.log(error);
            return null;
        }
}


function scoopWeatherData(data) {
    if (!data) {
        return null;
    }
    let weatherData = {};
    weatherData["alerts"] = data.alerts;
    for (let i=0;i<7;i++) {
        const source = data.days[i];
        weatherData[i] = {
            temp: source.temp,
            tempmax: source.tempmax,
            tempmin: source.tempmin,
            humidity: source.humidity,
            windspeed: source.windspeed,
            windgust: source.windgust,
            conditions: source.conditions,
            icon: source.icon,
            uvindex: source.uvindex,
            moonphase: source.moonphase,
            sunrise: source.sunrise,
            sunset: source.sunset,
            visibility: source.visibility,
        }
    }
    return weatherData
}

export async function getWeather(location) {
    if (location.trim() !== "") {
        const data = await fetchWeather(location);
        return scoopWeatherData(data);
    }
    throw new Error("No location provided!");
}