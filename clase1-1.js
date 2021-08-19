const axios = require("axios");


async function get(url){
    const Personajes = await axios.get(url);
    console.log(Personajes);
}

get("https://www.breakingbadapi.com/api/characters");