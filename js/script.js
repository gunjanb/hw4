var marker = "";

function initMap() {
    var map = new google.maps.Map(document.getElementById('google-map'), {
        zoom: 4,
        center: { lat: -25.363, lng: 131.044 }
    });
    var marker = new google.maps.Marker({
        position: { lat: -25.363, lng: 131.044 },
        map: map,

    });
    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function () {
        geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, resultsMap) {
    var address = $("#dropdown :selected")[0].text;

    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            if (marker)
                marker.setMap(null);
            marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}
