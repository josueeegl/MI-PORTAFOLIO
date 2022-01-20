function initMap() {
    var coordenadas = {
        lat: 14.138148814610386,
        lng: -90.01161422964613
    };
    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 10,
        center: coordenadas
    });

    var marker = new google.maps.Marker({
        position: coordenadas,
        map: map
    });
}