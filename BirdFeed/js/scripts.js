// Initialize API Constants for the Page
const apiKey="9v4e5m02o3t4"
mapboxgl.accessToken = 'pk.eyJ1Ijoic2NhbnppbGxvbSIsImEiOiJjbGphaTAyZXgxZGowM2RtaDl6ZG92eHAyIn0.WRGOF97PHCUSpsv5YVe44w';

const baseRequestUrl = "https://api.ebird.org/v2/"
var myHeaders = new Headers();
myHeaders.append("X-eBirdApiToken", apiKey);
var requestOptions = {
method: 'GET',
headers: myHeaders,
redirect: 'follow'
};

// Initialize Region Constants for the Page
const regions = [
    {city: "Brooklyn", code: "US-NY-047"},
    {city: "The Bronx", code: "US-NY-005"},
    {city: "Manhattan", code: "US-NY-061"},
    {city: "Westchester", code: "US-NY-119"},
];

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

async function populateTable(notableSightings) {
    // Populate table of nearby notable sightings 
    let tableRows = ""
    if(notableSightings.length == 0){
        tableRows = `<tr><td colspan="4">No results found.</td></tr>`;

    }
    else {
        for(i=0; i<notableSightings.length; i++) {
            row = notableSightings[i];
            tableRows +=`<tr>
            <th scope="col">${row["comName"]}</th>`
            tableRows +=`<th scope="col">${row["locName"]}</th>`
            tableRows +=`<th scope="col">${row["howMany"]}</th>`
            let obsDate = new Date(row["obsDt"]);
            var datestring = 
            tableRows +=`<th scope="col">${obsDate.getMonth()+1}/${obsDate.getDate()}/${obsDate.getFullYear()}</th>`
            tableRows +=`</tr>`
        }
    }
    document.querySelector("tbody").innerHTML = tableRows;
}

async function populateMap(geojson){
    document.querySelector("#map").innerHTML = "";

    if (Object.keys(geojson["features"]).length == 0) {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v11',
            center: [-74.0, 40.7],
            zoom: 10
        });

    }
    else {
        //Create map
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v11',
            center: geojson["features"][0]["geometry"]["coordinates"],
            zoom: 10
        });

        for (const feature of geojson.features) {
            // create a HTML element for each feature
            const el = document.createElement('div');
            el.className = 'marker';
            el.id = 'places';
            
            // make a marker for each feature and add to the map
            new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
        }

        map.addControl(new mapboxgl.NavigationControl());
        map.scrollZoom.disable();
    }
    
}

async function populateSightingsMap(sightingsData) {
    markers = []
 
    let geojson = {
        type: 'FeatureCollection',
        features: [
        ]
    };

    // add hotspot to map JSON
    for(let i=0; i<sightingsData.length; i++) {
        let hotspotEntry = {};
        hotspotEntry["type"] = "Feature";
        hotspotEntry["geometry"] = {};
        hotspotEntry["geometry"]["type"] = "Point";
        hotspotEntry["geometry"]["coordinates"] = [parseFloat(sightingsData[i]["lng"]), parseFloat(sightingsData[i]["lat"])];
        hotspotEntry["properties"]={}
        hotspotEntry["properties"]["title"] = "Mapbox";
        hotspotEntry["properties"]["description"] = sightingsData[i][""];

        geojson["features"].push(hotspotEntry);
    }

    populateMap(geojson);

}

async function populateHotspotMap(hotspotData) {
    hotspots = []
    // define list of headers from 0th row
    let headers = ["id","countryRegion","stateRegion","cityRegion","lat","long","name","date","number"]
 
    // define top 10 hotspots of an object
    // Iterate through indexes 1-11 of the hotspots list, since 0 == headers 
    for(let i=1; i<21; i++){
        // Get array from comma separated hotspot attributes
        let hotspotValues = hotspotData[i].split(",");
        // Initialize ith index of hotspots to be empty object
        hotspots[i-1] = {};

        // Iterate through hotspot attributes
        for(let j=0; j<hotspotValues.length; j++){
            tempValue = hotspotValues[j];
            hotspots[i-1][headers[j]] = tempValue.trim();
        }
    }

    let geojson = {
        type: 'FeatureCollection',
        features: [
        ]
    };

    // add hotspot to map JSON
    for(let i=0; i<hotspots.length; i++) {
        let hotspotEntry = {};
        hotspotEntry["type"] = "Feature";
        hotspotEntry["geometry"] = {};
        hotspotEntry["geometry"]["type"] = "Point";
        hotspotEntry["geometry"]["coordinates"] = [parseFloat(hotspots[i]["long"]), parseFloat(hotspots[i]["lat"])];
        hotspotEntry["properties"]={}
        hotspotEntry["properties"]["title"] = "Mapbox";
        hotspotEntry["properties"]["description"] = hotspots[i]["name"];

        geojson["features"].push(hotspotEntry);
    }

    populateMap(geojson);
}

async function populatePageByRegion(selectedCity) {
    // Populate Suggested Species by Region
    let speciesResponse = await fetch(`${baseRequestUrl}product/spplist/${selectedCity.id}`, requestOptions);
    let speciesList = await speciesResponse.json();
    
    // Get data list container element
    speciesListPageElement = document.querySelector("#local-species-input");

    // iterate through & add to the suggestions dropdown
    speciesOptions = "";
    for(let i=0; i<speciesList.length; i++){
        speciesOptions+= `<option id="${speciesList[i]}" description="${speciesDictionary[speciesList[i]]}">${speciesDictionary[speciesList[i]]}</option>`;
    }

    // 
    speciesListPageElement.innerHTML = speciesOptions;

    // Populate recent hotspots
    let hotspotResponse = await fetch(`${baseRequestUrl}ref/hotspot/${selectedCity.id}`, requestOptions);
    let hotspotData = await hotspotResponse.text();
    hotspotData = hotspotData.split("\n");
    populateHotspotMap(hotspotData);
    document.querySelector(".hotspots-label").innerHTML = `<i class="fa-solid fa-fire"></i> Hotspots in ${selectedCity.value}`;

    
    // Get list of notable observations in a region
    let notableSightingsResponse = await fetch(`${baseRequestUrl}data/obs/${selectedCity.id}/recent/notable`, requestOptions);
    let notableSightings = await notableSightingsResponse.json();
    populateTable(notableSightings);
    
}

function initializePageContent() {
    // Populate options in City dropdown
    cityOptions = ""
    for(let i=0; i<regions.length; i++) {
        cityOptions += `<option value="${regions[i]['city']}" id="${regions[i]['code']}">${regions[i]['city']}</option>`;
    }
    document.querySelector(".species-input").value="";
    document.querySelector("#city-select").innerHTML = cityOptions;
    const cityField = document.querySelector("#city-select");
    
    populatePageByRegion(cityField.options[cityField.selectedIndex]);

}

initializePageContent();


// Add event listener to the selector, re-initialize page when changed
let selector = document.getElementById("city-select");
selector.addEventListener("change", () => {
    const cityField = document.querySelector("#city-select");
    populatePageByRegion(cityField.options[cityField.selectedIndex]);
});

// Add event listener to the submit button, get species searched for when submitted
let button = document.querySelector(".my-primary-button");
button.addEventListener("click", async function(e){
    e.preventDefault();

    // get input value & region info 
    const selectedSpecies = document.querySelector(".species-input");
    const cityField = document.querySelector("#city-select");

    // make API call to get recent sightings of the bird
    let birdSightingsResponse = await fetch(`${baseRequestUrl}data/obs/${cityField.options[cityField.selectedIndex].id}/recent/${getKeyByValue(speciesDictionary, selectedSpecies.value)}?back=30&includeProvisional=true`, requestOptions);
    let birdData = await birdSightingsResponse.json();

    // populate map with recent sightings of the bird
    populateTable(birdData);
    populateSightingsMap(birdData);

    document.querySelector(".hotspots-label").innerHTML = `<i class="fa-solid fa-fire"></i> ${selectedSpecies.value} Sightings in ${cityField.options[cityField.selectedIndex].value}`;

    document.querySelector(".hotspots-label").innerHTML = `<i class="fa-solid fa-fire"></i> ${selectedSpecies.value} Sightings`;

    document.querySelector(".table-label").innerHTML = `<i class="fa-solid fa-eye"></i> Sightings by Date`;

    document.querySelector(".hide-element").classList.toggle("hide-element");
});


