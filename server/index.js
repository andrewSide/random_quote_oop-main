const express = require("express");
const quotes = require("./data/quotes");
const cors = require("cors");
const app = express();
const PORT = 3000;

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

const corsOptions = {
  origin: "http://172.20.10.5:5500/client/",
};

app.use(cors());

app.get("/quotes/random-single", (req, res) => {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Quotes API service is running on port ${PORT}`);
});
