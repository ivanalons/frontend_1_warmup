import { UI } from "./UI.js";
// import { Rocket } from "./Rocket.js";


const ui = new UI();
ui.createRockets(); //Es creen els rockets automàticament sense esperar que l'usuari els crei.

$( "#create1" ).click(function() {
    ui.createRocket1();
});

$( "#create2" ).click(function() {
    ui.createRocket2();
});

$( "#accelerate1" ).click(function() {
    var r1 = ui.getRocket(0);
    r1.accelerate();
    ui.resetMessage();
});

$( "#accelerate2" ).click(function() {
    var r2 = ui.getRocket(1);
    r2.accelerate();
    ui.resetMessage();
});

$( "#brake1" ).click(function() {
    var r1 = ui.getRocket(0);
    r1.brake();
    ui.resetMessage();

});

$( "#brake2" ).click(function() {
    var r2 = ui.getRocket(1);
    r2.brake();
    ui.resetMessage();

});


$( "#print1" ).click(function() {
    ui.showRocket(0);
});

$( "#print2" ).click(function() {
    ui.showRocket(1);
});

$( "#print_all" ).click(function() {
    ui.showRockets();
});
