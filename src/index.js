import './style.css'; 

import { getWeather } from "./components/getWeather.js";
import homepage from "./components/home.js";

function displayScreen(page) {
    const body = document.querySelector("body");
    body.innerHTML = "";
    body.appendChild(page);
}

displayScreen(homepage);
