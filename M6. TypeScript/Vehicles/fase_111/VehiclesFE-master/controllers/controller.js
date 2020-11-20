"use strict";
var car = null;
// function createCar(plate:string,brand:string,color:string){
function createCar() {
    var plate = document.getElementById("plate").value;
    var color = document.getElementById("color").value;
    var brand = document.getElementById("brand").value;
    car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    // document.body.innerText="CAR: PLATE: " + car.plate 
    // + " COLOR: " +car.color + " BRAND: " + brand 
    // + " WHEELS: " + JSON.stringify(car.wheels);
    document.getElementById("carInfo").innerHTML = "\n         \n            <p class=\"ml-3 mt-5\"> CAR: </p>\n            <p class=\"ml-5\">               \n               PLATE: [" + car.plate + "] <br>\n               COLOR: [" + car.color + "]      <br>\n               BRAND: [" + car.brand + "]      <br>\n               WHEELS: " + JSON.stringify(car.wheels) + "\n            </p>";
}
