const Employee = require("./Employee");

class Manager extends Employee{

    constructor (id, email, name, officeNumber) {

        super (id, email, name); //this function repeats the this. class => constructor function from Employee

        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;