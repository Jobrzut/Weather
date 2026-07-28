async function fetchWeather(location,unit = "metric") {
        try {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=FACV4SB4UY2QJTKA3CTBP7CP5&include=days,alerts`);
            if (!response.ok) {
                throw new Error(`API error: ${response.status} ${response.statusText}`)
            }
            
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            throw new Error(error)
        }
}


function scoopWeatherData(data) {
    if (!data) {
        return null;
    }
    let weatherData = {};
    weatherData["alerts"] = data.alerts;
    weatherData["timezone"] = data.timezone;
    for (let i=0;i<7;i++) {
        const source = data.days[i];
        weatherData[i] = {
            temp: source.temp,
            humidity: source.humidity,
            windspeed: source.windspeed,
            conditions: source.conditions,
            icon: source.icon,
            uvindex: source.uvindex,
            sunrise: source.sunrise,
            sunset: source.sunset,
            visibility: source.visibility,
        }
    }
    return weatherData
}

export async function getWeather(location, unit) {
    if (location.trim() !== "") {
        const data = await fetchWeather(location, unit);
        return scoopWeatherData(data);
    }
    throw new Error("No location provided!");
}