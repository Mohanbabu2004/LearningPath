// Question Model
class Question {
    constructor(id, quiz_id, question, option_a, option_b, option_c, option_d, correct_answer) {
        this.id = id;
        this.quiz_id = quiz_id;
        this.question = question;
        this.option_a = option_a;
        this.option_b = option_b;
        this.option_c = option_c;
        this.option_d = option_d;
        this.correct_answer = correct_answer;
    }
}
module.exports = Question;

