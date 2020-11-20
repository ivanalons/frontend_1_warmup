import { Rocket } from "./Rocket.js";

var rocketsList = [];

function createRockets(){
    const rocket1 = new Rocket("32WESSDS",3);
    const rocket2 = new Rocket("LDSFJA32",6);
    rocketsList.push(rocket1);
    rocketsList.push(rocket2);
}

function showRockets(){

    var output = "";

    for(var i=0;i<rocketsList.length;i++){
        output += `Rocket ${rocketsList[i].name} has ${rocketsList[i].thrustersNumber} thrusters.`;
        output += '<BR>';
    }

    document.getElementById("output").innerHTML=output;
}

createRockets();
showRockets();