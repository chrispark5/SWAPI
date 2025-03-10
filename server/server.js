import express from "express";
import { promises as fs } from "fs";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_DB_COLLECTION;

const app = express();
const PORT = 3000;
app.use(cors());
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.use(express.json());


app.get("/api/planets", async (req, res) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("planets");
    const planetsArray = await collection.find({}).toArray();
    console.log(planetsArray);
    res.json(planetsArray);
  } catch (e) {
    console.log(e);
  }
});

app.get("/api/planets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("planets");
    const planet = await collection.findOne({ id: parseInt(id) });
    console.log(planet);
    res.json(planet);
  } catch (e) {
    console.log(e);
  }
});

app.get("/api/planets/:id/films", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("films_planets");
    const planetfilmsList = await collection
      .find({ planet_id: parseInt(id) })
      .toArray();
    const filmsIds = planetfilmsList.flatMap(
      (planet) => planet.film_id
    );
    const filmsCollection = db.collection("films");
    const films = await filmsCollection
      .find({ id: { $in: filmsIds } })
      .toArray();
    console.log(films);
    res.json(films);
  } catch (e) {
    console.log(e);
  }
});

app.get("/api/planets/:id/characters", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("characters");
    const characters = await collection.find({ homeworld:  parseInt(id)  }).toArray();
    console.log(characters)
    res.json(characters);
  } catch (e) {
    console.log(e);
  }
});
