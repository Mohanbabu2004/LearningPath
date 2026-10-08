const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");

router.post("/submit", quizController.submitQuiz);
router.get("/submissions", quizController.getQuizSubmissions);

module.exports = router;

