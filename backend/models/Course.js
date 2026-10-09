// Course Model
class Course {
    constructor(id, name, description, level = 'Beginner', status = 'Open') {
        this.id = id;
        this.name = name;
        this.description = description;
        this.level = level;
        this.status = status;
    }
}
module.exports = Course;

