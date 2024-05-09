async function fetchData() {
    try {
        // 1. Get the name of the Pokémon from the input field and convert it to lowercase.
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        // 2. Fetch data from the PokeAPI using the Pokémon name.
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        // 3. Check if the response is successful (status code 200 OK). If not, throw an error.
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        // 4. Parse the response body as JSON.
        const data = await response.json();

        // 5. Get the URL for the front default sprite of the Pokémon from the response data.
        const pokemonSprite = data.sprites.front_default;

        // 6. Select the image element where the Pokémon sprite will be displayed.
        const imgElement = document.getElementById("pokemonSprite");

        // 7. Update the image element's src attribute with the Pokémon sprite URL.
        imgElement.src = pokemonSprite;

        // 8. Make the image element visible by setting its display style property to "block".
        imgElement.style.display = "block";
    } catch (error) {
        // 9. If any errors occur during the process, log the error to the console.
        console.error(error);
    }
}
