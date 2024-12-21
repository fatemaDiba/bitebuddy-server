import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/db.config.js";
import foodRouter from "./routes/foodRouter.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

// router
app.use("/foods", foodRouter);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch(console.dir);
