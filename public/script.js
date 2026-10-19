const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

function toggleMenu() {
  if (menuToggle && navLinks) {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  }
}

async function checkBackend() {
  try {
    const response = await fetch("/api/status");
    const data = await response.json();
    document.body.dataset.backend = data.success ? "online" : "offline";
  } catch (error) {
    document.body.dataset.backend = "offline";
  }
}

checkBackend();


/* ===== LearningPath Create Account & Form Logic ===== */

function initSignup() {
  const form = document.getElementById("signupForm");

  // Show/hide password buttons
  document.querySelectorAll(".show-password").forEach(function (button) {
    button.addEventListener("click", function () {
      const input = document.getElementById(button.dataset.target);
      if (!input) return;

      const showing = input.type === "text";
      input.type = showing ? "password" : "text";
      button.setAttribute(
        "aria-label",
        showing ? "Show password" : "Hide password"
      );
    });
  });

  // Stop if this is a page without the signup form
  if (!form) return;

  const fullName = document.getElementById("fullName") || document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const genderSelect = document.getElementById("gender");
  const genderDisplay = document.getElementById("genderDisplay");
  const genderCard = document.getElementById("genderCard");
  const message = document.getElementById("formMessage") || document.getElementById("message");

  if (genderSelect && genderDisplay) {
    genderSelect.addEventListener("change", function () {
      genderDisplay.textContent = genderSelect.value;
    });
    genderSelect.addEventListener("input", function () {
      genderDisplay.textContent = genderSelect.value;
    });
  }

  if (genderCard && genderSelect) {
    genderCard.addEventListener("click", function (e) {
      if (e.target !== genderSelect) {
        if (typeof genderSelect.showPicker === "function") {
          try {
            genderSelect.showPicker();
          } catch (err) {}
        }
      }
    });
  }

  const rules = {
    length: document.getElementById("ruleLength"),
    number: document.getElementById("ruleNumber"),
    special: document.getElementById("ruleSpecial"),
    upper: document.getElementById("ruleUpper")
  };

  function checkPasswordRules(value) {
    const val = value || "";
    return {
      length: val.length >= 8,
      number: /[0-9]/.test(val),
      special: /[^A-Za-z0-9\s]/.test(val),
      upper: /[A-Z]/.test(val)
    };
  }

  function updatePasswordRules() {
    if (!password) return true;
    const result = checkPasswordRules(password.value);

    Object.keys(result).forEach(function (key) {
      if (rules[key]) {
        rules[key].classList.toggle("valid", result[key]);
        rules[key].classList.toggle("invalid", !result[key]);
      }
    });

    return Object.values(result).every(Boolean);
  }

  if (password) {
    password.addEventListener("input", updatePasswordRules);
    updatePasswordRules();
  }

  if (confirmPassword) {
    confirmPassword.addEventListener("input", function () {
      if (message && message.textContent && message.textContent.includes("match")) {
        message.textContent = "";
      }
    });
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (message) {
      message.textContent = "";
      message.style.display = "block";
    }

    const nameVal = fullName ? fullName.value.trim() : "";
    const emailVal = email ? email.value.trim().toLowerCase() : "";
    const passVal = password ? password.value : "";
    const confirmVal = confirmPassword ? confirmPassword.value : "";

    if (nameVal.length < 2) {
      if (message) {
        message.style.color = "#ef4444";
        message.textContent = "Please enter your full name (at least 2 characters).";
      }
      if (fullName) fullName.focus();
      return;
    }

    if (!emailVal || !emailVal.includes("@") || !emailVal.includes(".")) {
      if (message) {
        message.style.color = "#ef4444";
        message.textContent = "Please enter a valid email address.";
      }
      if (email) email.focus();
      return;
    }

    if (passVal.length < 6) {
      if (message) {
        message.style.color = "#ef4444";
        message.textContent = "Password must be at least 6 characters long.";
      }
      if (password) password.focus();
      return;
    }

    if (passVal !== confirmVal) {
      if (message) {
        message.style.color = "#ef4444";
        message.textContent = "Passwords do not match. Please try again.";
      }
      if (confirmPassword) confirmPassword.focus();
      return;
    }

    const genderEl = document.getElementById("gender");
    const selectedGender = genderEl ? genderEl.value : "Male";

    const userData = {
      id: "user_" + Date.now(),
      name: nameVal,
      email: emailVal,
      gender: selectedGender,
      password: passVal,
      role: "student",
      joinedDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      quizScore: "0/100",
      status: "Active"
    };

    // Save or update user in localStorage (Purging dummy mock accounts)
    const dummyEmailsToPurge = ["ravi@example.com", "ananya@example.com", "test@example.com", "demo@example.com"];
    let localUsers = [];
    try {
      localUsers = JSON.parse(localStorage.getItem('learningPathRegisteredUsers') || '[]');
    } catch (e) {
      localUsers = [];
    }

    localUsers = localUsers.filter(u => {
      if (!u || !u.email) return false;
      const norm = (u.email || '').trim().toLowerCase();
      if (dummyEmailsToPurge.includes(norm)) return false;
      if (u.name === 'R.Mohan' || u.name === 'ramesh' || (u.name === 'mohan' && norm !== 'mohan@example.com')) return false;
      return true;
    });

    const normEmail = (userData.email || '').trim().toLowerCase();
    const existingIndex = localUsers.findIndex(u => (u.email || '').trim().toLowerCase() === normEmail);
    if (existingIndex >= 0) {
      localUsers[existingIndex] = { ...localUsers[existingIndex], ...userData };
    } else {
      localUsers.push(userData);
    }

    localStorage.setItem('learningPathRegisteredUsers', JSON.stringify(localUsers));
    localStorage.setItem('lastCreatedUser', JSON.stringify({ name: userData.name, email: userData.email, gender: userData.gender }));
    localStorage.setItem('learningUser', JSON.stringify({
      id: userData.id,
      name: userData.name,
      email: userData.email,
      gender: userData.gender,
      role: userData.role,
      coursesCount: 0,
      completedCount: 0,
      quizScore: "0/100",
      learningProgress: "0%"
    }));

    // Send to backend API
    try {
      fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      }).catch(err => console.warn('Backend register non-blocking:', err));
    } catch (err) {
      console.warn('Backend API error:', err);
    }

    if (message) {
      message.style.color = "#10b981";
      message.textContent = "Account created successfully! Redirecting...";
    }

    // Determine target redirect path based on current folder
    const targetUrl = window.location.pathname.includes('/pages/auth/')
      ? 'account-created.html'
      : (window.location.pathname.includes('/pages/') ? '../account-success.html' : 'account-success.html');

    setTimeout(() => {
      window.location.href = targetUrl;
    }, 400);
  });
  const bottomBackBtn = document.getElementById("bottomBackBtn");
  if (bottomBackBtn) {
    bottomBackBtn.addEventListener("click", function () {
      if (window.history.length > 1 && document.referrer) {
        window.history.back();
      } else {
        const homeUrl = window.location.pathname.includes('/pages/') ? '../index.html' : 'index.html';
        window.location.href = homeUrl;
      }
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSignup);
} else {
  initSignup();
}