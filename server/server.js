import express from "express";
import { promises as fs } from "fs";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;

const app = express();
const PORT = 3000;
app.use(cors());
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.use(express.json());

app.get("/api/planets", async (req, res) => {
  try {
    res.status(200).send({
      status: "success",
      message: "planet receieved",
    });
  } catch (e) {
    console.log(e);
  }
});

app.get("/api/characters", async (req, res) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("characters");
    const charactersArray = await collection.find({}).toArray();
    console.log(charactersArray);
    res.json(charactersArray);
  } catch (e) {
    console.log(e);
  }
});

app.get("/api/films", async (req, res) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("films");
    const filmsArray = await collection.find({}).toArray();
    console.log(filmsArray);
    res.json(filmsArray);
  } catch (e) {
    console.log(e);
  }
});

app.get("/api/films/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("films");
    const film = await collection.findOne({ id: parseInt(id) });
    console.log(film);
    res.json(film);
  } catch (e) {
    console.log(e);
  }
});

app.get("/api/films/:id/characters", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("films_characters");
    const filmCharactersList = await collection
      .find({ film_id: parseInt(id) })
      .toArray();
    const characterIds = filmCharactersList.flatMap(
      (film) => film.character_id
    );
    console.log(characterIds);
    res.json(characterIds);
  } catch (e) {
    console.log(e);
  }
});

app.get("/api/films/:id/planets", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("films_planets");
    const filmPlanetsList = await collection
      .find({ film_id: parseInt(id) })
      .toArray();
    const planetIds = filmPlanetsList.flatMap(
      (film) => film.planet_id
    );
    console.log(planetIds);
    res.json(planetIds);
  } catch (e) {
    console.log(e);
  }
});