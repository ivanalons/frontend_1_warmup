var map = L.map('map').setView([41.3867135,2.1704387], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var balmes16 = L.marker([41.386887,2.165858]).addTo(map);

balmes16.bindPopup(`<h3>Restaurant Centfocs</h3> 
                    Restaurante mediterráneo<br>
                    Carrer de Balmes 16, 08007 Barcelona
`);

