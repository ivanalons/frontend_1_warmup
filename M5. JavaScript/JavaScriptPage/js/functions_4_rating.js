var heartsArray = [];
heartsArray[0] = document.getElementById("h1");
heartsArray[1] = document.getElementById("h2");
heartsArray[2] = document.getElementById("h3");
heartsArray[3] = document.getElementById("h4");
heartsArray[4] = document.getElementById("h5");

var ratingFixed = -1;
// var canvas = false;

function paintHearts(num){

    cleanHearts(true);

    // if(canvas==false){

        for(var i=0;i<heartsArray.length;i++){
            if(i<num) {
                heartsArray[i].style.color="red";
            }
        }

    // }else{
    //     canvas=false;
    // }
}

function cleanHearts(force){

    for(var i=0;i<heartsArray.length;i++){
        if (i>=ratingFixed) heartsArray[i].style.color="#0000ff";
    }

}

function fixHearts(num){
    ratingFixed=num;
    paintHearts(num);
}

function reset(){
    // window.alert("CLICK");
    // canvas=true;
}

