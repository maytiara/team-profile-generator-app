const Employee = require("../src/employees/Employee");

describe ("Employee Test", () => {

    test("getName() will return the name property", () => {

        //Arrange -- prepare the env
        const name = "Name";
        const nameTest = new Employee (1, 'karen', name);

        //act
        const result = nameTest.getName();

        //assert
        expect(result).toStrictEqual(name);
    })

    test("getId() will return the id property", () => {

        //Arrange -- prepare the env
        const id = "89556";
        const idTest = new Employee (1, '895656', id);

        //act
        idTest.getId('test Id');

        //assert
        expect(id).toBe(id); //toBe works! as it says it uses === to check strict equality
    })

    test("getEmail() will return the email property", () => {

        //Arrange -- prepare the env
        const email = "karen@dot.com";
        const emailTest = new Employee (1, 'karen@dot.com', email);

        //act
        emailTest.getEmail('test Email');

        //assert
        expect(email).toBe(email); //toBe works! as it says it uses === to check strict equality
    })

    test("getRole() will return the role property", () => {

        //Arrange -- prepare the env
        const role = "Founder";
        const roleTest = new Employee (1, 'Founder', role);

        //act
        roleTest.getEmail('test Role');

        //assert
        expect(role).toBe(role); //toBe works! as it says it uses === to check strict equality
    });

})