let car : Car;

function createCar(){

    var plate:string = (<HTMLInputElement>document.getElementById("plate")).value;
    var color:string = (<HTMLInputElement>document.getElementById("color")).value;
    var brand:string = (<HTMLInputElement>document.getElementById("brand")).value;

    car=new Car(plate,color,brand);
    
   //  (<HTMLInputElement>document.getElementById("carInfo")).innerHTML = `
         
   //          <p class="ml-3 mt-5"> CAR: </p>
   //          <p class="ml-5">               
   //             PLATE: [${car.plate}] <br>
   //             COLOR: [${car.color}]      <br>
   //             BRAND: [${car.brand}]      <br>
   //             WHEELS: ${JSON.stringify(car.wheels)}
   //          </p>`;
   
   if(checkCarPlate(car)==false){
      window.alert("La matricula ha de tenir 4 numeros i 3 lletres!!!");
   }else{ //continuar seguent formulari rodes
      document.getElementById("formCar")!.style.display = "none";
      document.getElementById("formWheels")!.removeAttribute("hidden");
   }
}

function createWheels(){
   
   var wbrand = document.getElementsByName("wbrand");
   var wdiameter = document.getElementsByName("wdiameter");

   // window.alert((wbrand[0] as HTMLInputElement).value);
   var wbrand1:string = (wbrand[0] as HTMLInputElement).value;
   var wdiameter1: number = +(wdiameter[0] as HTMLInputElement).value;
   var wbrand2:string = (wbrand[1] as HTMLInputElement).value;
   var wdiameter2: number =+(wdiameter[1] as HTMLInputElement).value;
   var wbrand3:string = (wbrand[2] as HTMLInputElement).value;
   var wdiameter3: number = +(wdiameter[2] as HTMLInputElement).value;
   var wbrand4:string = (wbrand[3] as HTMLInputElement).value;
   var wdiameter4: number = +(wdiameter[3] as HTMLInputElement).value;

   // var wbrand1:string = (<HTMLInputElement>document.getElementById("wbrand1")).value;
   // var wdiameter1: number = +(<HTMLInputElement>document.getElementById("wdiameter1")).value;
   // var wbrand2:string = (<HTMLInputElement>document.getElementById("wbrand2")).value;
   // var wdiameter2: number = +(<HTMLInputElement>document.getElementById("wdiameter2")).value;
   // var wbrand3:string = (<HTMLInputElement>document.getElementById("wbrand3")).value;
   // var wdiameter3: number = +(<HTMLInputElement>document.getElementById("wdiameter3")).value;
   // var wbrand4:string = (<HTMLInputElement>document.getElementById("wbrand4")).value;
   // var wdiameter4: number = +(<HTMLInputElement>document.getElementById("wdiameter4")).value;

   var b1:boolean = (wdiameter1>=0.4 && wdiameter1<=2);
   var b2:boolean = (wdiameter2>=0.4 && wdiameter2<=2);
   var b3:boolean = (wdiameter3>=0.4 && wdiameter3<=2);
   var b4:boolean = (wdiameter4>=0.4 && wdiameter4<=2);

   let message : string = "ha de tenir un diametre entre 0.4 i 2!!!";
   if(!b1) window.alert("La roda 1 "+message);
   if(!b2) window.alert("La roda 2 "+message);
   if(!b3) window.alert("La roda 3 "+message);
   if(!b4) window.alert("La roda 4 "+message);


   if (b1 && b2 && b3 && b4){
      car.removeWheels();
      car.addWheel(new Wheel(wdiameter1,wbrand1));
      car.addWheel(new Wheel(wdiameter2,wbrand2));
      car.addWheel(new Wheel(wdiameter3,wbrand3));
      car.addWheel(new Wheel(wdiameter4,wbrand4));

      showCarAndWheels();
   }
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

function checkCarPlate(car:Car) : boolean{

   var plate : string = car.plate;
   var numLletres : number = 0;
   var numNumeros : number = 0;


   for(var i=0; i<plate.length; i++){
      let c = plate[i];
      if (esNumero(c)) numNumeros++;
      if (esLletra(c)) numLletres++; 
   }

   if(numNumeros==4 && numLletres==3){
      return true;
   }else{
      return false;
   }

}

function esNumero(c : string) : boolean{
   
   var b : boolean = false;
   
   b = ("0123456789".indexOf(c))>=0;


   return b;
}

function esLletra(c : string) : boolean{
   
   var b : boolean = false;

   b = ("abcdefghijklmnopqrstuvwxyz".indexOf(c))>=0;


   return b;
}