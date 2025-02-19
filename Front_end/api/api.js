import axios from "axios";

const URL = "http://localhost:3000";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const songsArray = responseSongs.data;

export const artistArray = responseArtists.data;

// console.log(responseArtists);
