import { artistArray } from "../../Front_end/src/assets/database/artists.js";
import { songsArray } from "../../Front_end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistOBj = { ...currentArtistObj };
  delete newArtistOBj.id;

  return newArtistOBj;
});

const newSongArray = songsArray.map((currentSongObj) => {
  const newSongOBj = { ...currentSongObj };
  delete newSongOBj.id;

  return newSongOBj;
});

const responseSongs = await db.collection("artists").insertMany(newArtistArray);
const responseArtists = await db.collection("songs").insertMany(newSongArray);

console.log(responseArtists);
console.log(responseSongs);
