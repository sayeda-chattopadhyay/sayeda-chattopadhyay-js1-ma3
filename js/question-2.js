// Make a call to the Rawg API.

// Go to https://rawg.io/apidocs and get an API key which you’ll use as part of the endpoint you’re making an API call to. You can use https://noroff.no for the URL and Noroff Assignment for the description.

// You'll be given an API Key you can add as a "key" parameter in your fetch request.

// Make a call to the following API endpoint replacing INSERTAPIKEYHERE with the key given to you from the Rawg API.
// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE

// Loop through the results and display the following properties in HTML, but only for the first eight results:
// name
// rating
// number of tags (not the tag details, just the amount of tags)
// The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

// Be sure to handle any potential errors in the code.

// You can use either regular promise or async/await syntax to make the call.

// Given key = 3f71f0b3efca4c8bb88bafd4ded755a2

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=3f71f0b3efca4c8bb88bafd4ded755a2";

const resultsContainer = document.querySelector(".results");

async function getGames() {
  try {
    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    const facts = data.results;

    console.log(facts);

    resultsContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
      console.log(facts[i].name);
      console.log(facts[i].rating);
      console.log(facts[i].tags.length);

      if (i === 8) {
        break;
      }

      resultsContainer.innerHTML += `<div class="result">Name: ${facts[i].name} , Rating: ${facts[i].rating}${facts[i].rating}, Tags: ${facts[i].tags.length}</div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = errorMessage("An error has found.");
  }
}

getGames();
