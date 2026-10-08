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
    sendQuizToBackend(result);


    showResult(result);
}

function sendQuizToBackend(result) {
    fetch("/api/quiz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userId: "student_1",
            quizId: `${result.language}_${result.level}`,
            ...result
        })
    })
    .then(res => res.json())
    .then(data => console.log("Backend Quiz API Response:", data))
    .catch(err => console.warn("Backend Quiz Sync (Offline Mode):", err));
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
   VIEW ALL 100 ANSWERS (SCREEN 13 TABLE + PAGINATION)
===================================== */

let currentPage = 1;
const questionsPerPage = 10;

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

    if (!result) return;

    document
        .getElementById("resultScreen")
        .classList.add("hidden");

    document
        .getElementById("answersScreen")
        .classList.remove("hidden");


    document.getElementById("answerSummary").innerHTML = `
        <span style="color:#20d99a; font-weight:bold;">Correct (${result.correct})</span> &nbsp;•&nbsp;
        <span style="color:#ff3e57; font-weight:bold;">Incorrect (${result.incorrect})</span> &nbsp;•&nbsp;
        <strong>Not Answered (0)</strong>
    `;

    renderAnswersTablePage(result, 1);
}

function renderAnswersTablePage(result, page) {
    currentPage = page;
    const container = document.getElementById("answersList");
    const totalPages = Math.ceil(result.answers.length / questionsPerPage);

    const startIndex = (page - 1) * questionsPerPage;
    const endIndex = Math.min(startIndex + questionsPerPage, result.answers.length);
    const pageAnswers = result.answers.slice(startIndex, endIndex);

    let html = `
        <div style="overflow-x: auto; margin-top: 20px;">
            <table style="width: 100%; border-collapse: collapse; text-align: left; background: #0b1126; border-radius: 10px; overflow: hidden; border: 1px solid #20284b;">
                <thead>
                    <tr style="background: #101936; border-bottom: 1px solid #20284b; color: #94a3b8; font-size: 13px;">
                        <th style="padding: 14px 18px;">Q.No</th>
                        <th style="padding: 14px 18px;">Question</th>
                        <th style="padding: 14px 18px;">Your Answer</th>
                        <th style="padding: 14px 18px;">Correct Answer</th>
                        <th style="padding: 14px 18px; text-align: center;">Status</th>
                        <th style="padding: 14px 18px; text-align: center;">Marks</th>
                    </tr>
                </thead>
                <tbody>
    `;

    pageAnswers.forEach((item, idx) => {
        const qNo = startIndex + idx + 1;
        const isCorrect = item.status === "Correct";

        html += `
            <tr style="border-bottom: 1px solid #162040; font-size: 14px;">
                <td style="padding: 14px 18px; color: #94a3b8; font-weight: bold;">${qNo}</td>
                <td style="padding: 14px 18px; max-width: 350px;">${item.question}</td>
                <td style="padding: 14px 18px; color: ${isCorrect ? '#20d99a' : '#ff3e57'}; font-weight: bold;">${item.yourAnswer || 'Not Answered'}</td>
                <td style="padding: 14px 18px; color: #20d99a; font-weight: bold;">${item.correctAnswer}</td>
                <td style="padding: 14px 18px; text-align: center;">
                    <span style="display:inline-block; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; background: ${isCorrect ? '#103f35' : '#451727'}; color: ${isCorrect ? '#20d99a' : '#ff5268'};">
                        ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </span>
                </td>
                <td style="padding: 14px 18px; text-align: center; font-weight: bold;">${item.marks}</td>
            </tr>
        `;
    });

    html += `
                </tbody>
            </table>
        </div>
    `;

    // Render Pagination Controls: << < 1 2 3 4 5 ... 10 > >>
    html += `
        <div style="display: flex; justify-content: center; align-items: center; gap: 8px; margin-top: 25px; flex-wrap: wrap;">
            <button onclick="changeAnswersPage(1)" ${page === 1 ? 'disabled style="opacity:0.4;"' : ''} class="primary" style="padding: 8px 14px; font-size: 13px;">&lt;&lt;</button>
            <button onclick="changeAnswersPage(${page - 1})" ${page === 1 ? 'disabled style="opacity:0.4;"' : ''} class="primary" style="padding: 8px 14px; font-size: 13px;">&lt;</button>
    `;

    for (let i = 1; i <= totalPages; i++) {
        html += `
            <button onclick="changeAnswersPage(${i})" class="${i === page ? 'submit' : 'primary'}" style="padding: 8px 14px; font-size: 13px;">${i}</button>
        `;
    }

    html += `
            <button onclick="changeAnswersPage(${page + 1})" ${page === totalPages ? 'disabled style="opacity:0.4;"' : ''} class="primary" style="padding: 8px 14px; font-size: 13px;">&gt;</button>
            <button onclick="changeAnswersPage(${totalPages})" ${page === totalPages ? 'disabled style="opacity:0.4;"' : ''} class="primary" style="padding: 8px 14px; font-size: 13px;">&gt;&gt;</button>
        </div>
    `;

    container.innerHTML = html;
}

window.changeAnswersPage = function(page) {
    const result = JSON.parse(localStorage.getItem("learningPathQuizResult"));
    if (result) {
        renderAnswersTablePage(result, page);
    }
};


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

