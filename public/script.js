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
  const message = document.getElementById("formMessage");

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
      rules[key].classList.toggle("valid", result[key]);
    });

    return Object.values(result).every(Boolean);
  }

  password.addEventListener("input", updatePasswordRules);

  confirmPassword.addEventListener("input", function () {
    if (message.textContent.includes("match")) {
      message.textContent = "";
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    message.textContent = "";

    if (fullName.value.trim().length < 3) {
      message.textContent = "Please enter your full name (at least 3 characters).";
      fullName.focus();
      return;
    }

    if (!email.validity.valid || !email.value.trim()) {
      message.textContent = "Please enter a valid email address.";
      email.focus();
      return;
    }

    if (!updatePasswordRules()) {
      message.textContent =
        "Please satisfy all four password requirements.";
      password.focus();
      return;
    }

    if (password.value !== confirmPassword.value) {
      message.textContent = "Passwords do not match. Please try again.";
      confirmPassword.focus();
      return;
    }

    message.style.color = "#00e6a0";
    message.textContent =
      "Form validated successfully! Connect the backend to create your account.";
  });
});