const TOTAL_QUESTIONS = 100;
const PASS_MARKS = 35;

let language = "C";
let level = "Beginner";

let currentQuestion = 0;
let userAnswers = [];

let questions = [];


/* =====================================
   QUESTION BANK
===================================== */

const questionBank = window.questionBank || {};


/* =====================================
   CREATE 100 QUESTION QUIZ
===================================== */

function createQuestions() {

    const selectedQuestions =
        questionBank[language]?.[level];

    if (!selectedQuestions) {
        alert(
            `${language} - ${level} questions are not available yet.`
        );
        return false;
    }

    if (selectedQuestions.length !== 100) {
        alert(
            `${language} - ${level} must contain exactly 100 questions.`
        );
        return false;
    }

    // Copy 100 real questions
    questions = selectedQuestions.map(q => ({
        question: q.question,
        options: [...q.options],
        answer: q.answer
    }));

    return true;
}


/* =====================================
   START QUIZ
===================================== */

document
    .getElementById("startQuizBtn")
    .addEventListener("click", () => {

        const started = createQuestions();

        if (!started) {
            return;
        }

        currentQuestion = 0;

        userAnswers =
            new Array(100).fill(null);

        document
            .getElementById("selectScreen")
            .classList.add("hidden");

        document
            .getElementById("quizScreen")
            .classList.remove("hidden");

        showQuestion();
    });


/* =====================================
   SHOW QUESTION
===================================== */

function showQuestion() {

    const q = questions[currentQuestion];

    document.getElementById("quizTitle").textContent =
        `${language} Programming – ${level}`;

    document.getElementById("currentNumber").textContent =
        currentQuestion + 1;

    document.getElementById("questionText").textContent =
        `${currentQuestion + 1}. ${q.question}`;

    const progress =
        ((currentQuestion + 1) / TOTAL_QUESTIONS) * 100;

    document.getElementById("questionProgress")
        .style.width = `${progress}%`;

    const optionsContainer =
        document.getElementById("options");

    optionsContainer.innerHTML = "";

    q.options.forEach(option => {

        const button = document.createElement("button");

        button.className = "option";
        button.textContent = option;

        if (userAnswers[currentQuestion] === option) {
            button.classList.add("selected");
        }

        button.addEventListener("click", () => {

            userAnswers[currentQuestion] = option;

            document
                .querySelectorAll(".option")
                .forEach(btn =>
                    btn.classList.remove("selected")
                );

            button.classList.add("selected");
        });

        optionsContainer.appendChild(button);
    });

    updateButtons();
}


/* =====================================
   NEXT
===================================== */

document
    .getElementById("nextBtn")
    .addEventListener("click", () => {

        if (currentQuestion < TOTAL_QUESTIONS - 1) {

            currentQuestion++;

            showQuestion();
        }
    });


/* =====================================
   PREVIOUS
===================================== */

document
    .getElementById("previousBtn")
    .addEventListener("click", () => {

        if (currentQuestion > 0) {

            currentQuestion--;

            showQuestion();
        }
    });


/* =====================================
   BUTTON CONTROL
===================================== */

function updateButtons() {

    const previous =
        document.getElementById("previousBtn");

    const next =
        document.getElementById("nextBtn");

    const submit =
        document.getElementById("submitBtn");

    previous.disabled =
        currentQuestion === 0;

    if (currentQuestion === TOTAL_QUESTIONS - 1) {

        next.classList.add("hidden");
        submit.classList.remove("hidden");

    } else {

        next.classList.remove("hidden");
        submit.classList.add("hidden");
    }
}


/* =====================================
   SUBMIT QUIZ
===================================== */

document
    .getElementById("submitBtn")
    .addEventListener("click", finishQuiz);


function finishQuiz() {

    let score = 0;
    let correct = 0;
    let incorrect = 0;

    questions.forEach((question, index) => {

        const userAnswer =
            userAnswers[index];

        if (userAnswer === question.answer) {

            score++;
            correct++;

        } else {

            incorrect++;
        }
    });

    const percentage = score;

    const passed = score >= PASS_MARKS;

    /*
       IMPORTANT:
       Wrong answer = 0 marks.
       Negative marking లేదు.
    */

    const result = {
        language,
        level,
        totalQuestions: TOTAL_QUESTIONS,
        totalMarks: 100,
        passMarks: PASS_MARKS,
        score,
        correct,
        incorrect,
        percentage,
        passed,
        answers: questions.map((question, index) => ({
            question: question.question,
            yourAnswer: userAnswers[index],
            correctAnswer: question.answer,
            marks:
                userAnswers[index] === question.answer
                    ? 1
                    : 0,
            status:
                userAnswers[index] === question.answer
                    ? "Correct"
                    : "Incorrect"
        }))
    };


    /*
       Save result.
       Later backend APIకి పంపవచ్చు.
    */

    localStorage.setItem(
        "learningPathQuizResult",
        JSON.stringify(result)
    );

    saveQuizProgress(result);


    showResult(result);
}


/* =====================================
   SAVE QUIZ PROGRESS
===================================== */

function saveQuizProgress(result) {

    const progress =
        JSON.parse(
            localStorage.getItem("learningPathProgress")
        ) || {};

    if (!progress[language]) {
        progress[language] = {
            Beginner: 0,
            Intermediate: 0,
            Advanced: 0
        };
    }

    // Score becomes progress percentage
    progress[language][level] =
        result.percentage;

    // Save pass/fail
    if (!progress[language].result) {
        progress[language].result = {};
    }

    progress[language].result[level] =
        result.passed ? "PASS" : "FAIL";

    localStorage.setItem(
        "learningPathProgress",
        JSON.stringify(progress)
    );
}


/* =====================================
   RESULT
===================================== */

function showResult(result) {

    document
        .getElementById("quizScreen")
        .classList.add("hidden");

    document
        .getElementById("resultScreen")
        .classList.remove("hidden");


    document.getElementById("resultTitle").textContent =
        `${result.language} Programming – ${result.level}`;


    document.getElementById("score").textContent =
        `${result.score} / 100`;

    document.getElementById("correct").textContent =
        result.correct;

    document.getElementById("incorrect").textContent =
        result.incorrect;

    document.getElementById("percentage").textContent =
        `${result.percentage}%`;


    const passFail =
        document.getElementById("passFail");

    if (result.passed) {

        passFail.className = "pass";

        passFail.innerHTML =
            "✅ PASS — Congratulations!";

        document.getElementById("resultIcon")
            .textContent = "🏆";

        document.getElementById("nextLevel")
            .innerHTML =
            "<h2>🔓 Next Level Unlocked</h2>";

        document.getElementById("nextLevelBtn")
            .classList.remove("hidden");

    } else {

        passFail.className = "fail";

        passFail.innerHTML =
            "❌ FAIL — You need at least 35 marks.";

        document.getElementById("resultIcon")
            .textContent = "❌";

        document.getElementById("nextLevel")
            .innerHTML =
            "<h2>🔒 Next Level Locked</h2>";

        document.getElementById("nextLevelBtn")
            .classList.add("hidden");
    }


    document.getElementById("finalProgress")
        .style.width =
        `${result.percentage}%`;

    document.getElementById("progressText")
        .textContent =
        `${result.percentage}% Progress`;
}


/* =====================================
   VIEW ALL 100 ANSWERS
===================================== */

document
    .getElementById("answersBtn")
    .addEventListener("click", showAllAnswers);


function showAllAnswers() {

    const result =
        JSON.parse(
            localStorage.getItem(
                "learningPathQuizResult"
            )
        );

    document
        .getElementById("resultScreen")
        .classList.add("hidden");

    document
        .getElementById("answersScreen")
        .classList.remove("hidden");


    document.getElementById("answerSummary")
        .textContent =
        `${result.correct} Correct • ${result.incorrect} Incorrect • ${result.score}/100`;


    const container =
        document.getElementById("answersList");

    container.innerHTML = "";


    result.answers.forEach((item, index) => {

        const card =
            document.createElement("div");

        card.className =
            `answer-card ${
                item.status === "Correct"
                    ? "correct"
                    : "incorrect"
            }`;

        card.innerHTML = `
            <h3>Question ${index + 1}</h3>

            <p>
                <strong>Question:</strong>
                ${item.question}
            </p>

            <p>
                <strong>Your Answer:</strong>
                ${item.yourAnswer || "Not Answered"}
            </p>

            <p>
                <strong>Correct Answer:</strong>
                ${item.correctAnswer}
            </p>

            <p>
                <strong>Status:</strong>
                <span class="${
                    item.status === "Correct"
                        ? "correct-text"
                        : "incorrect-text"
                }">
                    ${
                        item.status === "Correct"
                            ? "✅ Correct"
                            : "❌ Incorrect"
                    }
                </span>
            </p>

            <p>
                <strong>Marks:</strong>
                ${item.marks}
            </p>
        `;

        container.appendChild(card);
    });
}


/* =====================================
   BACK TO RESULT
===================================== */

document
    .getElementById("backResultBtn")
    .addEventListener("click", () => {

        document
            .getElementById("answersScreen")
            .classList.add("hidden");

        document
            .getElementById("resultScreen")
            .classList.remove("hidden");
    });


/* =====================================
   RETRY
===================================== */

document
    .getElementById("retryBtn")
    .addEventListener("click", () => {

        location.reload();
    });


/* =====================================
   NEXT LEVEL
===================================== */

document
    .getElementById("nextLevelBtn")
    .addEventListener("click", () => {

        const result =
            JSON.parse(
                localStorage.getItem(
                    "learningPathQuizResult"
                )
            );

        if (!result || !result.passed) {
            alert(
                "You must score at least 35 marks to unlock the next level."
            );
            return;
        }

        if (level === "Beginner") {

            level = "Intermediate";

        } else if (level === "Intermediate") {

            level = "Advanced";

        } else {

            alert(
                "🎉 Congratulations! You completed all C levels."
            );

            return;
        }

        const started = createQuestions();

        if (!started) {
            alert(
                `${language} ${level} questions are not available yet.`
            );
            return;
        }

        currentQuestion = 0;

        userAnswers =
            new Array(100).fill(null);

        document
            .getElementById("resultScreen")
            .classList.add("hidden");

        document
            .getElementById("quizScreen")
            .classList.remove("hidden");

        showQuestion();
    });


/* =====================================
   LEVEL SELECTION & LOCK STATUS
===================================== */

function updateSelectScreenLockState() {
    const progress = JSON.parse(localStorage.getItem("learningPathProgress")) || {};
    const langProgress = progress[language] || {};
    const results = langProgress.result || {};

    const intBtn = document.querySelector('.level[data-level="Intermediate"]');
    const advBtn = document.querySelector('.level[data-level="Advanced"]');

    if (intBtn) {
        if (results.Beginner === "PASS") {
            intBtn.classList.remove("locked");
            intBtn.innerHTML = "🔓 Intermediate";
        } else {
            intBtn.classList.add("locked");
            intBtn.innerHTML = "🔒 Intermediate";
        }
    }

    if (advBtn) {
        if (results.Intermediate === "PASS") {
            advBtn.classList.remove("locked");
            advBtn.innerHTML = "🔓 Advanced";
        } else {
            advBtn.classList.add("locked");
            advBtn.innerHTML = "🔒 Advanced";
        }
    }
}

document.querySelectorAll(".level").forEach(btn => {
    btn.addEventListener("click", () => {
        const targetLevel = btn.dataset.level;
        const progress = JSON.parse(localStorage.getItem("learningPathProgress")) || {};
        const results = progress[language]?.result || {};

        const isUnlocked = targetLevel === "Beginner" ||
            (targetLevel === "Intermediate" && results.Beginner === "PASS") ||
            (targetLevel === "Advanced" && results.Intermediate === "PASS");

        if (!isUnlocked) {
            alert(`You must score at least 35 marks in ${targetLevel === "Intermediate" ? "Beginner" : "Intermediate"} to unlock ${targetLevel}.`);
            return;
        }

        level = targetLevel;
        document.querySelectorAll(".level").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
    });
});

document.addEventListener("DOMContentLoaded", updateSelectScreenLockState);

