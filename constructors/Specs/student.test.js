
const Laptop = require("../src/laptop.js");
const Student = require("../src/student.js");

test("should start without laptop", function() {
    const student = new Student("Alice", 23);
    const hasLaptop = student.laptop;
    expect(hasLaptop).toBeNull();
});

test("can add laptop to student", function() {
    const student = new Student("Alice", 23);
    const purchaseLaptop = new Laptop("Dell", "Thingy", "Windows");
    student.buyLaptop (purchaseLaptop);
    expect(student.laptop).toBe(purchaseLaptop);
});

test("can find out if laptop is expensive", function(){
    const student = new Student("Alice", 23);
    const purchaseLaptop = new Laptop("Dell", "Thingy", "Windows");
    student.buyLaptop (purchaseLaptop);

    const isLaptopExpensive = student.checkLaptopExpense();

    expect(isLaptopExpensive).toBe(false);
})