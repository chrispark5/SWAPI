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
