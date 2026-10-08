-- ===================================================
-- LearningPath Database Seed Data
-- ===================================================

-- 1. Seed Users
INSERT INTO users (name, email, gender, password, role)
VALUES 
('Mohan', 'mohan@example.com', 'Male', '$2b$10$SampleHash123', 'admin'),
('Ravi', 'ravi@example.com', 'Male', '$2b$10$SampleHash123', 'student'),
('Anil', 'anil@example.com', 'Male', '$2b$10$SampleHash123', 'student'),
('Priya', 'priya@example.com', 'Female', '$2b$10$SampleHash123', 'student')
ON CONFLICT (email) DO NOTHING;

-- 2. Seed Courses (12 Languages)
INSERT INTO courses (name, description, level, status)
VALUES
('C', 'Master C programming from fundamentals to pointers and memory management.', 'Beginner', 'Open'),
('C++', 'Object-oriented programming, Templates, and STL in C++.', 'Beginner', 'Locked'),
('Python', 'Python programming for scripting, data science, and AI.', 'Beginner', 'Locked'),
('TypeScript', 'Typed JavaScript at scale for modern applications.', 'Beginner', 'Locked'),
('JavaScript', 'Dynamic web programming with modern ES6+ JavaScript.', 'Beginner', 'Locked'),
('Java', 'Enterprise Java development and Object Oriented Principles.', 'Beginner', 'Locked'),
('R', 'Data analysis, statistics, and graphics with R language.', 'Beginner', 'Locked'),
('CUDA', 'Parallel computing architecture and GPGPU programming.', 'Beginner', 'Locked'),
('Ruby', 'Dynamic, open source programming language with a focus on simplicity.', 'Beginner', 'Locked'),
('PHP', 'Server-side web application programming.', 'Beginner', 'Locked'),
('HTML', 'HyperText Markup Language for web page structuring.', 'Beginner', 'Locked'),
('CSS', 'Cascading Style Sheets for modern web styling.', 'Beginner', 'Locked')
ON CONFLICT DO NOTHING;

-- 3. Seed Lessons
INSERT INTO lessons (course_id, title, content, video_url, order_no)
VALUES
(1, '1. Introduction to C', 'C is a powerful general-purpose programming language.', 'https://www.youtube.com/embed/KJgsSFOSQv0', 1),
(1, '2. Variables & Declarations', 'Variables store data values in C memory.', 'https://www.youtube.com/embed/KJgsSFOSQv0', 2),
(1, '3. Data Types', 'Primitive data types in C include int, float, char, double.', 'https://www.youtube.com/embed/KJgsSFOSQv0', 3)
ON CONFLICT DO NOTHING;

-- 4. Seed Quizzes
INSERT INTO quizzes (course_id, level, total_questions)
VALUES
(1, 'Beginner', 100),
(1, 'Intermediate', 100),
(1, 'Advanced', 100)
ON CONFLICT DO NOTHING;

-- 5. Seed Questions
INSERT INTO questions (quiz_id, question, option_a, option_b, option_c, option_d, correct_answer)
VALUES
(1, 'Cలో integer variable declare చేయడానికి ఏ keyword ఉపయోగిస్తారు?', 'float', 'int', 'char', 'string', 'int'),
(1, 'C program execution ఎక్కడ నుండి ప్రారంభమవుతుంది?', 'start()', 'init()', 'main()', 'run()', 'main()'),
(1, 'printf() function ఏ header fileలో ఉంటుంది?', 'conio.h', 'math.h', 'stdio.h', 'stdlib.h', 'stdio.h')
ON CONFLICT DO NOTHING;

-- 6. Seed Quiz Results
INSERT INTO quiz_results (user_id, quiz_id, score, correct, incorrect, percentage, result)
VALUES
(1, 1, 72, 72, 28, 72.00, 'PASS'),
(2, 1, 28, 28, 72, 28.00, 'FAIL'),
(3, 1, 100, 100, 0, 100.00, 'PASS')
ON CONFLICT DO NOTHING;

-- 7. Seed Progress
INSERT INTO progress (user_id, course_id, lesson_id, percentage, completed)
VALUES
(1, 1, 1, 72, false),
(3, 1, 1, 100, true)
ON CONFLICT DO NOTHING;

-- 8. Seed Projects
INSERT INTO projects (title, description, language, difficulty, expected_output)
VALUES
('Simple Calculator', 'Take two numbers and an operator (+, -, *, /) and print the result.', 'C', 'Easy', '30'),
('Student Grade Management', 'Calculate student total marks, average, and letter grade.', 'C', 'Medium', 'Average: 84.33 - Grade A'),
('Even or Odd Checker', 'Check if a user input integer is Even or Odd.', 'C', 'Easy', 'Even')
ON CONFLICT DO NOTHING;
