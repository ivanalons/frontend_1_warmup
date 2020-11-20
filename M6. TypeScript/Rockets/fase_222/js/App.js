import { Rocket } from "./Rocket.js";

var rocketsList = [];

function createRockets(){
    const rocket1 = new Rocket("32WESSDS",[10,30,80]);
    const rocket2 = new Rocket("LDSFJA32",[30,40,50,50,30,10]);
    rocketsList.push(rocket1);
    rocketsList.push(rocket2);
}

function showRockets(){

    var output = "";

    for(var i=0;i<rocketsList.length;i++){
        output += rocketsList[i].toString();
        output += '<BR>';
    }

    document.getElementById("output").innerHTML=output;
}

createRockets();
showRockets();