const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 3000;
const TuskData = [
  {
    id: 1,
    Tile: "Tusk For Me",
    Text: "Ajke sokale ami ki ki korbo ta bola holo",
  },
  {
    id: 2,
    Tile: "Agulo Holo Amar Title",
    Text: "Siam Hosen ata amar text",
  },
];

app.get("/data", (req, res) => {
  res.send(TuskData);
});

app.get("/data/:id", (req, res) => {
  const Tuskid = parseInt(req.params.id);
  const FinalTusk = TuskData.find((T) => T.id == Tuskid);
  FinalTusk
    ? res.json(FinalTusk)
    : res.status(404).json({ Message: "User Not Found" });
});

app.post("/data", (req, res) => {
  const newTusk = {
    id: TuskData.length + 1,
    Tile: req.body.Title,
    Text: req.body.Text,
  };
  TuskData.push(newTusk);
  res.status(201).json(newTusk);
});

app.delete("/data/:id", (req, res) => {
  const Todoid = parseInt(req.params.id);
  TuskData.filter((t) => t.id !== Todoid);
  res.json({ message: "Data Delete" });
});

app.listen(port, console.log(`http://localhost:${port}/data`));
