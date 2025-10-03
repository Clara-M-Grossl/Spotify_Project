import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://clara:clara@cluster0.8xodo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("Projeto_Spotify");

// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
