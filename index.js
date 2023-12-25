import { application } from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv"
import express from "express"
const app = express();
dotenv.config({
    path : './env'
})
connectDB()
// .then(()=>{
//     const port = 3000 || process.env.PORT;
//     app.listen(port, ()=>{
//         console.log("The server is running at port "+process.env.PORT);
//     })
// })
// .catch(err=>{
//     console.log("MongoDB Connection failed !!! ", err);
// })