export function displayWait(cityName) {
    const body = document.querySelector("body");
    const waitpage = document.createElement("div");
    waitpage.classList.add(
      "flex",
      "grow",
      "items-center",
      "justify-center",
    );

    waitpage.innerHTML = `<p class="text-butter">Just wait, we've sent someone to ${cityName}</p>`

    body.innerHTML="";
    body.appendChild(waitpage)
}