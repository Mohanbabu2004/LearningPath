-- ===================================================
-- LearningPath Database Schema
-- Compatible with PostgreSQL & MySQL / SQLite
-- ===================================================

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    gender VARCHAR(20) DEFAULT 'Male',
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Courses Table
CREATE TABLE IF NOT EXISTS courses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    level VARCHAR(50) DEFAULT 'Beginner',
    status VARCHAR(20) DEFAULT 'Open'
);

-- 3. Lessons Table
CREATE TABLE IF NOT EXISTS lessons (
    id SERIAL PRIMARY KEY,
    course_id INT REFERENCES courses(id) ON DELETE CASCADE,
    title VARCHAR(150) NOT NULL,
    content TEXT,
    video_url VARCHAR(255),
    order_no INT DEFAULT 1
);

-- 4. Progress Table
CREATE TABLE IF NOT EXISTS progress (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    course_id INT REFERENCES courses(id) ON DELETE CASCADE,
    lesson_id INT REFERENCES lessons(id) ON DELETE CASCADE,
    percentage INT DEFAULT 0,
    completed BOOLEAN DEFAULT FALSE
);

-- 5. Quizzes Table
CREATE TABLE IF NOT EXISTS quizzes (
    id SERIAL PRIMARY KEY,
    course_id INT REFERENCES courses(id) ON DELETE CASCADE,
    level VARCHAR(50) NOT NULL,
    total_questions INT DEFAULT 100
);

-- 6. Questions Table
CREATE TABLE IF NOT EXISTS questions (
    id SERIAL PRIMARY KEY,
    quiz_id INT REFERENCES quizzes(id) ON DELETE CASCADE,
    question TEXT NOT NULL,
    option_a VARCHAR(255) NOT NULL,
    option_b VARCHAR(255) NOT NULL,
    option_c VARCHAR(255) NOT NULL,
    option_d VARCHAR(255) NOT NULL,
    correct_answer VARCHAR(255) NOT NULL
);

-- 7. Quiz Results Table
CREATE TABLE IF NOT EXISTS quiz_results (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    quiz_id INT REFERENCES quizzes(id) ON DELETE CASCADE,
    score INT NOT NULL,
    correct INT NOT NULL,
    incorrect INT NOT NULL,
    percentage NUMERIC(5,2) NOT NULL,
    result VARCHAR(20) NOT NULL -- PASS or FAIL
);

-- 8. Projects Table
CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    language VARCHAR(50) NOT NULL,
    difficulty VARCHAR(20) DEFAULT 'Medium',
    expected_output TEXT
);
