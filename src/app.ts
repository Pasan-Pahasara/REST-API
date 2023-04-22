import express, { Request, Response } from "express";
import db from "mongoose";
import routers from "./routes";
import { json, urlencoded } from "body-parser";
import { config } from "dotenv";
//dotenv configuration
config();

//Create the express app
const app = express();
//If you are receiving JSON data in request-body
app.use(json());

//If you are receiving url-encoded data in request-body
app.use(urlencoded({ extended: true }));

//Error handling middleware
app.use((error: Error, _req: Request, res: Response) => {
  res.status(500).json({ message: error.message });
});

//Mount the routes at /resources URl path
app.use("/", routers);

//Connect to the database
db.connect(process.env.MONGO_DB_URL!)
  .then(() => {
    console.log("Database connected!");

    app.listen(process.env.PORT, () => {
      console.log("Server is listening on Port 4000");
    });
  })
  .catch((error) => {
    console.log("Failed to connect MongoDB : ", error.message);
  });
