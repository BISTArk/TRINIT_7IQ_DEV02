import express from 'express'
import dotenv from 'dotenv'
import connectDatabase from "./configurations/databaseconfig.js";
import cors from 'cors'

dotenv.config();

await connectDatabase();

const app = express();

app.use(express.json({ limit: "50mb" }));

app.use(cors());

// routes

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
