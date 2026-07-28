import './style.css'; 

import { getWeather } from "./components/getWeather.js";
import { displayHome } from "./components/home.js";
import { displayWait } from "./components/wait.js";
import { displayCity } from "./components/city.js";
import { mockWeatherData } from './components/mock.js';

const mock = false

async function searchLocation(location,unit) {
    try {
        let weatherData
        displayWait(location)
        if (!mock) {
            weatherData = await getWeather(location,unit)
        } else {
            weatherData = mockWeatherData
        }
        displayCity(location,unit,weatherData,searchLocation)
    } catch(error) {
        console.error("Failed to load weather: ", error);
        alert("Could not find that location. Please try again!")
        displayHome(searchLocation)
    }
}

displayHome(searchLocation)


