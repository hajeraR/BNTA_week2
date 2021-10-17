const Student = function(studentName, studentAGE) {
    this.name = studentName;
    this.age = studentAGE;
    this.laptop = null;

//     this.greet = function() {
//         console.log("hello, my name is " + this.name + "!");
//     }

//     this.brithday = function() {
//         this.age += 1;
//     }
 }

Student.prototype.greet = function() {
    console.log("hello, my name is " + this.name + "!");
}

Student.prototype.birthday = function() {
    this.age += 1;
}

Student.prototype.buyLaptop = function(newLaptop) {
    this.laptop = newLaptop;
}

Student.prototype.checkLaptopExpense = function() {
    return this.laptop.checkIfExpensive();
}

module.exports = Student;