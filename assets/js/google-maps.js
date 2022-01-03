function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 7.235471525540734, lng: 80.38324839149726};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Deewela , Pallegama' // Title Location
    });
}