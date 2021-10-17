const Laptop = function(laptopManufacturer, laptopModel, laptopOperatingSystem) {
    this.manufacturer = laptopManufacturer;
    this.model = laptopModel;
    this.operatingSystem = laptopOperatingSystem;
}


Laptop.prototype.install = function(program) {
    console.log(this.model + " installed: " + program);
}

Laptop.prototype.checkIfExpensive = function(){
    if (this.manufacturer === "Apple") {
        return true;
    }
    else {
        return false;
    }
}

module.exports = Laptop;