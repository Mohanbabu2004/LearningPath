-- ===================================================
-- LearningPath Seed Data
-- ===================================================

-- Seed Users
INSERT INTO users (name, email, gender, password_hash, role)
VALUES 
('Mohan', 'mohan@mylearningpath.com', 'Male', '$2b$10$SampleHash123', 'admin'),
('Ravi', 'ravi@mylearningpath.com', 'Male', '$2b$10$SampleHash123', 'student'),
('Anitha', 'anitha@mylearningpath.com', 'Female', '$2b$10$SampleHash123', 'student')
ON CONFLICT (email) DO NOTHING;

-- Seed Courses
INSERT INTO courses (slug, title, description, category)
VALUES
('c', 'C Programming', 'Master strong computer fundamentals with C language.', 'Programming'),
('cpp', 'C++ Programming', 'Object Oriented Programming and Data Structures in C++.', 'Programming'),
('python', 'Python Programming', 'Learn Python from basics to Automation and AI.', 'Programming'),
('javascript', 'JavaScript', 'Modern Web Development with JavaScript.', 'Web')
ON CONFLICT (slug) DO NOTHING;

-- Seed Quizzes
INSERT INTO quizzes (language, level, total_questions, pass_marks)
VALUES
('C', 'Beginner', 100, 35),
('C', 'Intermediate', 100, 35),
('C', 'Advanced', 100, 35)
ON CONFLICT DO NOTHING;

