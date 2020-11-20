import { Rocket } from "./Rocket.js";

export class UI{

    constructor(){
        this.rocketsList = [];
    }

    getRocket(i){
        if (i>=this.rocketsList.length) console.log(`Rocket ${i} doesn't exist!!!`);
        return this.rocketsList[i];
    }

    createRockets(){
        const rocket1 = new Rocket("32WESSDS",[10,30,80]);
        const rocket2 = new Rocket("LDSFJA32",[30,40,50,50,30,10]);
        this.rocketsList.push(rocket1);
        this.rocketsList.push(rocket2);
    }

    createRocket1(){
        if (this.rocketsList.length==2) {
            window.alert("Nomes es poden crear 2 rockets!!!");
            return;
        }
        const rocket1 = new Rocket("32WESSDS",[10,30,80]);
        this.rocketsList.push(rocket1);
    }

    createRocket2(){
        if (this.rocketsList.length==2) {
            window.alert("Nomes es poden crear 2 rockets!!!");
            return;
        }else if (this.rocketsList.length==0){
            window.alert("Primer has de crear el rocket 1.");
            return;
        }
        const rocket2 = new Rocket("LDSFJA32",[30,40,50,50,30,10]);
        this.rocketsList.push(rocket2);
    }
    
    showRockets(){
    
        var output = "";
    
        for(var i=0;i<this.rocketsList.length;i++){
            output += this.rocketsList[i].toString();
            output += '<BR>';
        }
    
        document.getElementById("output").innerHTML=output;
    }

    showRocket(i){
        var output = this.rocketsList[i].toString();
        document.getElementById("output").innerHTML=output;

    }
    
    showMessage(message){
        document.getElementById("output").innerHTML+=message+"<BR>";
    }

    resetMessage(){
        document.getElementById("output").innerHTML="";
    }

}