const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/api/get-all-users", (req, res) => {
  res.send([{ id: 1, name: "Test user 1" }]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});
