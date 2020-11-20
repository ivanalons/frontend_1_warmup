import { UI } from "./UI.js";
// import { Rocket } from "./Rocket.js";

function mainFase3(){

    const ui = new UI();
   
    //Apartat 1
    ui.createRockets();
    const rocket1 = ui.getRocket(0);
    const rocket2 = ui.getRocket(1);

    //Apartat 2 i 3
    ui.showRockets();

    //Apartat 4
    for(var i=0;i<3;i++){
        rocket1.accelerate();
        rocket2.accelerate();
    }

    //Apartat 5
    ui.showMessage("<B>ACCELERATE 3 TIMES</B>");
    ui.showRockets();

    //Apartat 6
    for(var i=0;i<5;i++){
        rocket1.brake();
    }
    for(var i=0;i<7;i++){
        rocket2.accelerate();
    }

    //Apartat 7
    ui.showMessage("<B> Frenar cinc cops amb el primer coet (32WESSDS) i accelerar set amb el segon coet.<B>");
    ui.showRockets();

    //Apartat 8
    for(var i=0;i<15;i++){
        rocket1.accelerate();
        rocket2.accelerate();
    }

    //Apartat 9
    ui.showMessage("<B> Accelerar 15 cops amb els dos coets. <B>");
    ui.showRockets();

}

mainFase3();