const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Root Route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API Status Route
app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    message: "Learning-Path backend API is active!",
    version: "1.0.0"
  });
});

// Mount All Backend API Routes (Screen 15 API Structure)
const authRoutes = require("./backend/routes/authRoutes");
const userRoutes = require("./backend/routes/userRoutes");
const courseRoutes = require("./backend/routes/courseRoutes");
const progressRoutes = require("./backend/routes/progressRoutes");
const quizRoutes = require("./backend/routes/quizRoutes");
const projectRoutes = require("./backend/routes/projectRoutes");
const adminRoutes = require("./backend/routes/adminRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/admin", adminRoutes);

// Server initialization & graceful port fallback handling
const server = app.listen(PORT, () => {
  console.log(`🚀 LearningPath running on http://localhost:${PORT}`);
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
