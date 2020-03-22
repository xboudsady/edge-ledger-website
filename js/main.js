// import config from 'config';

// Initiatlize and add the map
function initMap() {
    // Your location
    const loc = { lat: 42.361145, lng: -71.057083 };

    // Center map onlocation
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    });

    // The marker, position at location
    const marker = new google.maps.Marker({ position: loc, map: map });
}