var map = L.map('mapid').on('load', onMapLoad).setView([41.400, 2.206], 9);
//map.locate({setView: true, maxZoom: 17});
	
var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

//en el clusters almaceno todos los markers
var markers = L.markerClusterGroup();
var data_markers = [];

var king_food = []; //guardamos string con todos las categorias de restaurante de cada marker

function onMapLoad() {

	console.log("Mapa cargado");
    /*
	FASE 3.1
		1) Relleno el data_markers con una petición a la api
		2) Añado de forma dinámica en el select los posibles tipos de restaurantes
		3) Llamo a la función para --> render_to_map(data_markers, 'all'); <-- para mostrar restaurantes en el mapa
	*/
	$.ajax({
        url: "http://localhost/mapa/api/apiRestaurants.php",
		dataType: 'json', //data received
        method: 'GET',
        type: 'GET',
        success: function(result){
			for(var i=0;i<result.length;i++){

				var marker = L.marker([result[i].lat,result[i].lng]).addTo(map);
				marker.bindPopup(`<h3> ${result[i].name}</h3>
						${result[i].address}<br>
						${result[i].king_food}
				`);
				data_markers.push(marker);
				king_food.push(result[i].king_food);
			}

			
			document.getElementById("kind_food_selector").innerHTML = `
				<option value="all">Selecciona una opción</option>
				<option value="Mexicano">Mexicano</option>
				<option value="Vegetariano">Vegetariano</option>
				<option value="Mediterráneo">Mediterráneo</option>
			`;

			render_to_map(data_markers,'all');

        },
        error: function(error){
            console.log("ERROR: "+ JSON.stringify(error));
        }
	})

}

$('#kind_food_selector').on('change', function() {
  console.log(this.value);
  render_to_map(data_markers, this.value);
});



function render_to_map(data_markers,filter){
	
	/*
	FASE 3.2
		1) Limpio todos los marcadores
		2) Realizo un bucle para decidir que marcadores cumplen el filtro, y los agregamos al mapa
	*/	

	for(var i=0;i<data_markers.length;i++){
		map.removeLayer(data_markers[i]);
	}

	for(var i=0;i<data_markers.length;i++){
		var marker = data_markers[i];
		if (king_food[i].search(filter)>=0 || filter=='all'){
			marker.addTo(map);
		}
		// window.alert(king_food[i]);
	}
			
}