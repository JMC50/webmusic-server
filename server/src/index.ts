import express from "express";
import fs from "fs/promises";
import path from "path";
import { MongoClient } from "mongodb";

const app = express();
const PORT = 1002;
const mongo_url = 'mongodb+srv://minchan50:minchan12@cluster0.awsg0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(mongo_url);

app.use(express.json());
app.use(express.raw({"limit" : "10mb"}));
app.use('/client', express.static(path.resolve(__dirname, '..', '..', 'client')));

app.get("/", async (req, res) => {
    res.redirect("/client/index.html");
})

app.listen(PORT, () => {
    console.log("server is now running");
})