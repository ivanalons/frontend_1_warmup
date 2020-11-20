
var inputs = document.forms["formularioValidacion"].elements;


function validar(){

    resetElements();

    if (checkElements()==true){

        document.getElementById("message").innerHTML="";
        document.forms["formularioValidacion"].submit();

    }else{
        //Mostrar error por pantalla
        mostrarErrorPantalla("Completa correctamente los campos obligatorios");
    }
}

function mostrarErrorPantalla(missatge){
    document.getElementById("message").innerHTML="Completa correctamente los campos obligatorios";
}

function resetElements(){

    var inputs = document.forms["formularioValidacion"].elements;

    for(var i=0;i<inputs.length;i++){
        console.log(inputs[i]);
        inputs[i].classList.remove("is-invalid");
        // inputs[i].classList.add("is-invalid");
    }
}

function checkElements(){

    var res = true;

    var field_email = document.getElementById("email1");
    var pwd1 = document.getElementById("password1");
    var pwd2 = document.getElementById("password2");
    var prov = document.getElementById("province");

    var em_error = "em";
    var p1_error = "p1";
    var p2_error = "p2";
    var pr_error = "pr";

    if(prov.value==0){
        prov.classList.add("is-invalid");
        res = false;
        showMessage(pr_error,"Selecciona una provincia");
    }

    if(pwd1.value==""){
        pwd1.classList.add("is-invalid");
        res = false;
        showMessage(p1_error,"El password no puede estar vacío");
    }

    if(pwd2.value==""){
        pwd2.classList.add("is-invalid");
        res = false;
        showMessage(p2_error,"El password no puede estar vacío");
    }

    if(pwd1.value!=pwd2.value){
        if (pwd1.value!="") pwd1.classList.add("is-invalid");
        if (pwd2.value!="") pwd2.classList.add("is-invalid");
        res = false;
        showMessage(p1_error,"El password tiene que coincidir en ambos campos");
        showMessage(p2_error,"El password tiene que coincidir en ambos campos");
    }

    // window.alert(field_email.value.length);

    if( field_email.value.length==0){
        field_email.classList.add("is-invalid");
        res=false;
        showMessage(em_error,"El campo email no puede estar vacío.")
    }else if(validar_email(field_email.value)==false){
        field_email.classList.add("is-invalid");
        res=false;
        showMessage(em_error,"Formato de email incorrecto.")
    }

    return res;
}

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

function showMessage(elementId,message){
    document.getElementById(elementId).innerHTML=message;
}