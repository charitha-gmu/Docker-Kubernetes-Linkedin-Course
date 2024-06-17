const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/api/get-all-products", (req, res) => {
  res.send([{ id: 1, name: "Product 1" }]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});
