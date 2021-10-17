const Laptop = require("../src/laptop.js");

describe("Property tests", function() {
    test("laptop has a manufacturer", function() {
        // Arrange - setup
        const laptop = new Laptop("Apple", "Macbook Pro", "ios");
        // Act - do the thing
        const manufacturer = laptop.manufacturer;
        // Assert - check it worked
        expect(manufacturer).toBe ("Apple");
    });


});

describe("Behaviour tests", function() {
    test("check if expensive true for Apple", function() {
        const laptop = new Laptop("Apple", "Macbook Pro", "ios");
        const isExpensive = laptop.checkIfExpensive();
        expect(isExpensive).toBe(true);
    })
    test("check if expensive false for Sony", function() {
        const laptop = new Laptop("Sony", "Vaio", "Windows");
        const isExpensive = laptop.checkIfExpensive();
        expect(isExpensive).toBe(false);
    })

    


})