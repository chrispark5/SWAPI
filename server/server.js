import express from "express";
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
    res.status(200).send({
      status: "success",
      message: "planet receieved",
    });
  } catch (e) {
    console.log(e);
  }
});

app.get("/api/films", async (req, res) => {
  try {
    res.status(200).send({
      status: "success",
      message: "film receieved",
    });
  } catch (e) {
    console.log(e);
  }
});
