let car : Car;

function createCar(){

    var plate:string = (<HTMLInputElement>document.getElementById("plate")).value;
    var color:string = (<HTMLInputElement>document.getElementById("color")).value;
    var brand:string = (<HTMLInputElement>document.getElementById("brand")).value;

    car=new Car(plate,color,brand);
    
    (<HTMLInputElement>document.getElementById("carInfo")).innerHTML = `
         
            <p class="ml-3 mt-5"> CAR: </p>
            <p class="ml-5">               
               PLATE: [${car.plate}] <br>
               COLOR: [${car.color}]      <br>
               BRAND: [${car.brand}]      <br>
               WHEELS: ${JSON.stringify(car.wheels)}
            </p>`;
   
    document.getElementById("formCar")!.style.display = "none";
    document.getElementById("formWheels")!.removeAttribute("hidden");

}

function createWheels(){
   
   var wbrand1:string = (<HTMLInputElement>document.getElementById("wbrand1")).value;
   var wdiameter1: number = +(<HTMLInputElement>document.getElementById("wdiameter1")).value;
   var wbrand2:string = (<HTMLInputElement>document.getElementById("wbrand2")).value;
   var wdiameter2: number = +(<HTMLInputElement>document.getElementById("wdiameter2")).value;
   var wbrand3:string = (<HTMLInputElement>document.getElementById("wbrand3")).value;
   var wdiameter3: number = +(<HTMLInputElement>document.getElementById("wdiameter3")).value;
   var wbrand4:string = (<HTMLInputElement>document.getElementById("wbrand4")).value;
   var wdiameter4: number = +(<HTMLInputElement>document.getElementById("wdiameter4")).value;

   car.addWheel(new Wheel(wdiameter1,wbrand1));
   car.addWheel(new Wheel(wdiameter2,wbrand2));
   car.addWheel(new Wheel(wdiameter3,wbrand3));
   car.addWheel(new Wheel(wdiameter4,wbrand4));

   showCarAndWheels();
}

function showCarAndWheels(){

   document.getElementById("allInfo")!.removeAttribute("hidden");

   (<HTMLInputElement>document.getElementById("infobrand")).innerHTML = car.brand;
   (<HTMLInputElement>document.getElementById("infoplate")).innerHTML = car.plate;
   (<HTMLInputElement>document.getElementById("infocolor")).innerHTML = car.color;
   
   var wheels : Wheel[] = car.wheels;   

   (<HTMLInputElement>document.getElementById("infob1")).innerHTML = wheels[0].brand;
   (<HTMLInputElement>document.getElementById("infod1")).innerHTML = wheels[0].diameter.toString();
   (<HTMLInputElement>document.getElementById("infob2")).innerHTML = wheels[1].brand;
   (<HTMLInputElement>document.getElementById("infod2")).innerHTML = wheels[1].diameter.toString();
   (<HTMLInputElement>document.getElementById("infob3")).innerHTML = wheels[2].brand;
   (<HTMLInputElement>document.getElementById("infod3")).innerHTML = wheels[2].diameter.toString();
   (<HTMLInputElement>document.getElementById("infob4")).innerHTML = wheels[3].brand;
   (<HTMLInputElement>document.getElementById("infod4")).innerHTML = wheels[3].diameter.toString();
}

