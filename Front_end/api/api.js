import axios from "axios";

// const { NODE_ENV } = process.env;
// const URL = "http://localhost:3000/api"
const URL = "https://deploy-projeto-spotify-cqiu.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const songsArray = responseSongs.data;

export const artistArray = responseArtists.data;

// console.log(responseArtists);
