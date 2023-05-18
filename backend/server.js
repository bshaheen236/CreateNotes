const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

const notes = require("./data/notes");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT;
connectDB();

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}))
app.use(cors())


app.get("/", (req, res) => {
  res.send("API is runnig");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id == req.params.id);
  res.send(note);
})


app.listen(PORT, console.log(`server started in the PORT ${PORT}`));



