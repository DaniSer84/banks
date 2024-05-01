let map, infoWindow

function initMap() {
    const position = { lat: 45.46380300713233, lng: 9.188482633899309}

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13.5,
        center: position,
    })

    // new google.maps.Marker({
    //     position: position,
    //     map
    // })

    infoWindow = new google.maps.InfoWindow()
    
    return map
}

function bindInfoWindow(marker, content) {
    google.maps.event.addListener(marker, 'click', () => {
        infoWindow.setContent(content)
        infoWindow.open(map, marker)
    })
}

export {initMap, bindInfoWindow, map}


