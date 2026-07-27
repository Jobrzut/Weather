import liftImage from "../imgs/lift.png";
import { takeInput } from "./handleInput.js";

export function displayHome(searchLocation) {
  const body = document.querySelector("body");
  const homepage = document.createElement("div");
  homepage.classList.add(
    "flex",
    "grow",
    "items-center",
    "justify-center",
    "gap-4"
  );
  homepage.innerHTML = `<div class="flex items-center gap-8 font-inter flex-col sm:flex-row">
<div class="flex flex-col gap-6">
<input type="checkbox" id="toggle" class="toggleCheckbox hidden">
<label for="toggle" class="toggleContainer relative grid grid-cols-2 w-fit border-3 rounded-2xl bg-espresso text-butter pointer before:content[''] before:absolute before:w-1/2 before:h-full before:left-0 before:rounded-xl before:bg-butter before:transition-all before:duration-300 ">
<div class="p-1.5 text-center z-1">Metric</div>
<div class="p-1.5 text-center z-1">Stupid</div>
</label>
<h1 class="text-butter font-bold text-2xl">Check it before you go there...</h1>
<div class="flex gap-4">
<input id="locationInput" placeholder="Type in the location" class="border border-butter px-3 text-butter">
<button class="bg-butter px-4 py-2 duration-200 text-espresso border cursor-pointer border-butter hover:bg-transparent hover:text-butter">Search</button>
</div>
</div>
<img src="${liftImage}" class="w-60">
</div>`;

  const unitSwitcher = homepage.querySelector("#toggle");
  const locationInput = homepage.querySelector("#locationInput");
  const searchButton = homepage.querySelector("button");

  takeInput(unitSwitcher, locationInput, searchButton, searchLocation);

  body.innerHTML="";
  body.appendChild(homepage)
}
