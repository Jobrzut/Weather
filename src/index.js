import './style.css'; 

import { getWeather } from "./components/getWeather.js";
import { displayHome } from "./components/home.js";
import { displayWait } from "./components/wait.js";


async function searchLocation(location,unit) {
    try {
        displayWait(location)
        let weatherData = await getWeather(location,unit)
        console.log(weatherData)
    } catch(error) {
        console.error("Failed to load weather: ", error);
        alert("Could not find that location. Please try again!")
        displayHome(searchLocation)
    }
}

displayHome(searchLocation)

