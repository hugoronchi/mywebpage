var map = L.map('map', {
    keyboard: false,
    dragging: false,
    zoomControl: false,
    boxZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    tap: false,
    touchZoom: false,
    minZoom: 11,
    maxZoom: 11
}).setView([-31.741730, -60.509474], 11);

var tile = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: ''
}).addTo(map);

var marker = L.marker([-31.741730, -60.509474]).addTo(map);