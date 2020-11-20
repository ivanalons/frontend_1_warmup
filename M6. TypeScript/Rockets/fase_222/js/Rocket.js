// Rocket Constructor
export class Rocket {
    constructor(name, thrusterMaxPower) {
        this.name = name;
        this.thrusterMaxPower = thrusterMaxPower;
    }

    toString(){

        var output = "";
        
        output += this.name + ": ";

        for(var i=0;i<this.thrusterMaxPower.length-1;i++){
            output += this.thrusterMaxPower[i]+",";
        }
        output += this.thrusterMaxPower[this.thrusterMaxPower.length-1];

        return output;
    }
}