var map = L.map('map').setView([41.3867135,2.1704387], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.on('click', onMapClick);

var lastMarkerClick = null;

function onMapClick(e) {

    if(lastMarkerClick!=null) map.removeLayer(lastMarkerClick);

    var markerClick = L.marker([e.latlng.lat,e.latlng.lng]).addTo(map);
    lastMarkerClick = markerClick;

    markerClick.bindPopup(`Mis coordenadas son:<br>
                        <b>Lat:${e.latlng.lat},Lng:${e.latlng.lng}</b>
    `);

    map.setView(e.latlng,18);
}

