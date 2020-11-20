// Rocket Constructor
export class Rocket {
    constructor(name, thrusterMaxPower) {
        this.name = name;
        this.thrusterMaxPower = thrusterMaxPower;
        this.thrusterCurrentPower = [];

        for(var i=0;i<thrusterMaxPower.length;i++){
            this.thrusterCurrentPower.push(0);
        }

    }

    accelerate(){

        for(var i=0;i<this.thrusterMaxPower.length;i++){
            var currentPow = this.thrusterCurrentPower[i];
            var maxPow = this.thrusterMaxPower[i];
            if(maxPow-currentPow>=10){
                this.thrusterCurrentPower[i] = currentPow + 10;
            }
        }

    }

    brake(){

        for(var i=0;i<this.thrusterMaxPower.length;i++){
            var currentPow = this.thrusterCurrentPower[i];
            var maxPow = this.thrusterMaxPower[i];
            if(currentPow>0){
                this.thrusterCurrentPower[i] = currentPow - 10;
            }
        }

    }

    toString(){

        var output = "Rocket ";
        
        output += this.name + ": ";

        var currentPow = this.thrusterCurrentPower;
        var maxPow = this.thrusterMaxPower;
        var sumPow =0;
        for(var i=0;i<maxPow.length;i++){
            output += "T"+(i+1) +" : [ "+currentPow[i]+" / "+ maxPow[i]+ " ] ";
            sumPow+=currentPow[i];
        }

        output += " TOTAL CURRENT POWER: <B>"+ sumPow + "</B>";

        return output;
    }

    // Shows Only Maximum Power
    // toString(){

    //     var output = "";
        
    //     output += this.name + ": ";

    //     for(var i=0;i<this.thrusterMaxPower.length-1;i++){
    //         output += this.thrusterMaxPower[i]+",";
    //     }
    //     output += this.thrusterMaxPower[this.thrusterMaxPower.length-1];

    //     return output;
    // }

}