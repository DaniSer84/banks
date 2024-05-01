let map

async function initMap() {
    const position = { lat: 45.46380300713233, lng: 9.188482633899309}

    const {Map} = await google.maps.importLibrary('maps')
    const { AdvancedMarkerElement} = await google.maps.importLibrary('marker')

    map = new Map(document.getElementById('map'), {
        zoom: 13.5,
        center: position,
        mapId: 'bank-map'
    })

    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: 'Milano'
    })
}

initMap()


