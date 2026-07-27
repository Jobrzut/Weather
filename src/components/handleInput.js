let location
let unit = "metric"

export function takeInput(unitSwitcher, locationInput, searchButton, searchLocation) {
    searchButton.addEventListener("click", () => {
        if (locationInput.value.trim() !== "") {
            location = locationInput.value

            searchLocation(location,unit);
        }
    })

    unitSwitcher.addEventListener("click", () => {
        if (unitSwitcher.checked) {
            unit = "us"
        } else {
            unit = "metric"
        }
    })
}