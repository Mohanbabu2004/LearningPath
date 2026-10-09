// Progress Model
class Progress {
    constructor(id, user_id, course_id, lesson_id, percentage = 0, completed = false) {
        this.id = id;
        this.user_id = user_id;
        this.course_id = course_id;
        this.lesson_id = lesson_id;
        this.percentage = percentage;
        this.completed = completed;
    }
}
module.exports = Progress;

