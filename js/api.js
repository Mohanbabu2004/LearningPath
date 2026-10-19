// Client-Side API Utility Helper for LearningPath
const API_BASE = '/api';

const api = {
  // Auth
  register: (data) => fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(r => r.json()),

  login: (data) => fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(r => r.json()),

  logout: () => fetch(`${API_BASE}/auth/logout`, { method: 'POST' }).then(r => r.json()),

  // Courses
  getCourses: () => fetch(`${API_BASE}/courses`).then(r => r.json()),
  getCourse: (id) => fetch(`${API_BASE}/courses/${id}`).then(r => r.json()),

  // Progress
  getProgress: (userId) => fetch(`${API_BASE}/progress/${userId}`).then(r => r.json()),
  updateProgress: (userId, data) => fetch(`${API_BASE}/progress/${userId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(r => r.json()),

  // Quiz
  getQuestions: (lang = 'C', lvl = 'Beginner') => fetch(`${API_BASE}/quiz/questions?language=${lang}&level=${lvl}`).then(r => r.json()),
  submitQuiz: (data) => fetch(`${API_BASE}/quiz/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(r => r.json()),
  getQuizResult: (id) => fetch(`${API_BASE}/quiz/result/${id}`).then(r => r.json()),

  // Projects
  getProjects: () => fetch(`${API_BASE}/projects`).then(r => r.json()),
  submitProject: (data) => fetch(`${API_BASE}/projects/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(r => r.json()),

  // Admin
  getAdminDashboard: () => fetch(`${API_BASE}/admin/dashboard`).then(r => r.json()),
  getAdminUsers: () => fetch(`${API_BASE}/admin/users`).then(r => r.json()),
  getAdminAnalytics: () => fetch(`${API_BASE}/admin/analytics`).then(r => r.json())
};

window.LearningPathAPI = api;
