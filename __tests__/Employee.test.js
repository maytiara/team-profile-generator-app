const Employee = require("../src/employees/Employee");

describe ("Employee Test", () => {

    test("getName() will return the name property", () => {

        //Arrange -- prepare the env
        const name = "Name";
        const nameTest = new Employee (1, 'karen@anonymous.com', name);

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
    });

})

// add the additional test per js....