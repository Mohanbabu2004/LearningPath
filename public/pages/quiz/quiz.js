const TOTAL_QUESTIONS = 100;
const PASS_MARKS = 35;

let language = "C";
let level = "Beginner";

let currentQuestion = 0;
let userAnswers = [];

let questions = [];

/* =====================================
   CHECKPOINT MANAGEMENT (EVERY 10 QUESTIONS)
===================================== */
let isCheckpointMode = false;
let checkpointCompletedCount = 0;

/* =====================================
   SCREEN 10 COUNTDOWN TIMER (60 MINUTES)
===================================== */
let timerInterval = null;
let totalTimeSeconds = 60 * 60; // 60:00 = 3600 seconds
let timeRemaining = totalTimeSeconds;

function startTimer() {
    clearInterval(timerInterval);
    timeRemaining = totalTimeSeconds;
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            finishQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const timerEl = document.getElementById("quizTimerDisplay");
    if (timerEl) {
        timerEl.textContent = formatted;
    }
}



/* =====================================
   QUESTION BANK
===================================== */


/* =====================================
   LANGUAGE & LEVEL NORMALIZERS
===================================== */
function normalizeLanguage(lang) {
    if (!lang) return "C";
    const cleaned = lang.trim().toUpperCase();
    if (cleaned === "C++" || cleaned === "CPP") return "CPP";
    if (cleaned === "C") return "C";
    if (cleaned === "PYTHON") return "Python";
    if (cleaned === "TYPESCRIPT" || cleaned === "TS") return "TypeScript";
    if (cleaned === "JAVASCRIPT" || cleaned === "JS") return "JavaScript";
    if (cleaned === "JAVA") return "Java";
    if (cleaned === "R") return "R";
    if (cleaned === "CUDA") return "CUDA";
    if (cleaned === "RUBY") return "Ruby";
    if (cleaned === "PHP") return "PHP";
    if (cleaned === "HTML") return "HTML";
    if (cleaned === "CSS") return "CSS";
    return lang;
}

function getLanguageDisplayName(lang) {
    const norm = normalizeLanguage(lang);
    const map = {
        "CPP": "C++",
        "HTML": "HTML",
        "CSS": "CSS",
        "PHP": "PHP",
        "CUDA": "CUDA",
        "JavaScript": "JavaScript",
        "TypeScript": "TypeScript",
        "Python": "Python",
        "Java": "Java",
        "Ruby": "Ruby",
        "R": "R",
        "C": "C"
    };
    return map[norm] || norm;
}

function normalizeLevel(lvl) {
    if (!lvl) return "Beginner";
    const l = lvl.trim().toLowerCase();
    if (l.startsWith("beg") || l.startsWith("basic")) return "Beginner";
    if (l.startsWith("int") || l.startsWith("med")) return "Intermediate";
    if (l.startsWith("adv")) return "Advanced";
    return "Beginner";
}

const questionBank = window.questionBank || {};


/* =====================================
   CREATE 100 QUESTION QUIZ
===================================== */

function createQuestions() {
    const normLang = normalizeLanguage(language);
    const normLevel = normalizeLevel(level);

    const selectedQuestions =
        questionBank[normLang]?.[normLevel] || questionBank[language]?.[level];

    if (!selectedQuestions) {
        alert(
            `${getLanguageDisplayName(normLang)} - ${normLevel} questions are not available yet.`
        );
        return false;
    }

    if (selectedQuestions.length !== 100) {
        alert(
            `${getLanguageDisplayName(normLang)} - ${normLevel} must contain exactly 100 questions (found ${selectedQuestions.length}).`
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

        startTimer();
        showQuestion();
    });


/* =====================================
   SHOW QUESTION
===================================== */

function showQuestion() {

    const q = questions[currentQuestion];
    if (!q) return;

    const quizTitle = document.getElementById("quizTitle");
    if (quizTitle) {
        quizTitle.textContent = `${getLanguageDisplayName(language)} Programming – ${level}`;
    }

    const currentNumber = document.getElementById("currentNumber");
    if (currentNumber) {
        currentNumber.textContent = currentQuestion + 1;
    }

    const headerNumber = document.getElementById("headerQuestionNum");
    if (headerNumber) {
        headerNumber.textContent = currentQuestion + 1;
    }

    const questionText = document.getElementById("questionText");
    if (questionText) {
        questionText.textContent = q.question;
    }

    const progressEl = document.getElementById("questionProgress");
    if (progressEl) {
        const progress = ((currentQuestion + 1) / TOTAL_QUESTIONS) * 100;
        progressEl.style.width = `${progress}%`;
    }

    const optionsContainer = document.getElementById("options");
    if (optionsContainer) {
        optionsContainer.innerHTML = "";

        q.options.forEach((option, idx) => {
            const letter = String.fromCharCode(65 + idx); // 'A', 'B', 'C', 'D'
            const optionBox = document.createElement("div");
            const isSelected = userAnswers[currentQuestion] === option;
            
            optionBox.className = "quiz-radio-option" + (isSelected ? " selected" : "");
            optionBox.innerHTML = `
                <div class="radio-indicator">
                    <div class="radio-dot"></div>
                </div>
                <div class="option-label-text">
                    <span class="option-letter">${letter}.</span>
                    <span class="option-val">${option}</span>
                </div>
            `;

            optionBox.addEventListener("click", () => {
                userAnswers[currentQuestion] = option;
                document.querySelectorAll(".quiz-radio-option").forEach(b => b.classList.remove("selected"));
                optionBox.classList.add("selected");
            });

            optionsContainer.appendChild(optionBox);
        });
    }

    updateButtons();
}


/* =====================================
   NEXT
===================================== */

document
    .getElementById("nextBtn")
    .addEventListener("click", () => {
        const questionNumber = currentQuestion + 1;

        // Checkpoint: trigger every 10 questions (10, 20, 30, ... 90)
        if (questionNumber % 10 === 0 && questionNumber < TOTAL_QUESTIONS) {
            showCheckpointResult(questionNumber);
            return;
        }

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


function showCheckpointResult(completedCount) {
    isCheckpointMode = true;
    checkpointCompletedCount = completedCount;

    let score = 0;
    let correct = 0;
    let incorrect = 0;

    for (let i = 0; i < completedCount; i++) {
        if (userAnswers[i] === questions[i].answer) {
            score++;
            correct++;
        } else {
            incorrect++;
        }
    }

    const percentage = Math.round((score / completedCount) * 100);
    const passMarksForChunk = Math.ceil(completedCount * (PASS_MARKS / 100));
    const passed = score >= passMarksForChunk;

    const checkpointResult = {
        isCheckpoint: true,
        checkpointNum: completedCount / 10,
        totalCheckpoints: TOTAL_QUESTIONS / 10,
        completedCount,
        totalQuestions: completedCount,
        totalMarks: completedCount,
        passMarks: passMarksForChunk,
        score,
        correct,
        incorrect,
        percentage,
        passed,
        language,
        level,
        answers: questions.slice(0, completedCount).map((q, i) => ({
            question: q.question,
            yourAnswer: userAnswers[i],
            correctAnswer: q.answer,
            marks: userAnswers[i] === q.answer ? 1 : 0,
            status: userAnswers[i] === q.answer ? "Correct" : "Incorrect"
        }))
    };

    localStorage.setItem("learningPathQuizResult", JSON.stringify(checkpointResult));
    renderScreen12Result(checkpointResult);
}

function finishQuiz() {
    clearInterval(timerInterval);
    isCheckpointMode = false;
    checkpointCompletedCount = TOTAL_QUESTIONS;

    let score = 0;
    let correct = 0;
    let incorrect = 0;

    questions.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            score++;
            correct++;
        } else {
            incorrect++;
        }
    });

    const percentage = Math.round((score / TOTAL_QUESTIONS) * 100);
    const passed = score >= PASS_MARKS;

    const result = {
        isCheckpoint: false,
        completedCount: TOTAL_QUESTIONS,
        language,
        level,
        totalQuestions: TOTAL_QUESTIONS,
        totalMarks: TOTAL_QUESTIONS,
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
            marks: userAnswers[index] === question.answer ? 1 : 0,
            status: userAnswers[index] === question.answer ? "Correct" : "Incorrect"
        }))
    };

    localStorage.setItem("learningPathQuizResult", JSON.stringify(result));
    saveQuizProgress(result);
    sendQuizToBackend(result);

    renderScreen12Result(result);
}

function renderScreen12Result(result) {
    document.getElementById("quizScreen").classList.add("hidden");
    document.getElementById("answersScreen").classList.add("hidden");
    document.getElementById("resultScreen").classList.remove("hidden");

    // Header Title
    const headerTitle = document.getElementById("screen12HeaderTitle");
    if (headerTitle) {
        if (result.isCheckpoint) {
            headerTitle.textContent = `Quiz Result (Checkpoint ${result.checkpointNum}/${result.totalCheckpoints})`;
        } else {
            headerTitle.textContent = `Quiz Result (${result.passed ? 'Pass' : 'Fail'})`;
        }
    }

    // Main Card Title
    const mainTitle = document.getElementById("screen12MainTitle");
    if (mainTitle) {
        if (result.isCheckpoint) {
            mainTitle.textContent = `${result.completedCount} QUESTIONS COMPLETED!`;
        } else {
            mainTitle.textContent = "QUIZ COMPLETED!";
        }
    }

    // Course Title
    const courseTitle = document.getElementById("resultTitle");
    if (courseTitle) {
        courseTitle.textContent = `${getLanguageDisplayName(result.language)} Programming - ${result.level}`;
    }

    // 4 Metrics
    const totalQEl = document.getElementById("totalQuestionsVal");
    if (totalQEl) totalQEl.textContent = result.totalQuestions;

    const totalMarksEl = document.getElementById("totalMarksVal");
    if (totalMarksEl) totalMarksEl.textContent = result.totalMarks;

    const passMarksEl = document.getElementById("passMarksVal");
    if (passMarksEl) passMarksEl.textContent = result.passMarks;

    const pctEl = document.getElementById("percentageVal");
    if (pctEl) pctEl.textContent = `${result.percentage}%`;

    // 2 Big Metrics
    const correctEl = document.getElementById("correct");
    if (correctEl) correctEl.textContent = result.correct;

    const incorrectEl = document.getElementById("incorrect");
    if (incorrectEl) incorrectEl.textContent = result.incorrect;

    // Status Banner
    const banner = document.getElementById("screen12Banner");
    const bannerTitle = document.getElementById("screen12BannerTitle");
    const bannerSubtitle = document.getElementById("screen12BannerSubtitle");

    if (banner && bannerTitle && bannerSubtitle) {
        if (result.passed) {
            banner.className = "screen-12-banner pass";
            bannerTitle.textContent = "RESULT: PASS";
            bannerSubtitle.textContent = result.isCheckpoint
                ? `Great job! You answered ${result.correct} out of ${result.completedCount} correctly.`
                : "Congratulations! You passed the quiz.";
        } else {
            banner.className = "screen-12-banner fail";
            bannerTitle.textContent = result.isCheckpoint ? "RESULT: KEEP GOING" : "RESULT: FAIL";
            bannerSubtitle.textContent = result.isCheckpoint
                ? `You answered ${result.correct} out of ${result.completedCount} correctly. Push forward!`
                : "Keep practicing! You need at least 35% to pass.";
        }
    }

    // Buttons Visibility
    const answersBtn = document.getElementById("answersBtn");
    const continueBtn = document.getElementById("continueQuizBtn");
    const nextLevelBtn = document.getElementById("nextLevelBtn");
    const retryBtn = document.getElementById("retryBtn");

    if (answersBtn) {
        answersBtn.textContent = result.isCheckpoint
            ? `View Answers (1-${result.completedCount})`
            : "View All Answers";
    }

    if (result.isCheckpoint) {
        if (continueBtn) {
            continueBtn.classList.remove("hidden");
            const nextStart = result.completedCount + 1;
            const nextEnd = Math.min(result.completedCount + 10, TOTAL_QUESTIONS);
            continueBtn.textContent = `Continue Quiz (Q${nextStart}-${nextEnd}) →`;
        }
        if (nextLevelBtn) nextLevelBtn.classList.add("hidden");
        if (retryBtn) retryBtn.classList.add("hidden");
    } else {
        if (continueBtn) continueBtn.classList.add("hidden");
        if (result.passed) {
            if (nextLevelBtn) nextLevelBtn.classList.remove("hidden");
            if (retryBtn) retryBtn.classList.add("hidden");
        } else {
            if (nextLevelBtn) nextLevelBtn.classList.add("hidden");
            if (retryBtn) retryBtn.classList.remove("hidden");
        }
    }
}

// Global showResult alias for backwards compatibility
function showResult(result) {
    renderScreen12Result(result);
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

/* =====================================
   LEVEL SELECTION & ALL 12 LANGUAGES
===================================== */

function updateSelectScreenLockState() {
    const normLang = normalizeLanguage(language);
    const progress = JSON.parse(localStorage.getItem("learningPathProgress")) || {};
    const langProgress = progress[normLang] || progress[language] || {};
    const results = langProgress.result || {};

    document.querySelectorAll(".level").forEach(btn => {
        const lvl = normalizeLevel(btn.dataset.level);
        const passed = results[lvl] === "PASS";
        const score = langProgress[lvl];

        if (passed) {
            btn.classList.add("passed");
            btn.setAttribute("title", `Passed with score ${score || 0}%`);
        } else {
            btn.classList.remove("passed");
            btn.removeAttribute("title");
        }
    });
}

function initQuizSelection() {
    const params = new URLSearchParams(window.location.search);
    if (params.has("lang") || params.has("language")) {
        const rawLang = params.get("lang") || params.get("language");
        const normLang = normalizeLanguage(rawLang);
        language = normLang;
        document.querySelectorAll(".language").forEach(btn => {
            if (normalizeLanguage(btn.dataset.language) === normLang) {
                btn.classList.add("selected");
            } else {
                btn.classList.remove("selected");
            }
        });
    }

    if (params.has("level")) {
        const rawLevel = params.get("level");
        const normLevel = normalizeLevel(rawLevel);
        level = normLevel;
        document.querySelectorAll(".level").forEach(btn => {
            if (normalizeLevel(btn.dataset.level) === normLevel) {
                btn.classList.add("selected");
            } else {
                btn.classList.remove("selected");
            }
        });
    }

    updateSelectScreenLockState();
}

// Language Selection Listeners for All 12 Languages
document.querySelectorAll(".language").forEach(btn => {
    btn.addEventListener("click", () => {
        const langCode = normalizeLanguage(btn.dataset.language);
        language = langCode;
        document.querySelectorAll(".language").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        updateSelectScreenLockState();
    });
});

// Level Selection Listeners (Basics to Advanced — 100 Questions Each)
document.querySelectorAll(".level").forEach(btn => {
    btn.addEventListener("click", () => {
        const targetLevel = normalizeLevel(btn.dataset.level);
        level = targetLevel;
        document.querySelectorAll(".level").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
    });
});

document.addEventListener("DOMContentLoaded", initQuizSelection);


// Attach continueQuizBtn handler if not present
const continueQuizBtnEl = document.getElementById("continueQuizBtn");
if (continueQuizBtnEl) {
    continueQuizBtnEl.onclick = () => {
        document.getElementById("resultScreen").classList.add("hidden");
        document.getElementById("answersScreen").classList.add("hidden");
        document.getElementById("quizScreen").classList.remove("hidden");

        currentQuestion = checkpointCompletedCount;
        showQuestion();
    };
}
