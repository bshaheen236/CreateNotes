const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();
dotenv.config();
const PORT = process.env.PORT;
connectDB();


app.get("/", (req, res) => {
  res.send("API is runnig");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});
app.get("/api/notes/:id",(req,res)=>{
    const note= notes.find((n)=>n._id==req.params.id);
    res.send(note); 
})


app.listen(PORT, console.log(`server started in the PORT ${PORT}`));



