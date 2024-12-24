import express from "express";
import { foodCollection } from "../config/dbCollections.js";
import { ObjectId } from "mongodb";

const foodRouter = express.Router();

foodRouter.get("/available-foods", async (req, res) => {
  try {
    const foods = foodCollection.find();
    const result = await foods.toArray();
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Something went wrong on server side" });
  }
});

foodRouter.post("/add-food", async (req, res) => {
  const data = req.body;
  try {
    const result = await foodCollection.insertOne(data);
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Something went wrong on server side" });
  }
});

foodRouter.post("/food-details", async (req, res) => {
  const id = req.body;

  const query = { _id: new ObjectId(id) };
  try {
    const food = await foodCollection.findOne(query);
    res.send(food);
  } catch (err) {
    res.status(501).send({ message: "Something went wrong on server side" });
  }
});

foodRouter.post("/manage-myfoods", async (req, res) => {
  const { email } = req.body;
  const query = {
    userEmail: email,
  };
  try {
    const foods = foodCollection.find(query);
    const result = await foods.toArray();
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Something went wrong on server side" });
  }
});

export default foodRouter;
