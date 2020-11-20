"use strict";
var car;
function createCar() {
    var plate = document.getElementById("plate").value;
    var color = document.getElementById("color").value;
    var brand = document.getElementById("brand").value;
    car = new Car(plate, color, brand);
    document.getElementById("carInfo").innerHTML = "\n         \n            <p class=\"ml-3 mt-5\"> CAR: </p>\n            <p class=\"ml-5\">               \n               PLATE: [" + car.plate + "] <br>\n               COLOR: [" + car.color + "]      <br>\n               BRAND: [" + car.brand + "]      <br>\n               WHEELS: " + JSON.stringify(car.wheels) + "\n            </p>";
    document.getElementById("formCar").style.display = "none";
    document.getElementById("formWheels").removeAttribute("hidden");
}
function createWheels() {
    var wbrand1 = document.getElementById("wbrand1").value;
    var wdiameter1 = +document.getElementById("wdiameter1").value;
    var wbrand2 = document.getElementById("wbrand2").value;
    var wdiameter2 = +document.getElementById("wdiameter2").value;
    var wbrand3 = document.getElementById("wbrand3").value;
    var wdiameter3 = +document.getElementById("wdiameter3").value;
    var wbrand4 = document.getElementById("wbrand4").value;
    var wdiameter4 = +document.getElementById("wdiameter4").value;
    car.addWheel(new Wheel(wdiameter1, wbrand1));
    car.addWheel(new Wheel(wdiameter2, wbrand2));
    car.addWheel(new Wheel(wdiameter3, wbrand3));
    car.addWheel(new Wheel(wdiameter4, wbrand4));
    showCarAndWheels();
}
function showCarAndWheels() {
    document.getElementById("allInfo").removeAttribute("hidden");
    document.getElementById("infobrand").innerHTML = car.brand;
    document.getElementById("infoplate").innerHTML = car.plate;
    document.getElementById("infocolor").innerHTML = car.color;
    var wheels = car.wheels;
    document.getElementById("infob1").innerHTML = wheels[0].brand;
    document.getElementById("infod1").innerHTML = wheels[0].diameter.toString();
    document.getElementById("infob2").innerHTML = wheels[1].brand;
    document.getElementById("infod2").innerHTML = wheels[1].diameter.toString();
    document.getElementById("infob3").innerHTML = wheels[2].brand;
    document.getElementById("infod3").innerHTML = wheels[2].diameter.toString();
    document.getElementById("infob4").innerHTML = wheels[3].brand;
    document.getElementById("infod4").innerHTML = wheels[3].diameter.toString();
}
