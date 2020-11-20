"use strict";
var car;
function createCar() {
    var plate = document.getElementById("plate").value;
    var color = document.getElementById("color").value;
    var brand = document.getElementById("brand").value;
    car = new Car(plate, color, brand);
    //  (<HTMLInputElement>document.getElementById("carInfo")).innerHTML = `
    //          <p class="ml-3 mt-5"> CAR: </p>
    //          <p class="ml-5">               
    //             PLATE: [${car.plate}] <br>
    //             COLOR: [${car.color}]      <br>
    //             BRAND: [${car.brand}]      <br>
    //             WHEELS: ${JSON.stringify(car.wheels)}
    //          </p>`;
    if (checkCarPlate(car) == false) {
        window.alert("La matricula ha de tenir 4 numeros i 3 lletres!!!");
    }
    else { //continuar seguent formulari rodes
        document.getElementById("formCar").style.display = "none";
        document.getElementById("formWheels").removeAttribute("hidden");
    }
}
function createWheels() {
    var wbrand = document.getElementsByName("wbrand");
    var wdiameter = document.getElementsByName("wdiameter");
    // window.alert((wbrand[0] as HTMLInputElement).value);
    var wbrand1 = wbrand[0].value;
    var wdiameter1 = +wdiameter[0].value;
    var wbrand2 = wbrand[1].value;
    var wdiameter2 = +wdiameter[1].value;
    var wbrand3 = wbrand[2].value;
    var wdiameter3 = +wdiameter[2].value;
    var wbrand4 = wbrand[3].value;
    var wdiameter4 = +wdiameter[3].value;
    // var wbrand1:string = (<HTMLInputElement>document.getElementById("wbrand1")).value;
    // var wdiameter1: number = +(<HTMLInputElement>document.getElementById("wdiameter1")).value;
    // var wbrand2:string = (<HTMLInputElement>document.getElementById("wbrand2")).value;
    // var wdiameter2: number = +(<HTMLInputElement>document.getElementById("wdiameter2")).value;
    // var wbrand3:string = (<HTMLInputElement>document.getElementById("wbrand3")).value;
    // var wdiameter3: number = +(<HTMLInputElement>document.getElementById("wdiameter3")).value;
    // var wbrand4:string = (<HTMLInputElement>document.getElementById("wbrand4")).value;
    // var wdiameter4: number = +(<HTMLInputElement>document.getElementById("wdiameter4")).value;
    var b1 = (wdiameter1 >= 0.4 && wdiameter1 <= 2);
    var b2 = (wdiameter2 >= 0.4 && wdiameter2 <= 2);
    var b3 = (wdiameter3 >= 0.4 && wdiameter3 <= 2);
    var b4 = (wdiameter4 >= 0.4 && wdiameter4 <= 2);
    var message = "ha de tenir un diametre entre 0.4 i 2!!!";
    if (!b1)
        window.alert("La roda 1 " + message);
    if (!b2)
        window.alert("La roda 2 " + message);
    if (!b3)
        window.alert("La roda 3 " + message);
    if (!b4)
        window.alert("La roda 4 " + message);
    if (b1 && b2 && b3 && b4) {
        car.removeWheels();
        car.addWheel(new Wheel(wdiameter1, wbrand1));
        car.addWheel(new Wheel(wdiameter2, wbrand2));
        car.addWheel(new Wheel(wdiameter3, wbrand3));
        car.addWheel(new Wheel(wdiameter4, wbrand4));
        showCarAndWheels();
    }
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
function checkCarPlate(car) {
    var plate = car.plate;
    var numLletres = 0;
    var numNumeros = 0;
    for (var i = 0; i < plate.length; i++) {
        var c = plate[i];
        if (esNumero(c))
            numNumeros++;
        if (esLletra(c))
            numLletres++;
    }
    if (numNumeros == 4 && numLletres == 3) {
        return true;
    }
    else {
        return false;
    }
}
function esNumero(c) {
    var b = false;
    b = ("0123456789".indexOf(c)) >= 0;
    return b;
}
function esLletra(c) {
    var b = false;
    b = ("abcdefghijklmnopqrstuvwxyz".indexOf(c)) >= 0;
    return b;
}
