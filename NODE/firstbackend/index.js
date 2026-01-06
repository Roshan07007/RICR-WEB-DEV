import express from "express";

const app = express();
const PORT = 5001;

app.get("/", (req, res) => {
  res.send("karan rand!");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});