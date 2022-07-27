class Employee {

    constructor (id, email, name) {
        this.id=id;
        this.email=email;
        this.name=name;
    }

    // each function based on the desc

    getName() {
        return this.name; //add some condition later!!
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;