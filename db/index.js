import dotenv from 'dotenv';
dotenv.config();
// require('dotenv').config({path : './env'}) This can also be used in place of the above 2 statements
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000; // Use process.env.PORT or default to 3000 if not set

const connectDB = async () => {
    console.log(process.env.URL)
  try {
    // Connect to MongoDB
    const connectionInstance = await mongoose.connect(
      `${process.env.URL}/${DB_NAME}`
    );

    console.log(
      "MongoDB successfully connected at the database host: " +
        connectionInstance.connection.host
    );

    // Start the Express server
    app.listen(PORT, () => {
      console.log("The app is listening on port " + PORT);
    });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

export default connectDB;
