console.log("Hello World!");

// var myNumber : number = 5;
// var myString : string = "Hola";

// document.writeln(myNumber.toString());

function getFullName(firstname:string, lastname:string) : string{
    if(lastname==undefined) return firstname;
    return `${firstname} ${lastname}`;
}

// document.write(getFullName("Aitor"));
document.write(getFullName("Aitor","Tilla"));