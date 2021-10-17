const {sum} = require("./calculator");

test ("2+2 should equal 4", function(){
    // Arrange - do any setup required
    // Act - do thing you want to test
    const result = sum (2,2);
    // Assert - make sure it happened crrectly
    expect(result).toBe(4);
} );

test("2 + 2 should be greater than 3", function(){
    const result = sum (2, 2);
    expect(result).toBeGreaterThan(3);
});

test("0.1 + 0.3 should be 0.4", function(){
    const result = sum(0.1,0.3);
    expect(result).toBeCloseTo(0.4);
});

test("arrays are the same", function(){
    // Arrange
    const shopping1 = ["milk", "eggs", "bread"];
    const shopping2 = ["milk", "eggs", "bread"];
    // Act
    // Assert
    expect(shopping1).toEqual(shopping2);
});

test("2 + 2 should not be 5", function(){
    const result = sum(2,2);
    expect(result).not.toBe(5);
});