let endpoint = "http://api.icndb.com/jokes/random";
let crossorigin = "https://crossorigin.me";
let url = crossorigin+"/"+endpoint;

$("#requestButton").click(function(){

    $.ajax({
        url: endpoint,
        // contentType: "application/json", //data sent
        dataType: 'json', //data received
        method: 'GET',
        type: 'GET',
        success: function(result){
            // console.log(result);
            jsonResponse = result.value;
            document.getElementById("lastJoke").innerHTML = jsonResponse.joke;
        },
        error: function(error){
            console.log("ERROR: "+ JSON.stringify(error));
        }
    })

});