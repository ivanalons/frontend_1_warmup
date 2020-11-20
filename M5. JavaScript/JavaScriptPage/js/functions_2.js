function fase1(){

    var nom = "ALEJANDRO";

    for(var i=0; i<nom.length; i++){
        console.log(nom[i]);
    }

}


function fase2(){

    var nom = "ALEJ3ANDRO";

    console.log("Partim del nom "+nom);

    for(var i=0; i<nom.length; i++){

        var output = "";
        var lletra = nom[i];
        
        if(esConsonant(lletra)==true){
            output = "He trobat la CONSONANT: "+lletra;
        }else if (esVocal(lletra)==true){
            output = "He trobat la VOCAL: "+lletra;
        }else if (esNumero(lletra)){
            output = "Els noms de persones no contenen el número: "+lletra;
        }

        console.log(output);
    }

}

function esVocal(lletra){

    var str = "aeiou";
    var n = str.search(lletra.toLowerCase());

    if(n<0){
        return false;
    }else{
        return true;
    }

}

function esConsonant(lletra){
    
    var str = "bcdfghjklmnpqrstvwxyz";
    var n = str.search(lletra.toLowerCase());

    if(n<0){
        return false;
    }else{
        return true;
    }
}

function esNumero(lletra){

    var str = "0123456789";
    var n = str.search(lletra);

    if(n<0){
        return false;
    }else{
        return true;
    }
}

function fase3(){
    
    var nom = "ALEJANDRO";
    var map = [];

    for(var i=0;i<nom.length;i++){
       let lletra = nom[i];

       if(map[lletra]!=null){
           map[lletra] = map[lletra]+1;
       }else{
           map[lletra]=1;
       }
    }

    console.log(map);
}

function fase4(){
    var nom=["A","L","E","J","A","N","D","R","O"];
    var cognom=["K","A","L","E"];

    var complet = nom.concat(" ");
    complet = complet.concat(cognom);

    console.log(complet);

}