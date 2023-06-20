
// ToDo
// When the user submits the search form, make an API request to Giphy's search endpoint
// https://api.giphy.com/v1/gifs/search?api_key="YOURAPIKEY"&q="SEARCHSTRING"
// Display the results in the #giphy-results div provided in the html
// Each new search should replace the previous search results
// CSS Bonus: Use flex or grid properties to display the results in a responsive, clean layout

const apiKey = "i9u5FoDahfPMI2LFAipRD3KXJ45afk0f";

async function giphySearch(e) {

  // prevent the page from submitting/reloading
  e.preventDefault();

  // get the user input from the form
  searchTerm = document.querySelector('input[name="search-term"]').value;

  // make an API call using fetch() - include your API key and the user's search term (template strings are your friend)
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`;

  const giphyResponse = await fetch(apiUrl);

  // convert your response data into .json()
  const giphyJSON = await giphyResponse.json();

  // print your data to the console to see its format, dont forget to delete later
  // console.log(giphyJSON);

  // clear out all gifs from previous searches
  document.querySelector('#giphy-results').innerHTML = "";


  // use a loop to create and append each image to the dom
  for(i=0; i<giphyJSON.data.length; i++){ 
    let gif = document.createElement("img");
    gif.setAttribute("src", giphyJSON.data[i].images.fixed_width.url);
    document.querySelector("#giphy-results").appendChild(gif);
  }
}

// dont forget your event listener
document.querySelector('input[type="submit"]').addEventListener('click', giphySearch);

