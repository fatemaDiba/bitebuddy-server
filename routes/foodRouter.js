import express from "express";
import { foodCollection } from "../config/dbCollections.js";

const foodRouter = express.Router();

foodRouter.get("/all-foods", async (req, res) => {
  res.send("Diba");
});

foodRouter.post("/add-food", async (req, res) => {
  const data = req.body;
  const result = await foodCollection.insertOne(data);
  res.send(result);
});

export default foodRouter;
