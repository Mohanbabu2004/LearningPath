const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");

router.get("/questions", quizController.getQuestions);
router.post("/submit", quizController.submitQuiz);
router.get("/result/:id", quizController.getResultById);
router.get("/submissions", quizController.getQuizSubmissions);

module.exports = router;
