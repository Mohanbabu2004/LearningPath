// Project Model
class Project {
    constructor(id, title, description, language, difficulty = 'Medium', expected_output = '') {
        this.id = id;
        this.title = title;
        this.description = description;
        this.language = language;
        this.difficulty = difficulty;
        this.expected_output = expected_output;
    }
}
module.exports = Project;
