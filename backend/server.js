const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const app = express();

const notes = require("./data/notes");
const dotenv = require("dotenv");
const { notFound, errorHandler } = require("./moddlewares/errorMiddleware");

dotenv.config();
const PORT = process.env.PORT;
connectDB();

// to get the json request
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

app.use('/api/users',userRoutes)
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`server started in the PORT ${PORT}`));



