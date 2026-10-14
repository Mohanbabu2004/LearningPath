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


/* ===== LearningPath Create Account ===== */

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");

  // Home page navigation menu
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Show/hide password
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

  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const genderSelect = document.getElementById("gender");
  const genderDisplay = document.getElementById("genderDisplay");
  const genderCard = document.getElementById("genderCard");

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
    return {
      length: value.length >= 8,
      number: /[0-9]/.test(value),
      special: /[^A-Za-z0-9\s]/.test(value),
      upper: /[A-Z]/.test(value)
    };
  }

    function updatePasswordRules() {
      const result = checkPasswordRules(password.value);

      Object.keys(result).forEach(function (key) {
        if (rules[key]) {
          rules[key].classList.toggle("valid", result[key]);
          rules[key].classList.toggle("invalid", !result[key]);
        }
      });

      return Object.values(result).every(Boolean);
    }

    password.addEventListener("input", updatePasswordRules);

    confirmPassword.addEventListener("input", function () {
      if (message.textContent.includes("match")) {
        message.textContent = "";
      }
    });

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      message.textContent = "";

      if (fullName.value.trim().length < 3) {
        message.style.color = "#ef4444";
        message.textContent = "Please enter your full name (at least 3 characters).";
        fullName.focus();
        return;
      }

      if (!email.validity.valid || !email.value.trim()) {
        message.style.color = "#ef4444";
        message.textContent = "Please enter a valid email address.";
        email.focus();
        return;
      }

      if (!updatePasswordRules()) {
        message.style.color = "#ef4444";
        message.textContent = "Please satisfy all four password requirements.";
        password.focus();
        return;
      }

      if (password.value !== confirmPassword.value) {
        message.style.color = "#ef4444";
        message.textContent = "Passwords do not match. Please try again.";
        confirmPassword.focus();
        return;
      }

      const genderEl = document.getElementById("gender");
      const selectedGender = genderEl ? genderEl.value : "Male";

      const userData = {
        id: "user_" + Date.now(),
        name: fullName.value.trim(),
        email: email.value.trim().toLowerCase(),
        gender: selectedGender,
        password: password.value,
        role: "student",
        joinedDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        quizScore: "0/100",
        status: "Active"
      };

      // Check existing accounts in localStorage
      let localUsers = [];
      try {
        localUsers = JSON.parse(localStorage.getItem('learningPathRegisteredUsers') || '[]');
      } catch (e) {
        localUsers = [];
      }

      const duplicate = localUsers.find(u => u.email === userData.email);
      if (duplicate) {
        message.style.color = "#ef4444";
        message.innerHTML = `An account with this email already exists! <a href="login.html" style="color:#1d4ed8; font-weight:bold; text-decoration:underline;">Please log in →</a>`;
        return;
      }

      localUsers.push(userData);
      localStorage.setItem('learningPathRegisteredUsers', JSON.stringify(localUsers));
      localStorage.setItem('lastCreatedUser', JSON.stringify({ name: userData.name, email: userData.email, gender: userData.gender }));

      // Send to backend API
      try {
        await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData)
        });
      } catch (err) {
        console.warn('Backend register offline/error:', err);
      }

      message.style.color = "#10b981";
      message.textContent = "Account created successfully! Redirecting...";

      setTimeout(() => {
        window.location.href = "account-success.html";
      }, 500);
    });
});