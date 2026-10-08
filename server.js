const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    message: "Learning-Path backend is working!",
  });
});

const quizRoutes = require("./backend/routes/quizRoutes");
app.use("/api/quiz", quizRoutes);

const server = app.listen(PORT, () => {
  console.log(`LearningPath running on http://localhost:${PORT}`);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use.`);
    console.error("Set PORT to another value before running npm start, for example: $env:PORT=8080; npm start");
  } else {
    console.error("Unable to start the LearningPath server:", error.message);
  }

  process.exitCode = 1;
});
