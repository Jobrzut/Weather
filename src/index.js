import './style.css'; 

import { getWeather } from "./components/getWeather.js";
import { displayHome } from "./components/home.js";


async function searchLocation(location,unit) {
    let weatherData = await getWeather(location,unit)
    console.log(weatherData)
}

displayHome(searchLocation)

