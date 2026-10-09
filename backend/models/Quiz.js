// Quiz Model
class Quiz {
    constructor(id, course_id, level, total_questions = 100) {
        this.id = id;
        this.course_id = course_id;
        this.level = level;
        this.total_questions = total_questions;
    }
}
module.exports = Quiz;

