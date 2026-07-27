import './style.css'; 

import { getWeather } from "./components/getWeather.js";
import { displayHome } from "./components/home.js";
import { displayWait } from "./components/wait.js";


async function searchLocation(location,unit) {
    displayWait(location)
    let weatherData = await getWeather(location,unit)
    console.log(weatherData)
    displayHome(searchLocation)
}

displayHome(searchLocation)

