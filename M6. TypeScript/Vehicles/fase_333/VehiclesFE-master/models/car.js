"use strict";
var Car = /** @class */ (function () {
    function Car(plate, color, brand) {
        this.wheels = new Array();
        this.plate = plate;
        this.color = color;
        this.brand = brand;
    }
    Car.prototype.addWheel = function (wheel) {
        this.wheels.push(wheel);
    };
    Car.prototype.removeWheels = function () {
        while (this.wheels.length > 0) {
            this.wheels.pop();
        }
    };
    return Car;
}());
