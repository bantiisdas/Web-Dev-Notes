const express = require("express");

const app = express();

app.use(express.json());

app.get("/order", (req, res) => {
  res.status(200).json({
    message: "Hello from Express Server",
  });
});

app.post("/order", (req, res) => {
  const data = req.body;
  console.log(typeof data);
  console.log(typeof req);
  console.log(typeof res);

  res.status(200).json({
    status: "received",
    data,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
