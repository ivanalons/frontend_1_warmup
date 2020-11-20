function exerciciBasic_1(){
    console.log("Hola Mundo!");
}

function exerciciBasic_2(){
    window.alert("Me llamo Ify!");
}

function exerciciBasic_3(){
    var nom = "Aitor";
    var cognom = "Tilla";

    console.log(nom+" "+cognom);
}

function exerciciBasic_4(){

    var num1 = 34;
    var num2 = 56;

    var suma = num1 + num2;
    
    console.log("La suma entre "+num1+" i "+num2+" es "+suma);

}

function exerciciBasic_5(){

    var nota_examen = 5.3;

    if(nota_examen<5){
        window.alert("Ohh!!! Has suspendido con una nota de "+nota_examen);
    }else{
        window.alert("Sii!!! Has aprobado con una nota de "+nota_examen);
    }

}

function exerciciBasic_6(){

    var frase = "Tinc un cotxe de color verd.";

    var frase2 = frase.replace("verd", "blau");
    var frase3 = frase2.replace(/o/g, "u");

    console.log(frase3);
}

function exerciciBasic_7(){

    var array = ['taula','cadira','ordinador','llibreta'];

    for(var i=0;i<array.length;i++){
        console.log("L'objecte "+array[i]+" està a la posició "+i);
    }
}

function calculadora(operador, valor1, valor2){

    var resultat = 0;

    if(operador=="suma"){
        resultat = valor1+valor2;
    }else if(operador=="multiplicacio"){
        resultat = valor1*valor2;
    }else if(operador=="resta"){
        resultat = valor1-valor2;
    }

    return resultat;
}

function exerciciBasic_8(){
    let s = calculadora("suma",8,5);
    let r = calculadora("resta",8,5);
    let m = calculadora("multiplicacio",8,5);

    console.log("valor 1: [8] / valor 2: [5] ");

    console.log("La suma es "+s);
    console.log("La resta es "+r);
    console.log("La multiplicacio es "+m);

}