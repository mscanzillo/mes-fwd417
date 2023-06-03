// Create City Array
let cities = ["NYC", "SF", "LA", "Austin", "Sydney"];

// Listen for when DOM is loaded

document.addEventListener('DOMContentLoaded', function(event) { 
    // When DOM is loaded, add cities to the dropdown options via loop
    for(let i = 0; i < cities.length; i++) {
        // Create Element
        let cityItem = document.createElement("option");
        // Set Properties
        cityItem.value = cities[i];
        // Append Element
        document.querySelector("#city-type").append(cityItem);
    }

    dropdown = document.querySelector('#city-type');
    dropdown.addEventListener('change', function(e) {
        let chosenCity = document.querySelector('#city-type').value;
        // maybe this will work if the CSS classes are named the city values in the array
        document.body.setAttribute('class',`${chosenCity}`);
    });
});