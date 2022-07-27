const Employee = require("../src/employees/Employee");

describe ("Employee Test", () => {

    test("getName() will return the name property", () => {

        //Arrange -- prepare the env
        const name = "Karen";

        const dummy = new Employee (1, 'karen@anonymous.com', name);

        //act
        const result = dummy.getName();

        //assert
        expect(result).toStrictEqual(name);
    });

})

// add the additional test per js....