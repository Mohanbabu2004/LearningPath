// User Model
class User {
    constructor(id, name, email, gender, password, role = 'student') {
        this.id = id;
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.password = password;
        this.role = role;
        this.created_at = new Date();
    }
}
module.exports = User;
