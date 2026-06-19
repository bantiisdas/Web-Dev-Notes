import express from "express";

const app = express();
const port = 8000;
app.get("/health", (req, res) => {
  res.send({ message: "Health is good" });
});

app.get("/", (req, res) => {
  res.send({
    message:
      "We have successfully deployed docker container using github action, caddy and ssl",
    status: "Very Good 🎶❤️",
  });
});

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
