const Employee = require("./Employee");

class Intern extends Employee{

    constructor (id, email, name, school) {

        super (id, email, name); //this function repeats the this. class => constructor function from Employee

        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;