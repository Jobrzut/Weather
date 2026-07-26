import liftImage from "../imgs/lift.png";

const homepage = document.createElement("div");
homepage.classList.add(
  "flex",
  "grow",
  "items-center",
  "justify-center",
  "gap-4"
);
homepage.innerHTML = `<div class="flex items-center gap-8 font-inter flex-col sm:flex-row">
<div class="flex flex-col gap-4">
<h1 class="text-butter font-bold text-2xl pt-8">Check it before you go there...</h1>
<div class="flex gap-4">
<input id="locationInput" placeholder="Type in the location" class="border border-butter px-3 text-butter">
<button class="bg-butter px-4 py-2 duration-200 text-espresso border cursor-pointer border-butter hover:bg-transparent hover:text-butter">Search</button>
</div>
</div>
<img src="${liftImage}" class="w-60">
</div>`;

export default homepage;
