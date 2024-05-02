let map, infoWindow

function initMap() {
    const position = { lat: 45.46862499927196, lng: 9.18923242994601}

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


