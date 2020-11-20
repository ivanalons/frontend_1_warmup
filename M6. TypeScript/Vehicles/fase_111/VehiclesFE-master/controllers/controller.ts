let car = null;

// function createCar(plate:string,brand:string,color:string){
function createCar(){

    var plate:string = (<HTMLInputElement>document.getElementById("plate")).value;
    var color:string = (<HTMLInputElement>document.getElementById("color")).value;
    var brand:string = (<HTMLInputElement>document.getElementById("brand")).value;

    car=new Car(plate,color,brand);
    car.addWheel(new Wheel(2,"SEAT"));

    // document.body.innerText="CAR: PLATE: " + car.plate 
    // + " COLOR: " +car.color + " BRAND: " + brand 
    // + " WHEELS: " + JSON.stringify(car.wheels);
    
    (<HTMLInputElement>document.getElementById("carInfo")).innerHTML = `
         
            <p class="ml-3 mt-5"> CAR: </p>
            <p class="ml-5">               
               PLATE: [${car.plate}] <br>
               COLOR: [${car.color}]      <br>
               BRAND: [${car.brand}]      <br>
               WHEELS: ${JSON.stringify(car.wheels)}
            </p>`;
}

