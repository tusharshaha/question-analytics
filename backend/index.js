import express from "express";
import cors from "cors";
import dbConnect from "./db/dbConnect.mjs";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

// middlewares
app.use(
  cors({
    origin: "*",
    methods: "GET,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
  })
);
app.use(express.json());

// database connection
dbConnect();

// routes
// app.use("/questions", orderRoute);
// app.use("/answer", placeRoute);

app.get("/", (req, res) => {
  res.send("server hiting");
});

app.listen(port, () => {
  console.log(`listening from http://localhost:${port}`);
});
