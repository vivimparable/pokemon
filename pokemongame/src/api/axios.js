import axios from "axios";

const pokemonapi = axios.create({
    baseURL:'https://pokeapi.co/api/v2/pokemon'
});


export default pokemonapi;